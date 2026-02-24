import { motion } from "framer-motion";
import aboutImg from "@/assets/about-coast.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Рыбацкая лодка на побережье"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-ocean-glass rounded-xl p-5 max-w-[200px]">
              <p className="font-heading text-3xl font-bold text-primary">5+</p>
              <p className="font-body text-sm text-muted-foreground">лет на рынке</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">О нас и нашем деле</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Море — наша <span className="text-gradient-teal">страсть</span>
            </h2>
            <p className="font-heading text-lg md:text-xl text-foreground/80 italic mb-6">
              Всё началось с воды и воздуха.
            </p>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Мы начали свой путь из простой любви к морю и его дарам. С 2000 года наши водолазы 
                трудятся у берегов Сахалина и Курильских островов — там, где холодный Тихий океан 
                встречается с дикой природой.
              </p>
              <p>
                Мы живём на Сахалине и добываем морепродукты в чистых водах у берегов острова — там, 
                где океан только набирает силу.
              </p>
              <p>
                Устриц, гребешок, вонголе, спизулу и морского ежа собирают вручную. Только так можно 
                сохранить и природу, и качество каждого экземпляра.
              </p>
              <p>
                С нами работают местные хозяйства аквакультуры, которым мы доверяем. Вместе мы закрываем 
                спрос и на дикую продукцию, и на ту, что выращена людьми с заботой.
              </p>
              <p>
                Доставляем по Сахалину со своего склада. Отправляем авиа в любую точку России. 
                Без посредников, без заморозки — только живой продукт, который ещё вчера был в море.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
