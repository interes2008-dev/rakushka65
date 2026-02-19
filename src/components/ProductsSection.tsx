import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import scallopImg from "@/assets/product-scallop.jpg";
import oystersImg from "@/assets/product-oysters.jpg";
import vongoleImg from "@/assets/product-vongole.jpg";
import spizulaImg from "@/assets/product-spizula.jpg";

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
  {
    id: "scallop",
    name: "Морской гребешок",
    image: scallopImg,
    price: "750",
    unit: "кг",
    rating: 5,
    description: "Сахалинский морской гребешок — славится своей нежнейшей, сладковатой мякотью и крупным размером.",
    category: "Моллюски",
    weight: "от 200 г / шт",
    taste: "Нежный, сладковатый",
    fullDescription: "Сахалинский морской гребешок — славится своей нежнейшей, сладковатой мякотью и крупным размером. Настоящий деликатес с невероятно нежной текстурой и сладковатым послевкусием. Идеален для тартара, севиче или быстрого обжаривания на гриле.",
  },
  {
    id: "oysters",
    name: "Устрицы Сахалинские",
    image: oystersImg,
    price: "650",
    unit: "кг",
    rating: 5,
    description: "Изысканные сахалинские устрицы — деликатес для истинных гурманов.",
    category: "Устрицы",
    weight: "150-350 г / шт",
    taste: "Морской, солоноватый",
    fullDescription: "Изысканные сахалинские устрицы — деликатес для истинных гурманов. Выращенные в чистейших водах Сахалина, они обладают насыщенным морским вкусом с лёгкой солоноватостью и нежной текстурой.",
  },
  {
    id: "vongole",
    name: "Вонголе",
    image: vongoleImg,
    price: "600",
    unit: "кг",
    rating: 4,
    description: "Маленькие ракушки с насыщенным морским вкусом для пасты и супов.",
    category: "Моллюски",
    weight: "мелкие, 2-5 см",
    taste: "Насыщенный, морской",
    fullDescription: "Вонголе — любимый ингредиент итальянских шефов. Эти маленькие моллюски раскрывают невероятный аромат моря в сочетании с пастой, белым вином и чесноком.",
  },
  {
    id: "spizula",
    name: "Спизула Сахалинская",
    image: spizulaImg,
    price: "600",
    unit: "кг",
    rating: 4,
    description: "Попробуйте один раз — и вы поймёте, почему шефы называют её «жемчужиной Сахалина». Мясистая, сочная, с ярким океанским послевкусием.",
    category: "Моллюски",
    weight: "200-400 г / шт",
    taste: "Плотный, яркий",
    fullDescription: "Спизула Сахалинская — настоящая находка для гурманов. Её плотная, упругая мякоть буквально тает во рту, раскрывая глубокий вкус холодного океана. Попробуйте сырой с каплей лимона — и вы больше не сможете остановиться. Идеальна для севиче, тартара или лёгкого обжаривания на сковороде с маслом и травами.",
  },
];

const ProductsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Хиты <span className="text-gradient-teal">продаж</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Самые популярные деликатесы, которые заказывают наши клиенты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Link
                to={`/catalog/${product.id}`}
                className="block bg-card rounded-xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-115"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-3.5 h-3.5 ${
                          si < product.rating ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-lg">
                      {product.price} ₽<span className="text-sm text-muted-foreground font-normal">/{product.unit}</span>
                    </span>
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ShoppingCart className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/40 text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Весь каталог
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
