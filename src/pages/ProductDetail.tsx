import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ShoppingCart, Truck, Thermometer, Shell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { products } from "@/components/ProductsSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";

const ProductDetail = () => {
  const { id } = useParams();
  const { t, lang } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="relative min-h-screen">
        <SEOHead title="404 — Rakushka65" description="Страница не найдена" noindex />
        <Header />
        <main className="relative z-10 pt-28 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">{t.productDetail.notFound}</h1>
          <Link to="/catalog" className="text-primary hover:underline font-body">{t.productDetail.notFoundLink}</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const name = t.productNames[product.id] || product.name;
  const desc = t.productFullDescriptions[product.id] || product.fullDescription || "";
  const shortDesc = t.productDescriptions[product.id] || product.description;
  const category = t.productCategories[product.category] || product.category;
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  const pageTitle = lang === "ru"
    ? `${name} — купить с доставкой | Rakushka65`
    : `${name} — Buy with Delivery | Rakushka65`;

  const pageDesc = lang === "ru"
    ? `Купить ${name.toLowerCase()} с Сахалина. ${shortDesc}. Цена от ${product.price} ₽/кг. Доставка за 24 часа от Rakushka65.`
    : `Buy ${name} from Sakhalin. ${shortDesc}. Price from ${product.price} ₽/kg. 24-hour delivery from Rakushka65.`;

  const productJsonLd = getProductSchema(product, name, desc || shortDesc);
  const breadcrumb = getBreadcrumbSchema([
    { name: lang === "ru" ? "Главная" : "Home", url: "/" },
    { name: lang === "ru" ? "Каталог" : "Catalog", url: "/catalog" },
    { name, url: `/catalog/${product.id}` },
  ]);

  const ogImageMap: Record<string, string> = {
    scallop: "https://rakushka65.lovable.app/og-scallop.jpg",
    oysters: "https://rakushka65.lovable.app/og-oysters.jpg",
    vongole: "https://rakushka65.lovable.app/og-vongole.jpg",
    spizula: "https://rakushka65.lovable.app/og-spizula.jpg",
    "sea-urchin": "https://rakushka65.lovable.app/og-sea-urchin.jpg",
    rapany: "https://rakushka65.lovable.app/og-rapany.jpg",
    "sea-snails": "https://rakushka65.lovable.app/og-sea-snails.jpg",
    corbicula: "https://rakushka65.lovable.app/og-corbicula.jpg",
  };

  return (
    <div className="relative min-h-screen">
      <SEOHead title={pageTitle} description={pageDesc} ogImage={ogImageMap[product.id]} jsonLd={[productJsonLd, breadcrumb]} />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb nav */}
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{lang === "ru" ? "Главная" : "Home"}</Link></li>
              <li>/</li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">{lang === "ru" ? "Каталог" : "Catalog"}</Link></li>
              <li>/</li>
              <li className="text-foreground">{name}</li>
            </ol>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden">
              <img src={product.image} alt={`${name} — ${lang === "ru" ? "свежие морепродукты Сахалина" : "fresh Sakhalin seafood"} | Rakushka65`} className="w-full aspect-square object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col justify-center">
              <span className="text-primary font-body text-sm tracking-widest uppercase mb-2">{category}</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{name}</h1>
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < product.rating ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">{desc}</p>

              <div className="bg-sand-glass rounded-xl p-6 mb-8 space-y-4">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">{t.productDetail.sizeWeight}</span>
                  <span className="font-medium">{t.productWeights[product.id] || product.weight}</span>
                </div>
                <div className="border-t border-border/20" />
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">{t.productDetail.taste}</span>
                  <span className="font-medium">{t.productTastes[product.id] || product.taste}</span>
                </div>
                <div className="border-t border-border/20" />
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">{t.productDetail.condition}</span>
                  <span className="font-medium text-primary">{t.productDetail.conditionValue}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <span className="font-heading text-4xl font-bold">{product.price} ₽<span className="text-lg text-muted-foreground font-normal">/{t.unitKg}</span></span>
              </div>

              <Link to="/#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105">
                <ShoppingCart className="w-5 h-5" />{t.productDetail.orderBtn}
              </Link>

              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { icon: Truck, text: t.productDetail.delivery24 },
                  { icon: Thermometer, text: t.productDetail.coldChain },
                  { icon: Shell, text: t.productDetail.freshCatch },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2 text-muted-foreground">
                    <f.icon className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {related.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24">
              <h2 className="font-heading text-3xl font-bold mb-8">
                {t.productDetail.relatedTitle}<span className="text-gradient-teal">{t.productDetail.relatedAccent}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((rp) => (
                  <Link key={rp.id} to={`/catalog/${rp.id}`} className="block bg-card rounded-xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img src={rp.image} alt={`${t.productNames[rp.id] || rp.name} — Rakushka65`} className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-115" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">{t.productNames[rp.id] || rp.name}</h3>
                      <span className="font-body font-bold">{rp.price} ₽<span className="text-sm text-muted-foreground font-normal">/{t.unitKg}</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
