import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/lib/blog/articles";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, XCircle, Loader2 } from "lucide-react";

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
    setTimeout(() => {
      if (!settled) finish();
    }, 8000);
  });
};

const evaluateReport = (report: PageReport): PageReport => {
  const missing = REQUIRED_KEYS.filter((k) => !report.tags[k]);
  const notes: string[] = [];
  const ogImage = report.tags["og:image"];
  const twImage = report.tags["twitter:image"];
  if (ogImage && twImage && ogImage !== twImage) notes.push("og:image и twitter:image различаются");
  if (ogImage && ogImage.includes("/og-image.jpg")) notes.push("Используется дефолтная обложка og-image.jpg");
  if (ogImage && !ogImage.startsWith("https://")) notes.push("og:image не абсолютный HTTPS URL");
  const w = report.tags["og:image:width"];
  const h = report.tags["og:image:height"];
  if (w && h && (w !== "1200" || h !== "630")) notes.push(\`Размеры обложки \${w}×\${h}, ожидалось 1200×630\`);
  if (report.tags["twitter:card"] && report.tags["twitter:card"] !== "summary_large_image") notes.push(\`twitter:card = \${report.tags["twitter:card"]} (ожидалось summary_large_image)\`);

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

  useEffect(() => {
    document.title = "SEO Check - внутренний инструмент | Ракушка65";
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
          next[i] = evaluateReport({ ...next[i], tags, canonical, pageTitle, status: "ok" });
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

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              SEO Check - OG / Twitter Cards
            </h1>
            <p className="font-body text-muted-foreground">
              Внутренний инструмент. Проходит по статьям блога, читает мета-теги и подсвечивает проблемы.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Button onClick={runScan} disabled={running}>
              {running ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Сканирую \${currentIdx !== null ? currentIdx + 1 : ""}/\${blogArticles.length}</> : "Запустить проверку"}
            </Button>
            <Link to="/blog" className="text-sm text-primary hover:underline ml-auto">← В блог</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <div className="rounded-lg border p-4 bg-card/40"><div>Всего</div><div className="text-2xl font-bold">{summary.total}</div></div>
            <div className="rounded-lg border p-4 bg-card/40"><div>OK</div><div className="text-2xl font-bold text-emerald-500">{summary.ok}</div></div>
            <div className="rounded-lg border p-4 bg-card/40"><div>Warn</div><div className="text-2xl font-bold text-amber-500">{summary.warn}</div></div>
            <div className="rounded-lg border p-4 bg-card/40"><div>Error</div><div className="text-2xl font-bold text-destructive">{summary.err}</div></div>
          </div>
          <iframe ref={iframeRef} title="seo-check-loader" className="absolute -left-[9999px] w-[1024px] h-[768px] opacity-0 pointer-events-none" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeoCheck;
