import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Stat {
  value: number;
  from?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note: string;
}

const useCountUp = (target: number, start: boolean, from = 0, duration = 1600) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || target === from) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, from, duration]);

  return value;
};

const StatItem = ({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) => {
  const value = useCountUp(stat.value, start, stat.from ?? 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-2"
    >
      <div className="font-heading text-4xl md:text-5xl font-bold mb-2 leading-none">
        <span className="text-gradient-teal">
          {stat.prefix}
          {value}
          {stat.suffix}
        </span>
      </div>
      <div className="font-heading text-base md:text-lg font-semibold mb-1">{stat.label}</div>
      <div className="font-body text-sm text-muted-foreground leading-snug">{stat.note}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stats: Stat[] = isEn
    ? [
        { value: 2000, from: 1975, prefix: "since ", label: "on the water", note: "working the Sakhalin coast since the turn of the century" },
        { value: 24, suffix: " h", label: "delivery", note: "by air across Russia" },
        { value: 0, label: "middlemen", note: "straight from our own catch and tanks" },
        { value: 100, suffix: "%", label: "documents", note: "vet papers and Mercury for every batch" },
      ]
    : [
        { value: 2000, from: 1975, prefix: "с ", label: "года на промысле", note: "знаем каждую бухту сахалинского берега" },
        { value: 24, suffix: " ч", label: "доставка", note: "авиарейсами по всей России" },
        { value: 0, label: "посредников", note: "свой промысел, свои бассейны, своя отгрузка" },
        { value: 100, suffix: "%", label: "документы", note: "ветеринарные и «Меркурий» на каждую партию" },
      ];

  return (
    <section className="relative py-16 md:py-20" aria-label={isEn ? "Key figures" : "Ключевые цифры"}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="rounded-2xl border border-border/40 bg-sand-glass py-10 md:py-12 px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 divide-y-0 lg:divide-x lg:divide-border/30"
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} start={started} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
