import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/hero-oysters.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
        <img src={heroImg} alt="Fresh oysters on ice" className="w-full h-[120%] object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="container mx-auto px-4 relative z-10 will-change-transform">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
            {t.hero.badge}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
            <span className="block md:whitespace-nowrap">{t.hero.title1}</span>
            <span className="block text-gradient-teal">{t.hero.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}>
              <Link to="/catalog" className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105">
                {t.hero.catalogBtn}
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 }}>
              <a href="#contact" className="inline-flex items-center justify-center w-full px-8 py-4 border border-secondary/30 text-foreground font-body font-semibold text-lg rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300">
                {t.hero.availabilityBtn}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">{t.hero.scrollDown}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
