import { motion } from "framer-motion";
import { Ship, Diamond, Thermometer, Shell, Droplets } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Ship, Diamond, Thermometer, Shell, Droplets];

const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t.benefits.title}<span className="text-gradient-teal">{t.benefits.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">{t.benefits.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.benefits.items.map((b, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-sand-glass rounded-xl p-8 text-center group hover:bg-[hsl(168_72%_50%/0.08)] hover:border-primary/30 hover:shadow-[0_0_30px_hsl(168_72%_50%/0.12)] transition-all duration-500 ease-out cursor-default"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-500">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
