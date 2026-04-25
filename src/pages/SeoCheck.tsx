import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/lib/blog/articles";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, XCircle, Loader2 } from "lucide-react";

/**
 * SEO Check — внутренний инструмент. Проходит по всем статьям блога,
 * грузит каждую в скрытом iframe, читает <head> и собирает OG/Twitter теги.
 *
 * Открывать вручную: /seo-check
 * Не индексируется (noindex), не светится в навигации.
 */

const REQUIRED_KEYS = [
  "og:title",
  "og:description",
  "og:image",
  "og:image:width",
  "og:image:height",
  "og:type",
  "og:url",
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
] as const;

type TagMap = Record<string, string>;

interface PageReport {
  slug: string;
  title: string;
  routePath: string;
  status: "pending" | "ok" | "warn" | "error";
  pageTitle?: string;
  canonical?: string;
  tags: TagMap;
  missing: string[];
  notes: string[];
  error?: string;
}

const collectMetaFromDoc = (doc: Document): { tags: TagMap; canonical?: string; pageTitle?: string } => {
  const tags: TagMap = {};
  doc.querySelectorAll("meta").forEach((m) => {
    const key = m.getAttribute("property") || m.getAttribute("name");
    const content = m.getAttribute("content") || "";
    if (key && !tags[key]) tags[key] = content;
  });
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href") || undefined;
  const pageTitle = doc.title;
  return { tags, canonical, pageTitle };
};

const loadPageInIframe = (path: string, iframe: HTMLIFrameElement): Promise<{ tags: TagMap; canonical?: string; pageTitle?: string }> => {
  return new Promise((resolve, reject) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      try {
        const doc = iframe.contentDocument;
        if (!doc) {
          reject(new Error("Нет доступа к contentDocument"));
          return;
        }
        // SEOHead применяет meta в useEffect — даём React пару тиков
        setTimeout(() => {
          if (settled) return;
          settled = true;
          try {
            resolve(collectMetaFromDoc(doc));
          } catch (e) {
            reject(e);
          }
        }, 600);
      } catch (e) {
        reject(e);
      }
    };

    iframe.onload = finish;
    iframe.onerror = () => {
      if (!settled) {
        settled = true;
        reject(new Error("iframe error"));
      }
    };

    iframe.src = path;

    // safety timeout
    setTimeout(() => {
      if (!settled) {
        finish();
      }
    }, 8000);
  });
};

const evaluateReport = (report: PageReport): PageReport => {
  const missing = REQUIRED_KEYS.filter((k) => !report.tags[k]);
  const notes: string[] = [];

  const ogImage = report.tags["og:image"];
  const twImage = report.tags["twitter:image"];
  if (ogImage && twImage && ogImage !== twImage) {
    notes.push("og:image и twitter:image различаются");
  }
  if (ogImage && ogImage.includes("/og-image.jpg")) {
    notes.push("Используется дефолтная обложка og-image.jpg");
  }
  if (ogImage && !ogImage.startsWith("https://")) {
    notes.push("og:image не абсолютный HTTPS URL");
  }
  const w = report.tags["og:image:width"];
  const h = report.tags["og:image:height"];
  if (w && h && (w !== "1200" || h !== "630")) {
    notes.push(`Размеры обложки ${w}×${h}, ожидалось 1200×630`);
  }
  if (report.tags["twitter:card"] && report.tags["twitter:card"] !== "summary_large_image") {
    notes.push(`twitter:card = ${report.tags["twitter:card"]} (ожидалось summary_large_image)`);
  }

  let status: PageReport["status"] = "ok";
  if (missing.length > 0) status = "error";
  else if (notes.length > 0) status = "warn";

  return { ...report, missing, notes, status };
};

