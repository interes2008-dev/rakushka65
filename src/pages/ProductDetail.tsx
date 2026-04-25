import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ShoppingCart, Truck, Thermometer, Shell, ChefHat, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { products } from "@/components/ProductsSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";
import { blogArticles } from "@/lib/blog/articles";
import { detectProductTag } from "@/lib/blog/productCategories";
import { BookOpen } from "lucide-react";

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
    ? `${name} с Сахалина — купить с доставкой | Ракушка65`
    : `${name} from Sakhalin — Buy with Delivery | Rakushka65`;

  const priceFragmentRu = product.price ? `Цена от ${product.price} ₽/кг. ` : "Цена по запросу. ";
  const priceFragmentEn = product.price ? `Price from ${product.price} ₽/kg. ` : "Price on request. ";

  const pageDesc = lang === "ru"
    ? `Купить ${name.toLowerCase()} — прямые поставки с Сахалина. ${shortDesc}. ${priceFragmentRu}Свежие морепродукты, доставка за 24 часа от Ракушка65.`
    : `Buy ${name} — direct from Sakhalin. ${shortDesc}. ${priceFragmentEn}Fresh Sakhalin seafood, 24-hour delivery from Rakushka65.`;

  const productJsonLd = getProductSchema(product, name, desc || shortDesc);
  const breadcrumb = getBreadcrumbSchema([
    { name: lang === "ru" ? "Главная" : "Home", url: "/" },
    { name: lang === "ru" ? "Каталог" : "Catalog", url: "/catalog" },
    { name, url: `/catalog/${product.id}` },
  ]);

  const ogImageMap: Record<string, string> = {
    scallop: "https://rakushka65.ru/og-scallop.jpg",
    oysters: "https://rakushka65.ru/og-oysters.jpg",
    vongole: "https://rakushka65.ru/og-vongole.jpg",
    spizula: "https://rakushka65.ru/og-spizula.jpg",
    "sea-urchin": "https://rakushka65.ru/og-sea-urchin.jpg",
    rapany: "https://rakushka65.ru/og-rapany.jpg",
    "sea-snails": "https://rakushka65.ru/og-sea-snails.jpg",
    corbicula: "https://rakushka65.ru/og-corbicula.jpg",
    trepang: "https://rakushka65.ru/og-image.jpg",
    "trepang-tincture": "https://rakushka65.ru/og-image.jpg",
    "trepang-honey-tincture": "https://rakushka65.ru/og/blog-trepang-honey-tincture.jpg",
    crab: "https://rakushka65.ru/og-image.jpg",
  };

  // Подбираем статьи блога для этого товара по productTag
  const productTag = detectProductTag(product.id);
  const relatedArticles = blogArticles.filter((a) => a.productTag === productTag).slice(0, 4);

  return (
    <div className="relative min-h-screen">
      <SEOHead title={pageTitle} description={pageDesc} lang={lang} ogImage={ogImageMap[product.id]} jsonLd={[productJsonLd, breadcrumb]} />
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
                {product.price ? (
                  <span className="font-heading text-4xl font-bold">{product.price} ₽<span className="text-lg text-muted-foreground font-normal">/{t.unitKg}</span></span>
                ) : (
                  <span className="font-heading text-3xl font-bold text-primary">{lang === "ru" ? "Цена по запросу" : "Price on request"}</span>
                )}
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

          {product.id === "trepang-tincture" && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-20 rounded-2xl p-6 md:p-10 border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card"
              aria-labelledby="recipe-heading"
            >
              <div className="flex items-center gap-3 mb-3">
                <ChefHat className="w-6 h-6 text-primary" />
                <span className="text-primary font-body text-sm tracking-widest uppercase">
                  {lang === "ru" ? "Рецепт" : "Recipe"}
                </span>
              </div>
              <h2 id="recipe-heading" className="font-heading text-2xl md:text-3xl font-bold mb-4">
                {lang === "ru"
                  ? "Медовая настойка с трепангом — без спирта"
                  : "Honey sea cucumber tincture — alcohol-free"}
              </h2>
              <p className="font-body text-muted-foreground mb-6 max-w-2xl">
                {lang === "ru"
                  ? "Мягкая безалкогольная альтернатива классической настойке. Подходит детям с 6 лет, пожилым и тем, кому противопоказан спирт."
                  : "A gentle alcohol-free alternative to the classic tincture. Suitable for children 6+, seniors and those who must avoid alcohol."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-sand-glass border border-border/40">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground">{lang === "ru" ? "Подготовка" : "Prep"}</div>
                    <div className="font-body font-semibold text-sm">{lang === "ru" ? "40 минут" : "40 minutes"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-sand-glass border border-border/40">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground">{lang === "ru" ? "Настаивание" : "Maceration"}</div>
                    <div className="font-body font-semibold text-sm">{lang === "ru" ? "21 день" : "21 days"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-sand-glass border border-border/40">
                  <Shell className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground">{lang === "ru" ? "Выход" : "Yield"}</div>
                    <div className="font-body font-semibold text-sm">{lang === "ru" ? "≈ 1 литр" : "≈ 1 litre"}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    {lang === "ru" ? "Ингредиенты" : "Ingredients"}
                  </h3>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground">
                    {(lang === "ru"
                      ? [
                          "500 г свежего трепанга (или 80 г сушёного)",
                          "1 кг натурального жидкого мёда",
                          "Стеклянная банка 1,5 л с плотной крышкой",
                        ]
                      : [
                          "500 g fresh sea cucumber (or 80 g dried)",
                          "1 kg natural liquid honey",
                          "1.5 l glass jar with tight lid",
                        ]
                    ).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    {lang === "ru" ? "Краткий план" : "Quick steps"}
                  </h3>
                  <ol className="space-y-2 font-body text-sm text-muted-foreground">
                    {(lang === "ru"
                      ? [
                          "Подготовить трепанг: очистить и промыть (сушёный — замочить на 24–36 ч).",
                          "Нарезать кусочками 1–2 см.",
                          "В стерильную банку слоями уложить мёд и трепанг, верхний слой — мёд.",
                          "Настаивать 21 день в тёмном месте при 18–22 °C, переворачивая раз в 3–4 дня.",
                          "Хранить в холодильнике до 6 месяцев.",
                        ]
                      : [
                          "Clean and rinse the sea cucumber (soak dried for 24–36 h).",
                          "Cut into 1–2 cm pieces.",
                          "Layer honey and sea cucumber in a sterile jar, finishing with honey.",
                          "Macerate for 21 days in a dark place at 18–22 °C, turning every 3–4 days.",
                          "Keep refrigerated for up to 6 months.",
                        ]
                    ).map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <Link
                to="/blog/medovaya-nastojka-trepanga"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105"
              >
                {lang === "ru" ? "Полный рецепт и схема приёма" : "Full recipe and dosing schedule"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.section>
          )}


          {relatedArticles.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-20 bg-sand-glass rounded-2xl p-6 md:p-10 border border-border/40"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  {lang === "ru" ? "Статьи о продукте" : "Articles about this product"}
                </h2>
              </div>
              <p className="font-body text-muted-foreground mb-8 max-w-2xl">
                {lang === "ru"
                  ? "Полезные материалы блога: что это, как выбрать, как готовить и применять — перед оформлением заказа."
                  : "Useful blog reads: what it is, how to choose, cook and use — before ordering."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={a.routePath}
                    className="group flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base font-semibold leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {a.title}
                      </h3>
                      <p className="font-body text-xs text-muted-foreground line-clamp-2">{a.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
                >
                  {lang === "ru" ? "Все статьи в блоге" : "All blog articles"} →
                </Link>
              </div>
            </motion.section>
          )}

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
