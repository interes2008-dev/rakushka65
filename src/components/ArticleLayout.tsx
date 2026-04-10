import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

interface ArticleLayoutProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbName: string;
  slug: string;
  children: React.ReactNode;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const ArticleLayout = ({ title, seoTitle, seoDescription, breadcrumbName, slug, children, jsonLd }: ArticleLayoutProps) => {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: "/" },
    { name: "Статьи", url: "/articles" },
    { name: breadcrumbName, url: `/articles/${slug}` },
  ]);

  const allJsonLd = jsonLd ? [breadcrumb, ...(Array.isArray(jsonLd) ? jsonLd : [jsonLd])] : [breadcrumb];

  return (
    <div className="relative min-h-screen">
      <SEOHead title={seoTitle} description={seoDescription} lang="ru" jsonLd={allJsonLd} />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li>/</li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
              <li>/</li>
              <li className="text-foreground">{breadcrumbName}</li>
            </ol>
          </motion.nav>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="prose prose-invert max-w-none">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">{title}</h1>
            <div className="font-body text-muted-foreground leading-relaxed space-y-6 [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:text-foreground [&_a]:text-primary [&_a]:hover:underline">
              {children}
            </div>

            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4">
                Хотите попробовать свежие морепродукты прямо с Сахалина? Мы доставляем живые вонголе, устрицы, гребешок и другие редкие деликатесы по всей России за 24 часа.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/catalog/vongole" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:scale-105 transition-transform">
                  Купить вонголе с Сахалина
                </Link>
                <Link to="/catalog" className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                  Весь каталог
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
