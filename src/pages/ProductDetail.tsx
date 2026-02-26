import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ShoppingCart, Truck, Thermometer, Shell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { products } from "@/components/ProductsSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="relative min-h-screen">
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
  const desc = t.productFullDescriptions[product.id] || product.fullDescription;
  const category = t.productCategories[product.category] || product.category;
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              <ArrowLeft className="w-4 h-4" />{t.productDetail.backToCatalog}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden">
              <img src={product.image} alt={name} className="w-full aspect-square object-cover" />
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
                  <span className="font-medium">{product.weight}</span>
                </div>
                <div className="border-t border-border/20" />
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">{t.productDetail.taste}</span>
                  <span className="font-medium">{product.taste}</span>
                </div>
                <div className="border-t border-border/20" />
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">{t.productDetail.condition}</span>
                  <span className="font-medium text-primary">{t.productDetail.conditionValue}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <span className="font-heading text-4xl font-bold">{product.price} ₽<span className="text-lg text-muted-foreground font-normal">/{product.unit}</span></span>
              </div>

              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105">
                <ShoppingCart className="w-5 h-5" />{t.productDetail.orderBtn}
              </button>

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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24">
              <h2 className="font-heading text-3xl font-bold mb-8">
                {t.productDetail.relatedTitle}<span className="text-gradient-teal">{t.productDetail.relatedAccent}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((rp) => (
                  <Link key={rp.id} to={`/catalog/${rp.id}`} className="block bg-card rounded-xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img src={rp.image} alt={t.productNames[rp.id] || rp.name} className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-115" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">{t.productNames[rp.id] || rp.name}</h3>
                      <span className="font-body font-bold">{rp.price} ₽<span className="text-sm text-muted-foreground font-normal">/{rp.unit}</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
