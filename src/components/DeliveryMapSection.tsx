import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import mapBg from "@/assets/delivery-map-bg.webp";

const W = 1000;
const H = 380;
const PAD = 56;
const LON_MIN = 25;
const LON_MAX = 150;
const LAT_MIN = 41;
const LAT_MAX = 62;

const px = (lon: number) => PAD + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * (W - PAD * 2);
const py = (lat: number) => PAD + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * (H - PAD * 2);

interface City {
  ru: string;
  en: string;
  lat: number;
  lon: number;
  anchor?: "start" | "middle" | "end";
  dy?: number;
}

const ORIGIN = { ru: "Южно-Сахалинск", en: "Yuzhno-Sakhalinsk" };
/** Точка отправки стоит прямо на острове, который виден на фоновом снимке */
const ORIGIN_X = 887;
const ORIGIN_Y = 244;
const MOSCOW: City = { ru: "Москва", en: "Moscow", lat: 55.75, lon: 37.62, anchor: "middle", dy: -20 };

/** Прямые рейсы с Сахалина */
const DIRECT: City[] = [
  MOSCOW,
  { ru: "Новосибирск", en: "Novosibirsk", lat: 55.03, lon: 82.92, anchor: "middle", dy: -18 },
  { ru: "Хабаровск", en: "Khabarovsk", lat: 48.48, lon: 135.08, anchor: "end", dy: -18 },
  { ru: "Владивосток", en: "Vladivostok", lat: 43.12, lon: 131.89, anchor: "middle", dy: 30 },
];

/** Дальше по стране через московский хаб */
const VIA_MOSCOW: City[] = [
  { ru: "Санкт-Петербург", en: "St Petersburg", lat: 59.93, lon: 30.34, anchor: "start", dy: -18 },
  { ru: "Казань", en: "Kazan", lat: 55.79, lon: 49.11, anchor: "middle", dy: 30 },
  { ru: "Екатеринбург", en: "Yekaterinburg", lat: 56.84, lon: 60.61, anchor: "middle", dy: -18 },
  { ru: "Сочи", en: "Sochi", lat: 43.6, lon: 39.73, anchor: "middle", dy: 30 },
];

const arcPath = (x1: number, y1: number, x2: number, y2: number, lift = 0.22) => {
  const dist = Math.hypot(x2 - x1, y2 - y1);
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - dist * lift;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
};

