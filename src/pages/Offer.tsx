import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Offer = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead
        title="Публичная оферта - Ракушка65"
        description="Публичная оферта ИП Шаманаев И.Г. на покупку морепродуктов через сайт rakushka65.ru. Условия заказа, доставки и оплаты."
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
            Публичная оферта
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 font-body text-sm text-foreground/80 leading-relaxed">
            <p className="text-muted-foreground text-xs">
              Дата обновления: {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p>
                Этот документ - официальное предложение ИП Шаманаев Игорь Геннадьевич (ИНН 650107445280, ОГРНИП 318650100013172) заключить договор купли-продажи на изложенных ниже условиях.
              </p>
              <p>
                Оферта вступает в силу с момента размещения на сайте rakushka65.ru и действует до отзыва Продавцом. Оформление заказа означает полное согласие с условиями.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">2. Предмет договора</h2>
              <p>
                Продавец обязуется передать свежие морепродукты из акватории Сахалина и Курильских островов, а Покупатель обязуется принять и оплатить их.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">3. Оформление заказа</h2>
              <p>Заказ оформляется через форму на сайте, по телефону +7 (914) 769-00-97 или через Telegram @rakushka65.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">4. Цены и оплата</h2>
              <p>
                Цены указаны в рублях. Оплата возможна наличными, переводом или иными способами по согласованию.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">5. Доставка и самовывоз</h2>
              <p>
                Самовывоз: г. Южно-Сахалинск, ул. 4-Железнодорожная, 18, стр. 1. Доставка: Яндекс-доставка по городу и области.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">6. Качество товара</h2>
              <p>
                Продавец гарантирует свежесть продукции. Проверка товара проводится при получении. Претензии принимаются в момент передачи.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">7. Возврат и обмен</h2>
              <p>
                Из-за скоропортящегося характера продукции возврат товара надлежащего качества невозможен. При обнаружении проблем свяжитесь с нами в течение 2 часов.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">10. Контактная информация</h2>
              <ul className="list-none space-y-1">
                <li>ИП Шаманаев Игорь Геннадьевич</li>
                <li>ИНН: 650107445280</li>
                <li>ОГРНИП: 318650100013172</li>
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

export default Offer;
