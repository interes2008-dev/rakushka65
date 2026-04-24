import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import scallopImg from "@/assets/product-scallop.jpg";
import oystersImg from "@/assets/product-oysters.jpg";
import vongoleImg from "@/assets/product-vongole.jpg";
import spizulaImg from "@/assets/product-spizula.jpg";
import seaurchinImg from "@/assets/product-seaurchin.png";
import rapanyImg from "@/assets/product-rapany.png";
import snailsImg from "@/assets/product-snails.png";
import corbiculaImg from "@/assets/product-corbicula.png";
import trepangImg from "@/assets/product-trepang.png";
import trepangTinctureImg from "@/assets/product-trepang-tincture.png";
import crabImg from "@/assets/product-crab.png";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  unit: string;
  rating: number;
  description: string;
  category: string;
  weight?: string;
  taste?: string;
  fullDescription?: string;
}

export const products: Product[] = [
  { id: "scallop", name: "Морской гребешок", image: scallopImg, price: "700", unit: "кг", rating: 5, description: "", category: "Моллюски", weight: "от 200 г / шт", taste: "Нежный, сладковатый" },
  { id: "oysters", name: "Устрицы Сахалинские", image: oystersImg, price: "500", unit: "кг", rating: 5, description: "", category: "Устрицы", weight: "150-350 г / шт", taste: "Морской, солоноватый" },
  { id: "vongole", name: "Вонголе", image: vongoleImg, price: "500", unit: "кг", rating: 4, description: "", category: "Моллюски", weight: "мелкие, 2-5 см", taste: "Насыщенный, морской" },
  { id: "spizula", name: "Спизула Сахалинская", image: spizulaImg, price: "500", unit: "кг", rating: 4, description: "", category: "Моллюски", weight: "200-400 г / шт", taste: "Плотный, яркий" },
  { id: "sea-urchin", name: "Ёж морской Сахалинский", image: seaurchinImg, price: "500", unit: "кг", rating: 5, description: "", category: "Моллюски", weight: "90-200 г / шт", taste: "Сливочный, йодистый" },
  { id: "rapany", name: "Рапаны Сахалинские", image: rapanyImg, price: "600", unit: "кг", rating: 4, description: "", category: "Моллюски", weight: "80-200 г / шт", taste: "Упругий, дымно-морской" },
  { id: "sea-snails", name: "Морские улитки", image: snailsImg, price: "600", unit: "кг", rating: 5, description: "", category: "Моллюски", weight: "мелкие, 3-5 см", taste: "Упругий, пикантный" },
  { id: "corbicula", name: "Корбикула Сахалинская", image: corbiculaImg, price: "600", unit: "кг", rating: 5, description: "", category: "Моллюски", weight: "мелкие, 2-5 см", taste: "Нежный, чуть сладковатый" },
  { id: "trepang", name: "Трепанг дальневосточный", image: trepangImg, price: "", unit: "кг", rating: 5, description: "", category: "Деликатесы", weight: "150-500 г / шт", taste: "Нежный, желеобразный" },
  { id: "trepang-tincture", name: "Настойка на трепанге", image: trepangTinctureImg, price: "", unit: "шт", rating: 5, description: "", category: "Настойки", weight: "250-500 мл", taste: "Насыщенный, морской с мёдом" },
  { id: "crab", name: "Краб колючий", image: crabImg, price: "", unit: "кг", rating: 5, description: "", category: "Ракообразные", weight: "от 1 кг / шт", taste: "Сладковатый, сочный" },
];

const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t.products.title}<span className="text-gradient-teal">{t.products.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">{t.products.subtitle}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
              }}
            >
              <Link
                to={`/catalog/${product.id}`}
                className="flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={product.image} alt={t.productNames[product.id] || product.name} className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-115" loading="lazy" width={400} height={300} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < product.rating ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors leading-tight min-h-[3.2rem]">
                    {t.productNames[product.id] || product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {t.productDescriptions[product.id] || product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    {product.price ? (
                      <span className="font-body font-bold text-xl">
                        {product.price} ₽<span className="text-sm text-muted-foreground font-normal">/{t.unitKg}</span>
                      </span>
                    ) : (
                      <span className="font-body font-semibold text-base text-primary">По запросу</span>
                    )}
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link to="/catalog" className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/40 text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            {t.products.catalogBtn}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
