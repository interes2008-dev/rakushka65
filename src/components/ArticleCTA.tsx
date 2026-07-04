import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  PRODUCT_CATEGORIES,
  getProductCategory,
  type ProductTag,
} from "@/lib/blog/productCategories";

interface ArticleCTAProps {
  tag: ProductTag;
}

const ArticleCTA = ({ tag }: ArticleCTAProps) => {
  const main = getProductCategory(tag);
  const recommended = PRODUCT_CATEGORIES.filter((c) => c.tag !== tag).slice(0, 3);

  return (
    <div className="not-prose mt-16">
      {/* Главный CTA: конкретный продукт */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card/80 to-card p-8 md:p-10"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-primary mb-2">
              Попробуйте этот деликатес
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              {main.label} с Сахалина
            </h3>
            <p className="font-body text-muted-foreground max-w-lg">
              {main.ctaDescription}
            </p>
          </div>
          <div className="flex shrink-0">
            <img
              src={main.image}
              alt={main.label}
              className="w-28 h-28 md:w-36 md:h-36 rounded-xl object-cover ring-1 ring-primary/30"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative flex flex-wrap gap-3 mt-6">
          <Link
            to={main.productLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:scale-105 transition-transform no-underline"
          >
            {main.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all no-underline"
          >
            Весь каталог
          </Link>
        </div>
      </motion.div>

      {/* Рекомендуем попробовать */}
      <div className="mt-12">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-5">
          Рекомендуем попробовать
        </h3>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {recommended.map((p) => (
            <Link
              key={p.tag}
              to={p.productLink}
              className="group block rounded-xl overflow-hidden border border-border/30 bg-card/50 hover:border-primary/40 transition-all duration-300 no-underline"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <p className="font-heading text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCTA;
