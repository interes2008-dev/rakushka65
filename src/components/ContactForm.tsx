import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { reachGoal, GOALS } from "@/lib/metrika";

const ContactSection = () => {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!name.trim() || !/^[\d\s\-+()]{5,20}$/.test(phone.trim())) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const { error } = await supabase.functions.invoke("send-max", {
        body: { name: name.trim(), phone: phone.trim(), comment: comment.trim() },
      });
      if (error) throw error;
      reachGoal(GOALS.FORM_SUBMIT, { source: "contact_section" });
      setStatus("sent");
      setName("");
      setPhone("");
      setComment("");
    } catch {
      setStatus("error");
    }
  };

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
          className="flex justify-center gap-4 mt-10"
        >
          <a
            href="https://t.me/+79147690097"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal(GOALS.TELEGRAM_CLICK)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Send className="w-4 h-4" /> Telegram
          </a>
          <a
            href="https://max.ru/+79147690097"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal(GOALS.MAX_CLICK)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Max
          </a>
        </motion.div>

        {/* Форма заявки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-xl mx-auto mt-16 bg-sand-glass rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-2">{t.contact.formTitle}</h3>
          <p className="font-body text-sm text-muted-foreground text-center mb-6">{t.contact.formSubtitle}</p>

          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading text-lg font-semibold text-primary">{t.contact.submitted}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cf-name" className="block font-body text-sm text-muted-foreground mb-1.5">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="cf-name"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (status === "error") setStatus("idle"); }}
                  placeholder={t.contact.namePlaceholder}
                  maxLength={100}
                  required
                  className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="cf-phone" className="block font-body text-sm text-muted-foreground mb-1.5">
                  {t.contact.phoneFormLabel}
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); if (status === "error") setStatus("idle"); }}
                  placeholder={t.contact.phonePlaceholder}
                  maxLength={20}
                  required
                  className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="cf-comment" className="block font-body text-sm text-muted-foreground mb-1.5">
                  {t.contact.commentLabel}
                </label>
                <textarea
                  id="cf-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t.contact.commentPlaceholder}
                  maxLength={1000}
                  rows={3}
                  className="w-full rounded-lg bg-background/60 border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="font-body text-sm text-destructive text-center">{t.contact.errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {status === "sending" ? t.contact.sending : t.contact.submitBtn}
              </button>

              <p className="font-body text-xs text-muted-foreground text-center">
                {t.contact.privacyText}
                <Link to="/privacy" className="text-primary hover:underline">
                  {t.contact.privacyLink}
                </Link>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
