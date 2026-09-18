import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { reachGoal, GOALS } from "@/lib/metrika";
import { TelegramIcon, MaxIcon, WhatsAppIcon } from "@/components/BrandIcons";

const ContactSection = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      main: "+7 (914) 769-00-97",
      href: "tel:+79147690097",
      sub: t.contact.phoneHours,
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      main: "interes2015@gmail.com",
      href: "mailto:interes2015@gmail.com",
      sub: t.contact.emailResponse,
    },
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      main: t.contact.city,
      sub: `${t.contact.street}\n${t.contact.pickup}\n${t.contact.yandexDelivery}`,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      main: t.contact.hoursValue,
      sub: t.contact.deliveryToday,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
            <span className="text-gradient-teal">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground font-body">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-sand-glass rounded-2xl p-6 text-center flex flex-col items-center group hover:bg-[hsl(168_72%_50%/0.08)] hover:border-primary/30 hover:shadow-[0_0_30px_hsl(168_72%_50%/0.12)] transition-all duration-500 ease-out"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-body text-xs text-muted-foreground mb-2 uppercase tracking-wider">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  onClick={() => {
                    if (item.href?.startsWith("tel:")) reachGoal(GOALS.PHONE_CLICK);
                    if (item.href?.startsWith("mailto:")) reachGoal(GOALS.EMAIL_CLICK);
                  }}
                  className="font-heading text-lg font-semibold hover:text-primary transition-colors"
                >
                  {item.main}
                </a>
              ) : (
                <p className="font-heading text-lg font-semibold">{item.main}</p>
              )}
              <p className="font-body text-sm text-muted-foreground mt-2 whitespace-pre-line">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10"
        >
          <a
            href="https://t.me/+79147690097"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal(GOALS.TELEGRAM_CLICK)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <TelegramIcon className="w-5 h-5" /> Telegram
          </a>
          <a
            href="https://max.ru/+79147690097"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal(GOALS.MAX_CLICK)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <MaxIcon className="w-5 h-5" /> Max
          </a>
          <a
            href="https://wa.me/79147690097"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal(GOALS.WHATSAPP_CLICK)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
