import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { getBlogImage } from "@/lib/blog/images";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import ArticleCTA from "@/components/ArticleCTA";
import NotFound from "./NotFound";
import { detectProductTag } from "@/lib/blog/productCategories";
import ReadingProgress from "@/components/ReadingProgress";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

interface DbArticle {
  slug: string;
  title: string;
  description: string;
  content_html: string;
  category: string;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string;
}

const SITE_URL = "https://rakushka65.ru";

const cleanText = (value: string | null | undefined) =>
  (value || "")
    .replace(/[—–−]/g, "-")
    .replace(/\s+-\s+/g, " - ")
    .replace(/Важно отметить,?\s*/gi, "")
    .replace(/Следует учитывать,?\s*/gi, "")
    .replace(/Стоит отметить,?\s*/gi, "")
    .replace(/Таким образом,?\s*/gi, "")
    .replace(/Кроме того,?\s*/gi, "")
    .replace(/Как правило,?\s*/gi, "")
    .replace(/При этом\s+/gi, "");

const DynamicArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<DbArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        setArticle(data as DbArticle | null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Загрузка...</div>
      </div>
    );
  }

  if (!article) return <NotFound />;

  const tag = detectProductTag(article.category || article.slug);

  const FALLBACK_IMG: Record<string, string> = {
    vongole: "/src/assets/blog-vongole-real-1.jpg",
    scallop: "/src/assets/blog-scallop-royal.jpg",
    oysters: "/src/assets/blog-oysters-real-5.jpg",
    spisula: "/src/assets/blog-spisula-v2.jpg",
    urchin: "/src/assets/blog-urchin-1.jpg",
    crab: "/src/assets/blog-vongole-real-1.jpg",
  };
  const heroImage = getBlogImage(FALLBACK_IMG[tag || ""] || FALLBACK_IMG.vongole);
  const ogImageUrl = heroImage.startsWith("http") ? heroImage : `${SITE_URL}${heroImage}`;

  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: "/" },
    { name: "Блог", url: "/blog" },
    { name: cleanText(article.title), url: `/blog/${article.slug}` },
  ]);

  const cleanTitle = cleanText(article.title);
  const cleanDescription = cleanText(article.description);
  const cleanSeoTitle = cleanText(article.seo_title);
  const cleanSeoDescription = cleanText(article.seo_description);
  const cleanContentHtml = cleanText(article.content_html);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cleanTitle,
    description: cleanSeoDescription || cleanDescription,
    datePublished: article.published_at,
    dateModified: article.published_at,
    image: heroImage.startsWith("/") ? `${SITE_URL}${heroImage}` : heroImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    author: {
      "@type": "Organization",
      name: "Ракушка65",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Ракушка65",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
  };

  const buildShortTitle = (raw: string) => {
    const brand = " | Ракушка65";
    const maxLen = 60;
    const base = raw.replace(/\s*[-|]\s*Ракушка65\s*$/i, "").trim();
    if (base.length + brand.length <= maxLen) return base + brand;
    const trimmed = base.slice(0, maxLen - brand.length - 1).replace(/[\s,;:.-]+$/, "");
    return trimmed + "..." + brand;
  };
  const seoTitle = cleanSeoTitle || buildShortTitle(cleanTitle);
  const seoDesc = (cleanSeoDescription || cleanDescription).slice(0, 160);

  return (
    <div className="relative min-h-screen">
      <ReadingProgress />
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        lang="ru"
        ogType="article"
        ogImage={ogImageUrl}
        jsonLd={[breadcrumb, articleJsonLd]}
      />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-[740px]">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Блог</Link></li>
              <li>/</li>
              <li className="text-foreground line-clamp-1">{cleanTitle}</li>
            </ol>
          </nav>

          <div className="editorial-eyebrow">
            Журнал Ракушка65 .{" "}
            <time dateTime={article.published_at}>
              {new Date(article.published_at).toLocaleDateString("ru-RU", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
          </div>

          <h1 className="editorial-title">{cleanTitle}</h1>

          <img
            src={heroImage}
            alt={`${cleanTitle} - Ракушка65, морепродукты с Сахалина`}
            className="w-full rounded-xl mb-8"
            width={1200}
            height={800}
            loading="eager"
          />

          {cleanDescription && (
            <p className="editorial-deck">{cleanDescription}</p>
          )}

          <article
            className="editorial"
            dangerouslySetInnerHTML={{ __html: cleanContentHtml }}
          />

          <div className="editorial-divider">✦ ✦ ✦</div>

          <ArticleCTA tag={tag} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DynamicArticle;
