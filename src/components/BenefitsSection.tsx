import { motion } from "framer-motion";
import { Ship, Diamond, Thermometer, Shell } from "lucide-react";

const benefits = [
  {
    icon: Ship,
    title: "Живая доставка за 24 часа",
    desc: "Морепродукты доставляются в специальных контейнерах, сохраняя свежесть и вкус океана",
  },
  {
    icon: Diamond,
    title: "Премиум качество",
    desc: "Только отборный улов от проверенных поставщиков. Каждая партия проходит строгий контроль",
  },
  {
    icon: Thermometer,
    title: "Температурный режим",
    desc: "Непрерывная холодовая цепь от моря до вашего стола — гарантия безопасности",
  },
  {
    icon: Shell,
    title: "Собственный промысел",
    desc: "Работаем напрямую с водолазами и рыбаками — только свежий улов без посредников",
  },
];

const BenefitsSection = () => {
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
            Почему <span className="text-gradient-teal">выбирают нас</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Мы делаем всё, чтобы вы получили морепродукты наивысшего качества
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-sand-glass rounded-xl p-8 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
