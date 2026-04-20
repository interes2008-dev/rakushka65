import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import ArticleCTA from "@/components/ArticleCTA";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";
import { blogArticles } from "@/lib/blog/articles";
import { getBlogImage } from "@/lib/blog/images";
import { detectProductTag } from "@/lib/blog/productCategories";
import { Calendar } from "lucide-react";

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
    { name: "Блог", url: "/blog" },
    { name: breadcrumbName, url: `/blog/${slug}` },
  ]);

  const allJsonLd = jsonLd ? [breadcrumb, ...(Array.isArray(jsonLd) ? jsonLd : [jsonLd])] : [breadcrumb];

  const tag = detectProductTag(slug);
  const sameTag = blogArticles.filter((a) => a.slug !== slug && a.productTag === tag).slice(0, 3);
  const fallback = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);
  const related = sameTag.length >= 2 ? sameTag : fallback;

  return (
    <div className="relative min-h-screen">
      <SEOHead title={seoTitle} description={seoDescription} lang="ru" jsonLd={allJsonLd} />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-[720px]">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Блог</Link></li>
              <li>/</li>
              <li className="text-foreground">{breadcrumbName}</li>
            </ol>
          </motion.nav>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="prose prose-invert max-w-none">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-foreground leading-[1.1]">{title}</h1>
            <div className="font-body text-muted-foreground text-[1.05rem] leading-[1.8] space-y-6 [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-14 [&_h2]:mb-5 [&_h3]:text-foreground [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-10 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:hover:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-foreground/90 [&_blockquote]:my-8">
              {children}
            </div>

            <ArticleCTA tag={tag} />

            {related.length > 0 && (
              <div className="mt-16 pt-8 border-t border-border/30 not-prose">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Читайте также</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((article) => (
                    <Link
                      key={article.slug}
                      to={article.routePath}
                      className="group block rounded-lg overflow-hidden border border-border/30 bg-card/50 hover:border-primary/40 transition-all duration-300 no-underline"
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={getBlogImage(article.image)}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3" />
                          <time dateTime={article.date}>
                            {new Date(article.date).toLocaleDateString("ru-RU", { day: "numeric", month: "short", year: "numeric" })}
                          </time>
                        </div>
                        <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
