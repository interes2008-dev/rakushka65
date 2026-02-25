import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", comment: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Хотите попробовать <span className="text-gradient-teal">лучшие морепродукты?</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Готовы ответить на ваши вопросы и помочь с выбором морепродуктов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground mb-1">Телефон</p>
                <a href="tel:+79147690097" className="font-heading text-lg font-semibold hover:text-primary transition-colors">
                  +7 (914) 769-00-97
                </a>
                <p className="font-body text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:info@rakushka65.ru" className="font-heading text-lg font-semibold hover:text-primary transition-colors">
                  info@rakushka65.ru
                </a>
                <p className="font-body text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground mb-1">Адрес</p>
                <p className="font-heading text-lg font-semibold">г. Южно-Сахалинск</p>
                <p className="font-body text-sm text-foreground/80 mt-0.5">ул. 4-Железнодорожная, 18, стр. 1</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Самовывоз</p>
                <p className="font-body text-sm text-muted-foreground mt-0.5">Яндекс-доставка</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground mb-1">Время работы</p>
                <p className="font-heading text-lg font-semibold">Пн-Вс: 9:00 – 21:00</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Доставка в день заказа</p>
              </div>
            </div>

            <div className="border-t border-border/30 pt-6">
              <p className="font-body text-sm text-muted-foreground mb-4">Мы в мессенджерах:</p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/+79147690097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href="https://max.ru/+79147690097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 font-body text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Max
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-sand-glass rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-1">Оставить заявку</h3>
              <p className="font-body text-sm text-muted-foreground">Заполните форму и мы перезвоним вам в течение 15 минут</p>
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">Ваше имя</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Как к вам обращаться?"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">Телефон</label>
              <input
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">Что вас интересует?</label>
              <textarea
                rows={3}
                maxLength={1000}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                placeholder="Расскажите, что хотели бы заказать..."
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Заявка отправлена!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Заказать звонок
                </>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground font-body">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                политикой конфиденциальности
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
