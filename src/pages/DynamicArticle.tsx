import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import ArticleCTA from "@/components/ArticleCTA";
import NotFound from "./NotFound";
import { Calendar, ArrowLeft } from "lucide-react";
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
        <div className="container mx-auto px-4 max-w-[720px]">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Все статьи
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={article.published_at}>
              {new Date(article.published_at).toLocaleDateString("ru-RU", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 leading-[1.1]">
            {article.title}
          </h1>
          <article
            className="prose prose-invert max-w-none text-[1.05rem] leading-[1.8] prose-headings:font-heading prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/90"
            dangerouslySetInnerHTML={{ __html: article.content_html }}
          />

          <ArticleCTA tag={tag} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DynamicArticle;
