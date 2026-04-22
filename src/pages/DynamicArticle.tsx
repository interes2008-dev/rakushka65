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
import { ArrowLeft } from "lucide-react";
import { detectProductTag } from "@/lib/blog/productCategories";

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
        <div className="text-muted-foreground">Загрузка…</div>
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published_at,
    author: { "@type": "Organization", name: "Ракушка65" },
    publisher: { "@type": "Organization", name: "Ракушка65" },
  };

  return (
    <div className="relative min-h-screen">
      <SEOHead
        title={article.seo_title || article.title}
        description={article.seo_description || article.description}
        lang="ru"
        jsonLd={articleJsonLd}
      />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-[680px]">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 font-body">
            <ArrowLeft className="w-4 h-4" /> Все статьи
          </Link>

          <div className="editorial-eyebrow">
            Журнал Ракушка65 ·{" "}
            <time dateTime={article.published_at}>
              {new Date(article.published_at).toLocaleDateString("ru-RU", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
          </div>

          <h1 className="editorial-title">{article.title}</h1>

          <img
            src={heroImage}
            alt={article.title}
            className="w-full rounded-xl mb-8"
            width={1200}
            height={800}
          />

          {article.description && (
            <p className="editorial-deck">{article.description}</p>
          )}

          <article
            className="editorial"
            dangerouslySetInnerHTML={{ __html: article.content_html }}
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
