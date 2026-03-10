import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const reviewsData = {
  ru: [
    { name: "Команда «Посейдон»", role: "Партнёры, Сочи", text: "Ребята, вы — наши люди! Когда на побережье Чёрного моря подают сахалинские устрицы и гости не верят, что это возможно — мы просто улыбаемся. Ракушка65 — больше чем поставщик, это друзья, которые никогда не подводят. Обнимаем с берега на берег! 🤝", initials: "П" },
    { name: "Алексей Морозов", role: "Шеф-повар, ресторан «Берег»", text: "Работаем с Ракушка65 уже два года. Качество устриц и гребешков — на высшем уровне. Гости в восторге, а для нас главное — стабильность поставок.", initials: "АМ" },
    { name: "Марина Светлова", role: "Управляющая, отель «Бриз»", text: "Наконец нашли поставщика, которому можно доверять. Морепродукты всегда свежие, доставка точно в срок. Рекомендую всем коллегам в индустрии.", initials: "МС" },
    { name: "Дмитрий Волков", role: "Гурман, частный клиент", text: "Заказываю устрицы для семейных ужинов. Впечатляет подход — даже упаковка продумана до мелочей. Чувствуешь, что тебя ценят как клиента.", initials: "ДВ" },
    { name: "Елена Танака", role: "Владелица суши-бара «Нори»", text: "Перепробовали десяток поставщиков — остановились на Ракушка65. Вонголе и гребешок приходят живыми, клиенты чувствуют разницу. Это другой уровень.", initials: "ЕТ" },
    { name: "Игорь Сахаров", role: "Ресторатор, сеть «Океан»", text: "Удивляет скорость — заказал вечером, утром уже на кухне. Устрицы раскрываются с характерным щелчком, сок прозрачный. Видно, что продукт не лежал на складе.", initials: "ИС" },
    { name: "Анна Ким", role: "Фуд-блогер, @sakhalin_food", text: "Снимала обзор сахалинских устриц — ребята из Ракушка65 прислали отборные экземпляры. Подписчики завалили вопросами, где заказать. Теперь только к ним!", initials: "АК" },
    { name: "Виктор Петренко", role: "Частный клиент, Москва", text: "Живу в Москве, а ем устрицы как будто на берегу Сахалина. Авиадоставка работает как часы. Жена говорит, что это лучший подарок, который я делаю семье каждую пятницу.", initials: "ВП" },
    { name: "Ольга Никитина", role: "Частный клиент, Москва", text: "Устроила дегустацию для друзей — все были в шоке, что такие устрицы можно получить в Москве. Свежайшие, с запахом моря. Теперь заказываю каждые две недели.", initials: "ОН" },
    { name: "Сергей Ковалёв", role: "Шеф-повар, Москва", text: "В столице сложно найти живого гребешка такого качества. Ракушка65 решили эту проблему — прилетает за сутки, как будто сам на Сахалин слетал.", initials: "СК" },
    { name: "Наталья Громова", role: "Частный клиент, Москва", text: "Муж — рыбак, и его не обманешь. Попробовал спизулу от Rakushka65 и сказал: «Как на острове». Для нас это высшая оценка. Спасибо за вкус детства!", initials: "НГ" },
  ],
  en: [
    { name: "Team 'Poseidon'", role: "Partners, Sochi", text: "Guys, you're our people! When Sakhalin oysters are served on the Black Sea coast and guests can't believe it's possible — we just smile. Rakushka65 is more than a supplier, they're friends who never let you down. Hugs from coast to coast! 🤝", initials: "P" },
    { name: "Alexei Morozov", role: "Head Chef, restaurant 'Bereg'", text: "We've been working with Rakushka65 for two years. The quality of oysters and scallops is top-notch. Guests are delighted, and for us the key is consistency of supply.", initials: "AM" },
    { name: "Marina Svetlova", role: "Manager, hotel 'Breeze'", text: "Finally found a supplier we can trust. Seafood is always fresh, delivery right on time. I recommend them to all colleagues in the industry.", initials: "MS" },
    { name: "Dmitry Volkov", role: "Gourmet, private client", text: "I order oysters for family dinners. The attention to detail is impressive — even the packaging is perfectly thought out. You feel valued as a client.", initials: "DV" },
    { name: "Elena Tanaka", role: "Owner, sushi bar 'Nori'", text: "We tried a dozen suppliers — settled on Rakushka65. Vongole and scallops arrive alive, clients taste the difference. This is another level.", initials: "ET" },
    { name: "Igor Sakharov", role: "Restaurateur, 'Ocean' chain", text: "The speed is amazing — order in the evening, it's in the kitchen by morning. Oysters open with a satisfying click, juice is clear. You can tell the product hasn't been sitting around.", initials: "IS" },
    { name: "Anna Kim", role: "Food blogger, @sakhalin_food", text: "I was filming a review of Sakhalin oysters — the team at Rakushka65 sent premium specimens. Subscribers flooded me with questions about where to order. Now it's only them!", initials: "AK" },
    { name: "Viktor Petrenko", role: "Private client, Moscow", text: "I live in Moscow but eat oysters as if I'm on the shores of Sakhalin. Air delivery works like clockwork. My wife says it's the best gift I give the family every Friday.", initials: "VP" },
    { name: "Olga Nikitina", role: "Private client, Moscow", text: "I hosted a tasting for friends — everyone was amazed that you can get such oysters in Moscow. Freshest, with the scent of the sea. Now I order every two weeks.", initials: "ON" },
    { name: "Sergei Kovalev", role: "Head Chef, Moscow", text: "In Moscow it's hard to find live scallops of this quality. Rakushka65 solved that problem — arrives in a day, as if I flew to Sakhalin myself.", initials: "SK" },
    { name: "Natalia Gromova", role: "Private client, Moscow", text: "My husband is a fisherman, and you can't fool him. He tried spizula from Rakushka65 and said: 'Just like on the island.' For us, that's the highest praise. Thank you for the taste of home!", initials: "NG" },
  ],
};

const renderTextWithBrand = (text: string) => {
  const parts = text.split(/(Rakushka65)/g);
  return parts.map((part, i) =>
    part === "Rakushka65" ? (
      <span key={i} className="font-body font-medium">
        Rakushka<span className="text-primary font-semibold">65</span>
      </span>
    ) : (
      part
    )
  );
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.95,
  }),
};

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { lang, t } = useLanguage();
  const reviews = reviewsData[lang];

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);


  // Reset current when language changes
  useEffect(() => {
    setCurrent(0);
  }, [lang]);

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t.reviews.title}<span className="text-gradient-teal">{t.reviews.titleAccent}</span>
          </h2>
        </motion.div>

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Progress bar */}
          <div className="absolute -top-4 left-0 right-0 h-0.5 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              key={`${lang}-${current}-${isPaused}`}
              className="h-full bg-primary/60 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? undefined : "100%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </div>

          <div className="relative overflow-hidden min-h-[320px] md:min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${lang}-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-sand-glass rounded-2xl p-8 md:p-12 text-center"
              >
                <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{renderTextWithBrand(reviews[current].text)}"
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading text-xl font-bold">
                    {reviews[current].initials}
                  </div>
                  <p className="font-heading text-lg font-semibold">{reviews[current].name}</p>
                  <p className="font-body text-sm text-muted-foreground">{reviews[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-muted w-2.5 hover:bg-primary/40"}`} aria-label={`Review ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