const SeoCheck = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [reports, setReports] = useState<PageReport[]>(
    blogArticles.map((a) => ({
      slug: a.slug,
      title: a.title,
      routePath: a.routePath,
      status: "pending" as const,
      tags: {},
      missing: [],
      notes: [],
    }))
  );
  const [running, setRunning] = useState(false);
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  // noindex для самой страницы-инструмента
  useEffect(() => {
    document.title = "SEO Check — внутренний инструмент | Ракушка65";
    const meta = document.createElement("meta");
    meta.setAttribute("name", "robots");
    meta.setAttribute("content", "noindex, nofollow");
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const runScan = async () => {
    if (!iframeRef.current) return;
    setRunning(true);
    const iframe = iframeRef.current;

    for (let i = 0; i < blogArticles.length; i++) {
      const article = blogArticles[i];
      setCurrentIdx(i);
      try {
        const { tags, canonical, pageTitle } = await loadPageInIframe(article.routePath, iframe);
        setReports((prev) => {
          const next = [...prev];
          next[i] = evaluateReport({
            ...next[i],
            tags,
            canonical,
            pageTitle,
            status: "ok",
          });
          return next;
        });
      } catch (e: any) {
        setReports((prev) => {
          const next = [...prev];
          next[i] = { ...next[i], status: "error", error: e?.message || String(e) };
          return next;
        });
      }
    }

    setCurrentIdx(null);
    setRunning(false);
  };

  const summary = useMemo(() => {
    const total = reports.length;
    const ok = reports.filter((r) => r.status === "ok").length;
    const warn = reports.filter((r) => r.status === "warn").length;
    const err = reports.filter((r) => r.status === "error").length;
    const pending = reports.filter((r) => r.status === "pending").length;
    return { total, ok, warn, err, pending };
  }, [reports]);

  const exportJson = () => {
    const data = JSON.stringify(reports, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `seo-check-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              SEO Check — OG / Twitter Cards
            </h1>
            <p className="font-body text-muted-foreground">
              Внутренний инструмент. Проходит по всем статьям блога, читает мета-теги и подсвечивает проблемы.
              Эта страница не индексируется и не присутствует в меню.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Button onClick={runScan} disabled={running}>
              {running ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Сканирую {currentIdx !== null ? `${currentIdx + 1}/${blogArticles.length}` : ""}
                </>
              ) : (
                "Запустить проверку"
              )}
            </Button>
            <Button variant="outline" onClick={exportJson} disabled={running}>
              Скачать JSON-отчёт
            </Button>
            <Link to="/blog" className="text-sm text-primary hover:underline ml-auto">
              ← Вернуться в блог
            </Link>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <div className="rounded-lg border border-border/40 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">Всего</div>
              <div className="font-heading text-2xl font-bold">{summary.total}</div>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">OK</div>
              <div className="font-heading text-2xl font-bold text-emerald-500">{summary.ok}</div>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">Предупреждения</div>
              <div className="font-heading text-2xl font-bold text-amber-500">{summary.warn}</div>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">Ошибки</div>
              <div className="font-heading text-2xl font-bold text-destructive">{summary.err}</div>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">Ожидают</div>
              <div className="font-heading text-2xl font-bold text-muted-foreground">{summary.pending}</div>
            </div>
          </div>

          {/* Reports */}
          <div className="space-y-4">
            {reports.map((r) => {
              const statusIcon =
                r.status === "ok" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : r.status === "warn" ? (
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                ) : r.status === "error" ? (
                  <XCircle className="w-5 h-5 text-destructive shrink-0" />
                ) : (
                  <Loader2 className="w-5 h-5 text-muted-foreground animate-spin shrink-0" />
                );

              return (
                <details
                  key={r.slug}
                  className="rounded-lg border border-border/40 bg-card/40 overflow-hidden group"
                >
                  <summary className="flex items-start gap-3 p-4 cursor-pointer hover:bg-card/60 transition-colors list-none">
                    {statusIcon}
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-base font-semibold text-foreground truncate">
                        {r.title}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground truncate">{r.routePath}</div>
                      {r.missing.length > 0 && (
                        <div className="text-xs text-destructive mt-1">
                          Отсутствует: {r.missing.join(", ")}
                        </div>
                      )}
                      {r.notes.length > 0 && (
                        <div className="text-xs text-amber-600 mt-1">{r.notes.join(" · ")}</div>
                      )}
                      {r.error && <div className="text-xs text-destructive mt-1">Ошибка: {r.error}</div>}
                    </div>
                    {r.tags["og:image"] && (
                      <img
                        src={r.tags["og:image"]}
                        alt=""
                        className="w-20 h-12 object-cover rounded border border-border/40 shrink-0"
                        loading="lazy"
                      />
                    )}
                  </summary>

                  <div className="border-t border-border/40 p-4 bg-background/40">
                    {r.pageTitle && (
                      <div className="mb-3 text-sm">
                        <span className="text-muted-foreground">document.title:</span>{" "}
                        <span className="text-foreground">{r.pageTitle}</span>
                      </div>
                    )}
                    {r.canonical && (
                      <div className="mb-3 text-sm break-all">
                        <span className="text-muted-foreground">canonical:</span>{" "}
                        <a
                          href={r.canonical}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {r.canonical}
                        </a>
                      </div>
                    )}

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono">
                        <thead>
                          <tr className="text-left text-muted-foreground border-b border-border/30">
                            <th className="py-2 pr-4 w-1/3">Тег</th>
                            <th className="py-2">Значение</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(r.tags)
                            .filter(([k]) => k.startsWith("og:") || k.startsWith("twitter:") || k === "description")
                            .sort(([a], [b]) => a.localeCompare(b))
                            .map(([k, v]) => {
                              const isImage = k === "og:image" || k === "twitter:image";
                              return (
                                <tr key={k} className="border-b border-border/20 align-top">
                                  <td className="py-2 pr-4 text-foreground">{k}</td>
                                  <td className="py-2 break-all text-muted-foreground">
                                    {isImage ? (
                                      <a
                                        href={v}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-primary hover:underline"
                                      >
                                        {v}
                                      </a>
                                    ) : (
                                      v || <em className="text-destructive">пусто</em>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>

          {/* Hidden iframe для загрузки страниц */}
          <iframe
            ref={iframeRef}
            title="seo-check-loader"
            className="absolute -left-[9999px] w-[1024px] h-[768px] opacity-0 pointer-events-none"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeoCheck;
