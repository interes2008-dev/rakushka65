import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Thermometer, FileCheck, Snowflake, Send, ShieldCheck, PackageCheck, CalendarClock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { reachGoal, GOALS } from "@/lib/metrika";
import heroImg from "@/assets/blog-hairy-crab-underwater.webp";
import cookedImg from "@/assets/blog-hairy-crab-cooked.webp";

const SITE = "https://rakushka65.ru";

const HairyCrabWholesaleLanding = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [volume, setVolume] = useState("");
  const [kind, setKind] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const kindOptions = isEn
    ? ["Roe females", "Males", "Mix", "Not sure yet"]
    : ["Самки с икрой", "Самцы", "Микс", "Пока не решил"];
  const volumeOptions = isEn
    ? ["up to 20 kg / week", "20-50 kg / week", "50-100 kg / week", "over 100 kg / week"]
    : ["до 20 кг / нед", "20-50 кг / нед", "50-100 кг / нед", "более 100 кг / нед"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!name.trim() || !/^[\d\s\-+()]{5,20}$/.test(phone.trim())) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const composed = [
      "ОПТ: краб мохнаторукий",
      city.trim() ? `Город: ${city.trim()}` : "",
      volume ? `Объём: ${volume}` : "",
      kind ? `Тип: ${kind}` : "",
      comment.trim() ? `Комментарий: ${comment.trim()}` : "",
    ].filter(Boolean).join(". ");
    try {
      const { error } = await supabase.functions.invoke("send-max", {
        body: { name: name.trim(), phone: phone.trim(), comment: composed },
      });
      if (error) throw error;
      reachGoal(GOALS.FORM_SUBMIT, { source: "hairy_crab_wholesale" });
      setStatus("sent");
      setName(""); setPhone(""); setCity(""); setVolume(""); setKind(""); setComment("");
    } catch {
      setStatus("error");
    }
  };

  const faq = isEn
    ? [
        { q: "What is the minimum wholesale order?", a: "We agree the minimum per city and route, since live delivery is planned around a flight. Tell us your target weekly volume and we will confirm what works for your region." },
        { q: "Can I order only roe females?", a: "Yes. Females with roe ship as a separate graded lot. In the autumn season this is the most requested option, so reserve volumes ahead." },
        { q: "Do you provide documents?", a: "Every batch ships with veterinary papers and traceability, ready for chain and audit requirements." },
        { q: "How fast is delivery?", a: "Typically 24 to 48 hours from the Sakhalin holding tank to your city by temperature-controlled air freight." },
      ]
    : [
        { q: "Какой минимальный объём опта?", a: "Минимум согласуем под город и маршрут, живая доставка планируется под рейс. Напишите целевой объём в неделю, подтвердим, что реально по вашему региону." },
        { q: "Можно заказать только самок с икрой?", a: "Да. Самки с икрой идут отдельным откалиброванным лотом. В осенний сезон это самый частый запрос, объёмы лучше бронировать заранее." },
        { q: "Даёте документы на партию?", a: "Каждая партия едет с ветеринарными документами и прослеживаемостью, под требования сетей и аудита." },
        { q: "Как быстро доставка?", a: "Обычно 24-48 часов от сахалинского бассейна до вашего города авиа с температурным контролем." },
      ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: isEn ? "Live hairy crab, wholesale from Sakhalin" : "Живой мохнаторукий краб оптом с Сахалина",
      description: isEn
        ? "Wholesale live hairy crab from Sakhalin for restaurants: graded batches, roe females separately, cold-chain live delivery, documents."
        : "Оптовые поставки живого мохнаторукого краба с Сахалина для ресторанов: калибровка, самки с икрой отдельно, живая доставка, документы.",
      image: `${SITE}/og-hairy-crab.jpg`,
      brand: { "@type": "Brand", name: isEn ? "Rakushka65" : "Ракушка65" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
        url: `${SITE}/opt/mohnatorukij-krab`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isEn ? "Home" : "Главная", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: isEn ? "Hairy crab wholesale" : "Мохнаторукий краб оптом", item: `${SITE}/opt/mohnatorukij-krab` },
      ],
    },
  ];

  const benefits = isEn
    ? [
        { icon: Truck, t: "Live delivery", d: "Oxygen packing and temperature sensors, cold chain from tank to your city." },
        { icon: PackageCheck, t: "Graded batches", d: "Sorted by size and sex, roe females as a separate lot." },
        { icon: FileCheck, t: "Full documents", d: "Veterinary papers and traceability on every shipment." },
        { icon: CalendarClock, t: "Season volumes", d: "Autumn roe peak, reserve quantities ahead for steady supply." },
      ]
    : [
        { icon: Truck, t: "Живая доставка", d: "Кислородная упаковка и датчики температуры, холодовая цепь от бассейна до города." },
        { icon: PackageCheck, t: "Калибровка партий", d: "Сортировка по размеру и полу, самки с икрой отдельным лотом." },
        { icon: FileCheck, t: "Документы на партию", d: "Ветеринарные документы и прослеживаемость на каждой отгрузке." },
        { icon: CalendarClock, t: "Сезонные объёмы", d: "Осенний пик икры, бронь объёмов заранее для стабильных поставок." },
      ];

  const steps = isEn
    ? [
        { t: "Request", d: "You send city, weekly volume and type (females, males or mix)." },
        { t: "Price list", d: "We reply with a wholesale price tied to volume and season." },
        { t: "Test batch", d: "First shipment to check quality, packing and timing on your route." },
        { t: "Regular supply", d: "We lock the calibration and schedule for the season." },
      ]
    : [
        { t: "Заявка", d: "Вы присылаете город, объём в неделю и тип (самки, самцы или микс)." },
        { t: "Прайс", d: "Мы отвечаем оптовой ценой под объём и сезон." },
        { t: "Пробная партия", d: "Первая отгрузка, чтобы проверить качество, упаковку и сроки на вашем маршруте." },
        { t: "Регулярные поставки", d: "Закрепляем калибровку и график на сезон." },
      ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead
        title={isEn ? "Hairy Crab Wholesale from Sakhalin, Live Supply for Restaurants | Rakushka65" : "Мохнаторукий краб оптом с Сахалина, живая поставка ресторанам | Ракушка65"}
        description={isEn ? "Order live hairy crab wholesale from Sakhalin. Graded batches, roe females separately, cold-chain delivery, documents. Send a request and get the price list." : "Заказать живого мохнаторукого краба оптом с Сахалина. Калибровка, самки с икрой отдельно, живая доставка, документы. Оставьте заявку и получите прайс."}
        lang={lang}
        ogImage={`${SITE}/og-hairy-crab.jpg`}
        jsonLd={jsonLd}
      />
      <FloatingParticles />
      <Header />

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{isEn ? "Home" : "Главная"}</Link></li>
              <li>/</li>
              <li className="text-foreground">{isEn ? "Hairy crab wholesale" : "Мохнаторукий краб оптом"}</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-widest uppercase mb-4">
                <Truck className="w-4 h-4" /> {isEn ? "Wholesale & HoReCa" : "Опт и HoReCa"}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {isEn ? (
                  <>Live hairy crab <span className="text-gradient-teal">wholesale</span> from Sakhalin</>
                ) : (
                  <>Мохнаторукий краб <span className="text-gradient-teal">оптом</span> с Сахалина</>
                )}
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                {isEn
                  ? "Live delivery for restaurants and buyers. Graded batches, roe females sorted separately, cold chain and documents on every shipment. Peak roe season is autumn, reserve early."
                  : "Живая поставка ресторанам и закупщикам. Калибровка партий, самки с икрой отдельно, холодовая цепь и документы на каждой отгрузке. Пик икры это осень, бронируйте заранее."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#zayavka" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105">
                  <Send className="w-5 h-5" /> {isEn ? "Get the price list" : "Получить прайс"}
                </a>
                <Link to="/catalog/hairy-crab" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border/50 font-body font-semibold text-lg rounded-lg hover:border-primary/50 hover:text-primary transition-colors">
                  {isEn ? "Product page" : "Страница товара"}
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={heroImg} alt={isEn ? "Live hairy crab underwater, wholesale from Sakhalin" : "Живой мохнаторукий краб под водой, опт с Сахалина"} className="w-full aspect-[3/2] object-cover" width={1200} height={800} />
            </motion.div>
          </div>

          {/* Benefits */}
          <section className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b) => (
                <motion.div key={b.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-xl bg-sand-glass border border-border/40">
                  <b.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">{b.t}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">
              {isEn ? "How we work" : "Как мы работаем"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <div key={s.t} className="relative p-6 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-heading font-bold flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.t}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Form + side image */}
          <section id="zayavka" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
            <div className="rounded-2xl overflow-hidden hidden lg:block">
              <img src={cookedImg} alt={isEn ? "Steamed hairy crab served in a restaurant" : "Мохнаторукий краб на пару, ресторанная подача"} className="w-full h-full object-cover" width={1200} height={800} />
            </div>

            <div className="bg-sand-glass rounded-2xl p-6 sm:p-8 border border-border/40">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                {isEn ? "Wholesale request" : "Оптовая заявка"}
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {isEn ? "Send your details and we reply with a price list within a day." : "Оставьте данные, пришлём прайс в течение дня."}
              </p>

              {status === "sent" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading text-lg font-semibold text-primary">
                    {isEn ? "Request sent, we will reply soon!" : "Заявка ушла, скоро свяжемся!"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="w-name" className="block font-body text-sm text-muted-foreground mb-1.5">{isEn ? "Name" : "Имя"}</label>
                      <input id="w-name" type="text" value={name} onChange={(e) => { setName(e.target.value); if (status === "error") setStatus("idle"); }} maxLength={100} required placeholder={isEn ? "How to address you" : "Как к вам обращаться"} className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="w-phone" className="block font-body text-sm text-muted-foreground mb-1.5">{isEn ? "Phone" : "Телефон"}</label>
                      <input id="w-phone" type="tel" value={phone} onChange={(e) => { setPhone(e.target.value); if (status === "error") setStatus("idle"); }} maxLength={20} required placeholder="+7 (___) ___-__-__" className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="w-city" className="block font-body text-sm text-muted-foreground mb-1.5">{isEn ? "City / region" : "Город / регион"}</label>
                    <input id="w-city" type="text" value={city} onChange={(e) => setCity(e.target.value)} maxLength={100} placeholder={isEn ? "Where to deliver" : "Куда доставлять"} className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="w-volume" className="block font-body text-sm text-muted-foreground mb-1.5">{isEn ? "Volume" : "Объём"}</label>
                      <select id="w-volume" value={volume} onChange={(e) => setVolume(e.target.value)} className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary/60 transition-colors">
                        <option value="">{isEn ? "Select volume" : "Выберите объём"}</option>
                        {volumeOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="w-kind" className="block font-body text-sm text-muted-foreground mb-1.5">{isEn ? "Type" : "Тип"}</label>
                      <select id="w-kind" value={kind} onChange={(e) => setKind(e.target.value)} className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary/60 transition-colors">
                        <option value="">{isEn ? "Select type" : "Выберите тип"}</option>
                        {kindOptions.map((k) => <option key={k} value={k}>{k}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="w-comment" className="block font-body text-sm text-muted-foreground mb-1.5">{isEn ? "Comment" : "Комментарий"}</label>
                    <textarea id="w-comment" value={comment} onChange={(e) => setComment(e.target.value)} maxLength={1000} rows={3} placeholder={isEn ? "Frequency, packaging, questions" : "Периодичность, упаковка, вопросы"} className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors resize-none" />
                  </div>

                  {status === "error" && (
                    <p className="font-body text-sm text-destructive text-center">
                      {isEn ? "Could not send. Please check the phone or write in a messenger." : "Не удалось отправить. Проверьте телефон или напишите в мессенджер."}
                    </p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100">
                    <Send className="w-5 h-5" />
                    {status === "sending" ? (isEn ? "Sending..." : "Отправляем...") : (isEn ? "Request the price list" : "Запросить прайс")}
                  </button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    {isEn ? "By clicking the button you agree to our " : "Нажимая кнопку, вы принимаете "}
                    <Link to="/privacy" className="text-primary hover:underline">{isEn ? "privacy policy" : "политику конфиденциальности"}</Link>
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              {isEn ? "Wholesale FAQ" : "Частые вопросы опта"}
            </h2>
            <div className="space-y-3">
              {faq.map((f) => (
                <div key={f.q} className="bg-sand-glass rounded-xl border border-border/40 p-5">
                  <h3 className="font-heading text-base md:text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related reads */}
          <section className="max-w-3xl mx-auto text-center">
            <p className="font-body text-muted-foreground">
              {isEn ? "Learn more: " : "Подробнее: "}
              <Link to="/blog/mohnatorukij-krab-optom" className="text-primary hover:underline">{isEn ? "wholesale terms" : "условия опта"}</Link>
              {", "}
              <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka" className="text-primary hover:underline">{isEn ? "live delivery" : "живая доставка"}</Link>
              {", "}
              <Link to="/blog/chto-takoe-mohnatorukij-krab" className="text-primary hover:underline">{isEn ? "what the hairy crab is" : "что такое мохнаторукий краб"}</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HairyCrabWholesaleLanding;
