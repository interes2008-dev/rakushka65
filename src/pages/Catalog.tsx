import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Grid3X3, List, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { products } from "@/components/ProductsSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const { t, lang } = useLanguage();

  const title = lang === "ru"
    ? "Каталог морепродуктов Сахалина — Rakushka65"
    : "Sakhalin Seafood Catalog — Rakushka65";

  const description = lang === "ru"
    ? "Полный каталог живых морепродуктов Сахалина: устрицы, гребешок, вонголе, рапаны, морской ёж. Цены и доставка от Rakushka65."
    : "Full catalog of live Sakhalin seafood: oysters, scallops, vongole, rapana, sea urchin. Prices and delivery from Rakushka65.";

  const breadcrumb = getBreadcrumbSchema([
    { name: lang === "ru" ? "Главная" : "Home", url: "/" },
    { name: lang === "ru" ? "Каталог" : "Catalog", url: "/catalog" },
  ]);

  const categories = [
    { key: "Все", label: t.catalog.all },
    { key: "Устрицы", label: t.catalog.oysters },
    { key: "Моллюски", label: t.catalog.mollusks },
  ];

  const filtered = products.filter(
    (p) => activeCategory === "Все" || p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return parseInt(a.price.replace(/\s/g, "")) - parseInt(b.price.replace(/\s/g, ""));
    if (sortBy === "price-desc") return parseInt(b.price.replace(/\s/g, "")) - parseInt(a.price.replace(/\s/g, ""));
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="relative min-h-screen">
      <SEOHead title={title} description={description} ogImage="https://rakushka65.lovable.app/og-catalog.jpg" jsonLd={breadcrumb} />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              {t.catalog.title}<span className="text-gradient-teal">{t.catalog.titleAccent}</span>
            </h1>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">{t.catalog.subtitle}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center justify-between gap-4 mb-10 bg-sand-glass rounded-xl p-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {categories.map((cat) => (
                <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${activeCategory === cat.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 bg-muted/50 border border-border/50 rounded-lg font-body text-sm text-foreground focus:outline-none focus:border-primary/50">
                <option value="default">{t.catalog.sortDefault}</option>
                <option value="price-asc">{t.catalog.sortPriceAsc}</option>
                <option value="price-desc">{t.catalog.sortPriceDesc}</option>
                <option value="rating">{t.catalog.sortRating}</option>
              </select>
              <div className="flex border border-border/50 rounded-lg overflow-hidden">
                <button onClick={() => setViewMode("grid")} className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`} aria-label="Grid"><Grid3X3 className="w-4 h-4" /></button>
                <button onClick={() => setViewMode("list")} className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`} aria-label="List"><List className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>

          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "flex flex-col gap-4"}>
            {sorted.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <Link to={`/catalog/${product.id}`} className={`block bg-card rounded-xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${viewMode === "list" ? "flex flex-row" : ""}`}>
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "w-40 h-40 flex-shrink-0" : "aspect-square"}`}>
                    <img src={product.image} alt={t.productNames[product.id] || product.name} className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-115" loading="lazy" />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} className={`w-3.5 h-3.5 ${si < product.rating ? "fill-primary text-primary" : "text-muted"}`} />
                      ))}
                      <span className="ml-2 text-xs text-muted-foreground font-body">{t.productCategories[product.category] || product.category}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{t.productNames[product.id] || product.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mb-3 line-clamp-2">{t.productDescriptions[product.id] || product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-body font-bold text-lg">{product.price} ₽<span className="text-sm text-muted-foreground font-normal">/{product.unit}</span></span>
                      <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all"><ShoppingCart className="w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
