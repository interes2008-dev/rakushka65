import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", comment: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
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
              Оставьте заявку — мы свяжемся с вами и поможем подобрать идеальный заказ
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-sand-glass rounded-2xl p-8 md:p-10 space-y-6"
          >
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
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
