import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Алексей Морозов",
    role: "Шеф-повар, ресторан «Берег»",
    text: "Работаем с Rakushka65 уже два года. Качество устриц и гребешков — на высшем уровне. Гости в восторге, а для нас главное — стабильность поставок.",
    initials: "АМ",
  },
  {
    name: "Марина Светлова",
    role: "Управляющая, отель «Бриз»",
    text: "Наконец нашли поставщика, которому можно доверять. Морепродукты всегда свежие, доставка точно в срок. Рекомендую всем коллегам в индустрии.",
    initials: "МС",
  },
  {
    name: "Дмитрий Волков",
    role: "Гурман, частный клиент",
    text: "Заказываю устрицы для семейных ужинов. Впечатляет подход — даже упаковка продумана до мелочей. Чувствуешь, что тебя ценят как клиента.",
    initials: "ДВ",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Что говорят <span className="text-gradient-teal">наши клиенты</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-sand-glass rounded-2xl p-8 md:p-12 text-center"
          >
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8">
              "{reviews[current].text}"
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading text-xl font-bold">
                {reviews[current].initials}
              </div>
              <p className="font-heading text-lg font-semibold">{reviews[current].name}</p>
              <p className="font-body text-sm text-muted-foreground">{reviews[current].role}</p>
            </div>
          </motion.div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
