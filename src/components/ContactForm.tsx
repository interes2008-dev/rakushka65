import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
              className="bg-sand-glass rounded-2xl p-6 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-body text-xs text-muted-foreground mb-2 uppercase tracking-wider">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="font-heading text-lg font-semibold hover:text-primary transition-colors">
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
          className="flex justify-center gap-4 mt-10"
        >
          <a
            href="https://t.me/+79147690097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Send className="w-4 h-4" /> Telegram
          </a>
          <a
            href="https://max.ru/+79147690097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Max
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
