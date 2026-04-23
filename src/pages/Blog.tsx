import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { blogArticles, type BlogArticle } from "@/lib/blog/articles";
import { getBlogImage } from "@/lib/blog/images";
import { PRODUCT_CATEGORIES, detectProductTag, type ProductTag } from "@/lib/blog/productCategories";
import { supabase } from "@/integrations/supabase/client";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";
import { Calendar, Search } from "lucide-react";

const FALLBACK_IMG: Record<string, string> = {
  vongole: "/src/assets/blog-vongole-real-1.jpg",
  scallop: "/src/assets/blog-scallop-royal.jpg",
  oysters: "/src/assets/blog-oysters-real-5.jpg",
  spisula: "/src/assets/blog-spisula-v2.jpg",
  urchin: "/src/assets/blog-urchin-1.jpg",
  crab: "/src/assets/blog-vongole-real-1.jpg",
};

const Blog = () => {
  const [allArticles, setAllArticles] = useState<BlogArticle[]>(blogArticles);
  const [activeTag, setActiveTag] = useState<ProductTag | "all">("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    supabase
      .from("articles" as any)
      .select("slug, title, description, category, published_at")
      .order("published_at", { ascending: false })
      .then(({ data }: any) => {
        if (!data) return;
        const dbArticles: BlogArticle[] = data.map((a: any) => ({
          slug: a.slug,
          title: a.title,
          description: a.description,
          date: a.published_at,
          image: FALLBACK_IMG[a.category] || FALLBACK_IMG.vongole,
          routePath: `/blog/${a.slug}`,
          productTag: detectProductTag(a.category || a.slug),
        }));
        setAllArticles([...dbArticles, ...blogArticles]);
      });
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = allArticles.filter((a) => {
      if (activeTag !== "all" && a.productTag !== activeTag) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
      );
    });
    return list.sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sortBy === "newest" ? db - da : da - db;
    });
  }, [allArticles, activeTag, search, sortBy]);

  return (
    <div className="relative min-h-screen">
      <SEOHead
        title="Блог о морепродуктах с Сахалина — рецепты, советы, гиды | Ракушка65"
        description="Блог Ракушка65: статьи о вонголе, устрицах, гребешке и других морепродуктах с Сахалина. Рецепты, советы по выбору и приготовлению деликатесов."
        lang="ru"
        jsonLd={[
          getBreadcrumbSchema([
            { name: "Главная", url: "/" },
            { name: "Блог", url: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Блог Ракушка65 — статьи о морепродуктах с Сахалина",
            description: "Экспертные статьи о вонголе, устрицах, гребешке, морском еже и других деликатесах Сахалина.",
            url: "https://rakushka65.ru/blog",
            isPartOf: { "@type": "WebSite", name: "Ракушка65", url: "https://rakushka65.ru" },
          },
        ]}
      />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Блог <span className="text-primary">Ракушка65</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Статьи о морепродуктах с Сахалина: рецепты, гиды по выбору и приготовлению редких деликатесов Тихого океана
            </p>
          </motion.div>

          {/* === ВЫБЕРИТЕ ПРОДУКТ === */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-6xl mx-auto mb-10"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              Выберите продукт
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible scrollbar-hide">
              <button
                onClick={() => setActiveTag("all")}
                className={`shrink-0 group flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                  activeTag === "all"
                    ? "border-primary bg-primary/10"
                    : "border-border/40 bg-card/40 hover:border-primary/40"
                }`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center font-heading text-xl font-bold text-primary">
                  Все
                </div>
                <span className="font-body text-xs md:text-sm text-foreground whitespace-nowrap">
                  Все статьи
                </span>
              </button>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.tag}
                  onClick={() => setActiveTag(cat.tag)}
                  className={`shrink-0 group flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                    activeTag === cat.tag
                      ? "border-primary bg-primary/10"
                      : "border-border/40 bg-card/40 hover:border-primary/40"
                  }`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-1 ring-border/40 group-hover:ring-primary/40 transition-all">
                     <img
                      src={cat.image}
                      alt={`${cat.label} — купить с Сахалина, Ракушка65`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      width={80}
                      height={80}
                    />
                  </div>
                  <span className="font-body text-xs md:text-sm text-foreground whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.section>

          {/* === ПОИСК + СОРТИРОВКА === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto mb-12 flex gap-3 items-center"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Найти статью (например: как открыть устрицу)"
                className="pl-11 h-12 bg-card/50 border-border/40 focus-visible:border-primary/60"
              />
            </div>
            <div className="flex shrink-0 rounded-lg border border-border/40 overflow-hidden h-12">
              <button
                onClick={() => setSortBy("newest")}
                className={`px-4 font-body text-sm transition-colors ${
                  sortBy === "newest"
                    ? "bg-primary/15 text-primary"
                    : "bg-card/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                Новые
              </button>
              <button
                onClick={() => setSortBy("oldest")}
                className={`px-4 font-body text-sm transition-colors border-l border-border/40 ${
                  sortBy === "oldest"
                    ? "bg-primary/15 text-primary"
                    : "bg-card/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                Старые
              </button>
            </div>
          </motion.div>

          {/* === СТАТЬИ === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto min-h-[200px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((article, index) => (
                <motion.div
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: Math.min(index * 0.05, 0.4) }}
                >
                  <Link
                    to={article.routePath}
                    className="group block rounded-xl overflow-hidden border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={getBlogImage(article.image)}
                        alt={`${article.title} — статья в блоге Ракушка65`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString("ru-RU", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-tight">
                        {article.title}
                      </h3>
                      <p className="font-body text-base text-muted-foreground line-clamp-3 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body mt-10">
              Ничего не найдено. Попробуйте другой запрос или категорию.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
