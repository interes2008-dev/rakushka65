import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-coast.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const AboutSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutImg} alt="Sakhalin coastline" className="w-full h-[400px] lg:h-[500px] object-cover" loading="lazy" />
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} className="absolute -bottom-6 -right-4 md:right-8 bg-ocean-glass rounded-xl p-5 max-w-[200px]">
              <p className="font-body text-base font-bold text-primary">{t.about.yearsLabel}</p>
              <p className="font-body text-xs text-muted-foreground">{t.about.yearsDesc}</p>
              <p className="font-body text-xs text-primary/70">{lang === "ru" ? "качество — вне времени" : "quality beyond time"}</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">{t.about.badge}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.about.title}<span className="text-gradient-teal">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                {t.about.certificateLine}{" "}
                <Link to="/certificate" className="text-primary hover:underline">{t.about.certificateLink}</Link>.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-semibold rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105">
                {t.about.ctaBtn}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