const DeliveryMapSection = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [visible, setVisible] = useState(false);
  const [motionOk, setMotionOk] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq) setMotionOk(!mq.matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ox = ORIGIN_X;
  const oy = ORIGIN_Y;
  const mx = px(MOSCOW.lon);
  const my = py(MOSCOW.lat);
  const allCities = [...DIRECT, ...VIA_MOSCOW];

  return (
    <section className="relative py-16 md:py-20" aria-labelledby="delivery-map-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase mb-4 block">
            {isEn ? "Delivery" : "Доставка"}
          </span>
          <h2 id="delivery-map-heading" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {isEn ? "From Sakhalin " : "С Сахалина "}
            <span className="text-gradient-teal">{isEn ? "to your city" : "в ваш город"}</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            {isEn
              ? "Direct flights to Moscow, Novosibirsk, Khabarovsk and Vladivostok, and onward across the country through the Moscow hub. Usually 24 to 48 hours from our tanks to the recipient."
              : "Прямые рейсы в Москву, Новосибирск, Хабаровск и Владивосток, дальше по стране через московский хаб. От бассейна до получателя обычно 24-48 часов."}
          </p>
        </motion.div>

        <div ref={ref} className="rounded-2xl border border-border/40 bg-sand-glass p-4 md:p-6">
          <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "1000 / 380" }}>
            {/* Фон: Земля из космоса, кадр совмещён с координатами схемы */}
            <img
              src={mapBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/55" aria-hidden="true" />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{ background: "radial-gradient(ellipse at 62% 50%, hsl(var(--background)/0.05) 0%, hsl(var(--background)/0.62) 80%)" }}
            />
            <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-label={
              isEn
                ? "Map of air delivery routes from Yuzhno-Sakhalinsk to major Russian cities"
                : "Карта авиамаршрутов доставки из Южно-Сахалинска в крупные города России"
            }
          >
            <defs>
              <filter id="routeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="originGlow">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Сетка координат */}
            <g stroke="hsl(var(--border))" strokeOpacity="0.25" strokeWidth="1">
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={`h${i}`} x1={PAD} y1={PAD + (i * (H - PAD * 2)) / 4} x2={W - PAD} y2={PAD + (i * (H - PAD * 2)) / 4} />
              ))}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <line key={`v${i}`} x1={PAD + (i * (W - PAD * 2)) / 6} y1={PAD} x2={PAD + (i * (W - PAD * 2)) / 6} y2={H - PAD} />
              ))}
            </g>

            {/* Стыковки из Москвы: тоньше и пунктиром */}
            <g fill="none" stroke="hsl(var(--primary))" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="5 6" strokeOpacity="0.38">
              {VIA_MOSCOW.map((c) => (
                <path key={`via-${c.ru}`} d={arcPath(mx, my, px(c.lon), py(c.lat), 0.3)} />
              ))}
            </g>

            {/* Прямые рейсы с Сахалина */}
            <g fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" filter="url(#routeGlow)">
              {DIRECT.map((c, i) => (
                <path
                  key={c.ru}
                  id={`route-${i}`}
                  d={arcPath(ox, oy, px(c.lon), py(c.lat))}
                  className={visible ? "route-arc" : ""}
                  strokeOpacity="0.55"
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                />
              ))}
            </g>

            {/* Светящиеся импульсы, бегущие по маршрутам */}
            {visible && motionOk && (
              <g>
                {DIRECT.map((c, i) => (
                  <circle key={`pulse-${c.ru}`} r="3.5" fill="hsl(var(--primary))" filter="url(#routeGlow)">
                    <animateMotion dur={`${3.6 + (i % 4) * 0.5}s`} begin={`${1.4 + i * 0.35}s`} repeatCount="indefinite" rotate="auto">
                      <mpath href={`#route-${i}`} xlinkHref={`#route-${i}`} />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur={`${3.6 + (i % 4) * 0.5}s`} begin={`${1.4 + i * 0.35}s`} repeatCount="indefinite" />
                  </circle>
                ))}
              </g>
            )}

            {/* Самолёт, летящий по маршруту на Москву */}
            {visible && motionOk && (
              <g filter="url(#routeGlow)">
                <path d="M -13,-9 L 16,0 L -13,9 L -6,0 Z" fill="hsl(var(--primary))">
                  <animateMotion dur="7s" begin="1.8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#route-0" xlinkHref="#route-0" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;1;0" dur="7s" begin="1.8s" repeatCount="indefinite" />
                </path>
              </g>
            )}

            {/* Города */}
            {allCities.map((c, i) => {
              const x = px(c.lon);
              const y = py(c.lat);
              const isHub = c.ru === MOSCOW.ru;
              return (
                <g key={c.ru} className={visible ? "route-city" : ""} style={{ animationDelay: `${0.9 + i * 0.1}s` }}>
                  <circle cx={x} cy={y} r={isHub ? 7 : 5} fill="hsl(var(--primary))" />
                  <circle cx={x} cy={y} r={isHub ? 14 : 10} fill="hsl(var(--primary))" fillOpacity="0.15" />
                  {isHub && <circle cx={x} cy={y} r="13" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.6" strokeOpacity="0.5" />}
                  <text
                    x={x}
                    y={y + (c.dy ?? -18)}
                    textAnchor={c.anchor ?? "middle"}
                    fill={isHub ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                    fillOpacity={isHub ? 1 : 0.85}
                    fontSize={isHub ? 18 : 17}
                    fontWeight={isHub ? 600 : 400}
                    fontFamily="var(--font-body, sans-serif)"
                  >
                    {isEn ? c.en : c.ru}
                  </text>
                </g>
              );
            })}

            {/* Точка отправления */}
            <g>
              <circle cx={ox} cy={oy} r="70" fill="url(#originGlow)" />
              {visible && motionOk && (
                <>
                  <circle cx={ox} cy={oy} r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
                    <animate attributeName="r" values="8;46" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={ox} cy={oy} r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
                    <animate attributeName="r" values="8;46" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
              <circle cx={ox} cy={oy} r="6" fill="hsl(var(--primary))" className={visible ? "route-ping" : ""} />
              <circle cx={ox} cy={oy} r="7" fill="hsl(var(--primary))" />
              <circle cx={ox} cy={oy} r="13" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.5" />
              <text
                x={ox - 24}
                y={oy + 36}
                textAnchor="end"
                fill="hsl(var(--primary))"
                fontSize="18"
                fontWeight="600"
                fontFamily="var(--font-body, sans-serif)"
              >
                {isEn ? ORIGIN.en : ORIGIN.ru}
              </text>
            </g>
            </svg>
          </div>

          {/* Что означают линии */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-xs md:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <svg width="26" height="6" aria-hidden="true">
                <line x1="1" y1="3" x2="25" y2="3" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              {isEn ? "direct flights" : "прямые рейсы"}
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="26" height="6" aria-hidden="true">
                <line x1="1" y1="3" x2="25" y2="3" stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
              </svg>
              {isEn ? "onward via Moscow" : "дальше через Москву"}
            </span>
          </div>

          {/* Список городов (главное для мобильных, где подписи на карте скрыты) */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {allCities.map((c) => (
              <span
                key={c.ru}
                className="font-body text-xs md:text-sm px-3 py-1.5 rounded-full border border-border/40 text-muted-foreground"
              >
                {isEn ? c.en : c.ru}
              </span>
            ))}
            <span className="font-body text-xs md:text-sm px-3 py-1.5 rounded-full border border-primary/40 text-primary inline-flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5" />
              {isEn ? "and any other city" : "и любой другой город"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryMapSection;
