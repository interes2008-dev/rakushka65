import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead
        title="Политика конфиденциальности - Ракушка65"
        description="Политика конфиденциальности и обработки персональных данных сайта rakushka65.ru. Защита данных клиентов."
        noindex
      />
      <WaveBackground />
      <Header />
      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 font-body text-sm text-foreground/80 leading-relaxed">
            <p className="text-muted-foreground text-xs">
              Дата обновления: {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p>
                Политика определяет порядок обработки данных на сайте rakushka65.ru, принадлежащем ИП Шаманаев Игорь Геннадьевич. Используя сайт, вы соглашаетесь с этими условиями.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">2. Какие данные мы собираем</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Имя и номер телефона</li>
                <li>Email и комментарии к заявке</li>
                <li>Техническая информация: IP, тип браузера</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">3. Цели обработки</h2>
              <p>Данные нужны для оформления заказов, связи с клиентами и организации доставки.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">4. Защита данных</h2>
              <p>Мы принимаем технические меры для защиты ваших данных от несанкционированного доступа.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">9. Контактная информация</h2>
              <ul className="list-none space-y-1">
                <li>ИП Шаманаев Игорь Геннадьевич</li>
                <li>ИНН: 650107445280</li>
                <li>Email: interes2015@gmail.com</li>
                <li>Телефон: +7 (914) 769-00-97</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
