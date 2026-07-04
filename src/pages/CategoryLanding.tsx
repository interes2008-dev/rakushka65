import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Star, BookOpen, Truck, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";
import { products } from "@/components/ProductsSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";
import { getCategoryLandingBySlug, getRelatedArticles } from "@/lib/seo/categoryLandings";
import { getBlogImage } from "@/lib/blog/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://rakushka65.ru";

const CategoryLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const landing = slug ? getCategoryLandingBySlug(slug) : undefined;

  if (!landing) return <NotFound />;

  const categoryProducts = products.filter(
    (p) => !p.hidden && p.category === landing.productCategory,
  );
  const relatedArticles = getRelatedArticles(landing);
  const canonical = `${SITE_URL}/category/${landing.slug}`;

  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: "/" },
    { name: "Каталог", url: "/catalog" },
    { name: landing.h1, url: `/category/${landing.slug}` },
  ]);

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: landing.h1,
    description: landing.seoDescription,
    url: canonical,
    inLanguage: "ru",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/catalog/${p.id}`,
        name: t.productNames[p.id] || p.name,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="relative min-h-screen">
      <SEOHead
        title={landing.seoTitle}
        description={landing.seoDescription}
        canonical={canonical}
        ogImage={landing.ogImage}
        ogImageAlt={landing.h1}
        jsonLd={[breadcrumb, collectionPage, faqSchema]}
      />
      <FloatingParticles />
      <Header />

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Главная</Link></li>
              <li>/</li>
              <li><Link to="/catalog" className="hover:text-primary">Каталог</Link></li>
              <li>/</li>
              <li className="text-foreground">{landing.h1}</li>
            </ol>
          </nav>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
              {landing.heroBadge}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {landing.h1}
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              {landing.seoDescription}
            </p>
          </motion.section>

          <section className="mb-16 max-w-3xl mx-auto space-y-4">
            {landing.intro.map((p, i) => (
              <p key={i} className="font-body text-base md:text-lg leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </section>

          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Truck, title: "Доставка 24ч", body: "Авиа по всей России с холодовой цепью" },
              { icon: Shield, title: "Гарантия свежести", body: "100% компенсация неживых экземпляров" },
              { icon: Award, title: "Документы", body: "ВСД «Меркурий», сертификат «Сделано в России»" },
            ].map((b) => (
              <div key={b.title} className="bg-sand-glass rounded-xl p-5 border border-border/40 flex gap-4">
                <b.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-heading font-semibold mb-1">{b.title}</div>
                  <div className="font-body text-sm text-muted-foreground">{b.body}</div>
                </div>
              </div>
            ))}
          </section>

          {categoryProducts.length > 0 && (
            <section className="mb-20">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
                Товары в категории
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/catalog/${p.id}`}
                    className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 group transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${t.productNames[p.id] || p.name} с Сахалина - купить`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} className={`w-4 h-4 ${si < p.rating ? "fill-primary text-primary" : "text-muted"}`} />
                        ))}
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {t.productNames[p.id] || p.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                        {t.productDescriptions[p.id] || p.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {p.price ? (
                          <span className="font-body font-bold text-lg">
                            {p.price} ₽<span className="text-sm text-muted-foreground font-normal">/{t.unitKg}</span>
                          </span>
                        ) : (
                          <span className="font-body font-semibold text-primary">По запросу</span>
                        )}
                        <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ShoppingCart className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Гид покупателя
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landing.buyingGuide.map((g) => (
                <div key={g.title} className="bg-sand-glass rounded-xl p-6 border border-border/40">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-primary">{g.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Частые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {landing.faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-sand-glass rounded-xl border border-border/40 px-5 !border-b"
                >
                  <AccordionTrigger className="font-heading text-base md:text-lg text-left hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm md:text-base text-muted-foreground leading-relaxed pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {relatedArticles.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
                  Полезные статьи
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={a.routePath}
                    className="group flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={getBlogImage(a.image)}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width={96}
                        height={96}
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
            </section>
          )}

          <section className="text-center bg-gradient-to-br from-primary/10 via-card to-card rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Не нашли нужный вид?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Свяжитесь с нами - поможем подобрать продукт под повод, бюджет и количество гостей.
              Принимаем заказы 24/7.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              Связаться с менеджером
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryLanding;
