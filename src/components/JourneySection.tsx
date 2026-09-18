import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Waves, PackageCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import stepCatch from "@/assets/journey-catch-hands.webp";
import stepTanks from "@/assets/journey-tanks-scallop.webp";
import stepPack from "@/assets/blog-scallop-photo-9.webp";

const JourneySection = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = isEn
    ? [
        { icon: Anchor, time: "Day 0", title: "The catch", text: "Divers and boats work the cold coastal waters of Sakhalin. Shellfish are gathered by hand, so the seabed stays intact and every shell is picked whole.", img: stepCatch, alt: "Live Sakhalin scallop in a fisherman's hands at the rocky coast" },
        { icon: Waves, time: "Day 0-1", title: "Holding tanks", text: "The catch rests in flow-through tanks with cold seawater. Shellfish calm down, clean themselves and regain strength, which is what lets them travel well.", img: stepTanks, alt: "Live Sakhalin scallops resting in flow-through holding tanks" },
        { icon: PackageCheck, time: "24-48 h", title: "Grading and shipping", text: "Every batch is sorted by size and weighed, weak specimens never make it into a shipment. Then thermoboxes with ice packs, temperature control and straight to the plane: the cold chain holds all the way to your kitchen.", img: stepPack, alt: "Sakhalin scallops graded and packed in foam boxes with ice before the flight" },
      ]
    : [
        { icon: Anchor, time: "День 0", title: "Вылов", text: "Работаем в холодных прибрежных водах Сахалина. Моллюсков собираем вручную: так дно остаётся живым, а раковина приходит целой.", img: stepCatch, alt: "Живой сахалинский гребешок в руках рыбака у скалистого берега" },
        { icon: Waves, time: "День 0-1", title: "Передержка", text: "Улов отдыхает в бассейнах с проточной морской водой. Моллюск успокаивается, очищается и набирает силы, именно поэтому он хорошо переносит дорогу.", img: stepTanks, alt: "Живой сахалинский гребешок на передержке в бассейнах с проточной водой" },
        { icon: PackageCheck, time: "24-48 ч", title: "Калибровка и отправка", text: "Каждую партию сортируем по размеру и взвешиваем, слабые экземпляры в отгрузку не идут. Дальше термоящики с хладагентом, контроль температуры и сразу на самолёт: холодовая цепь держится до вашей кухни.", img: stepPack, alt: "Сахалинский гребешок после калибровки в термоящиках со льдом перед отправкой" },
      ];

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const centerY = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive((prev) => (prev === best ? prev : best));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [steps.length]);

  return (
    <section className="relative py-20 md:py-24" aria-labelledby="journey-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase mb-4 block">
            {isEn ? "How we work" : "Как мы работаем"}
          </span>
          <h2 id="journey-heading" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {isEn ? "From the sea " : "Путь от моря "}
            <span className="text-gradient-teal">{isEn ? "to your table" : "до вашего стола"}</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            {isEn
              ? "Three steps that keep the shellfish alive all the way from Sakhalin to your kitchen."
              : "Три шага, благодаря которым моллюск доезжает живым от Сахалина до вашей кухни."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Липкое фото, меняется по мере прокрутки (десктоп) */}
          <div className="hidden lg:block h-full">
            <div
              className="sticky relative rounded-2xl overflow-hidden border border-border/40 h-[420px] bg-card"
              style={{ top: "calc(50vh - 210px)" }}
            >
              {steps.map((s, i) => (
                <img
                  key={s.title}
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out will-change-[opacity,transform]"
                  style={{ opacity: active === i ? 1 : 0, transform: active === i ? "scale(1)" : "scale(1.05)" }}
                  loading="lazy"
                  width={900}
                  height={1125}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="font-body text-xs tracking-widest uppercase text-primary mb-1">
                    {steps[active].time}
                  </div>
                  <div className="font-heading text-2xl font-bold">{steps[active].title}</div>
                </div>
                <div className="font-heading text-4xl font-bold text-primary/40 leading-none">
                  0{active + 1}
                </div>
              </div>
            </div>
          </div>

          {/* Шаги */}
          <ol className="relative">
            <div className="absolute left-[22px] top-2 bottom-2 w-px bg-border/40 hidden sm:block" aria-hidden="true" />
            <div
              className="absolute left-[22px] top-2 w-px bg-primary hidden sm:block transition-all duration-500 ease-out"
              style={{ height: `${((active + 1) / steps.length) * 100}%` }}
              aria-hidden="true"
            />

            {steps.map((s, i) => (
              <li key={s.title} className="pb-12 lg:pb-32 last:pb-0">
                <motion.div
                  ref={(el) => (stepRefs.current[i] = el)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative sm:pl-16 transition-opacity duration-500"
                >
                  <div
                    className={`hidden sm:flex absolute left-0 top-0 w-11 h-11 rounded-full items-center justify-center border transition-colors duration-500 ${
                      active === i
                        ? "bg-primary text-primary-foreground border-primary glow-teal"
                        : "bg-card text-muted-foreground border-border/50"
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>

                  {/* Фото шага на мобильных */}
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="lg:hidden w-full aspect-[4/3] object-cover rounded-xl mb-4 border border-border/40"
                    loading="lazy"
                    width={900}
                    height={675}
                  />

                  <div className="font-body text-xs tracking-widest uppercase text-primary mb-2">{s.time}</div>
                  <h3
                    className={`font-heading text-2xl font-bold mb-2 transition-colors duration-500 ${
                      active === i ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed max-w-md">{s.text}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
