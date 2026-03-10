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
        title="Публичная оферта — Rakushka65"
        description="Публичная оферта ИП Шаманаев И.Г. на покупку морепродуктов через сайт Rakushka65.ru. Условия заказа, доставки и оплаты."
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
              Дата последнего обновления: {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p>
                Настоящий документ является официальным предложением (публичной офертой) ИП Шаманаев Игорь Геннадьевич (ИНН 650107445280, ОГРНИП 318650100013172) (далее — «Продавец») в адрес любого физического лица (далее — «Покупатель») заключить договор купли-продажи морепродуктов на условиях, изложенных ниже.
              </p>
              <p>
                Оферта вступает в силу с момента её размещения на сайте{" "}
                <a href="https://rakushka65.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rakushka65.ru</a>{" "}
                (далее — «Сайт») и действует до момента её отзыва Продавцом.
              </p>
              <p>
                Оформление заказа Покупателем является полным и безоговорочным акцептом настоящей оферты.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">2. Предмет договора</h2>
              <p>
                Продавец обязуется передать Покупателю свежие (охлаждённые, живые) морепродукты, добытые в акватории Сахалина и Курильских островов, а Покупатель обязуется принять и оплатить товар в соответствии с условиями настоящей оферты.
              </p>
              <p>
                Ассортимент, характеристики и цены на продукцию указаны на Сайте и могут быть уточнены при оформлении заказа.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">3. Оформление заказа</h2>
              <p>Заказ может быть оформлен следующими способами:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Через форму обратной связи на Сайте</li>
                <li>По телефону: <a href="tel:+79147690097" className="text-primary hover:underline">+7 (914) 769-00-97</a></li>
                <li>Через мессенджер Telegram: <a href="https://t.me/+79147690097" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@rakushka65</a></li>
              </ul>
              <p>
                После оформления заказа Продавец связывается с Покупателем для подтверждения заказа, уточнения деталей и согласования сроков доставки.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">4. Цены и оплата</h2>
              <p>
                Цены на товары указаны на Сайте в российских рублях. Продавец оставляет за собой право изменять цены без предварительного уведомления. Цена, действующая на момент подтверждения заказа, является окончательной.
              </p>
              <p>Оплата производится следующими способами:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Наличными при самовывозе</li>
                <li>Переводом на банковскую карту</li>
                <li>Иными способами по согласованию с Продавцом</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">5. Доставка и самовывоз</h2>
              <p>Получение заказа возможно следующими способами:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Самовывоз:</strong> г. Южно-Сахалинск, ул. 4-Железнодорожная, 18, стр. 1</li>
                <li><strong className="text-foreground">Яндекс-доставка:</strong> доставка осуществляется через сервис Яндекс-доставка по городу Южно-Сахалинск и области</li>
              </ul>
              <p>
                Сроки доставки согласовываются индивидуально при подтверждении заказа. Продавец прилагает максимальные усилия для соблюдения оговоренных сроков, однако не несёт ответственности за задержки, вызванные действиями службы доставки.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">6. Качество товара</h2>
              <p>
                Продавец гарантирует свежесть и качество поставляемых морепродуктов. Вся продукция добывается водолазами вручную в экологически чистых водах Сахалина и Курильских островов и поставляется без заморозки.
              </p>
              <p>
                Покупатель обязан проверить товар при получении. Претензии по качеству принимаются в момент получения товара.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">7. Возврат и обмен</h2>
              <p>
                В связи со скоропортящимся характером продукции, возврат и обмен надлежащего качества товара не осуществляется.
              </p>
              <p>
                В случае обнаружения ненадлежащего качества товара при получении Покупатель вправе потребовать замены товара или возврата уплаченных денежных средств. Для этого необходимо связаться с Продавцом в течение 2 часов с момента получения заказа.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">8. Ответственность сторон</h2>
              <p>
                Продавец не несёт ответственности за ненадлежащее использование или хранение товара после его передачи Покупателю.
              </p>
              <p>
                Стороны освобождаются от ответственности за неисполнение обязательств в случае наступления обстоятельств непреодолимой силы (форс-мажор).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">9. Персональные данные</h2>
              <p>
                Обработка персональных данных Покупателя осуществляется в соответствии с{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Политикой конфиденциальности
                </Link>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">10. Контактная информация</h2>
              <p>По всем вопросам обращайтесь:</p>
              <ul className="list-none space-y-1">
                <li><strong className="text-foreground">Компания:</strong> ИП Шаманаев Игорь Геннадьевич</li>
                <li><strong className="text-foreground">ИНН:</strong> 650107445280</li>
                <li><strong className="text-foreground">ОГРНИП:</strong> 318650100013172</li>
                <li><strong className="text-foreground">Сайт:</strong>{" "}
                  <a href="https://rakushka65.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rakushka65.ru</a>
                </li>
                <li><strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:interes2015@gmail.com" className="text-primary hover:underline">interes2015@gmail.com</a>
                </li>
                <li><strong className="text-foreground">Телефон:</strong>{" "}
                  <a href="tel:+79147690097" className="text-primary hover:underline">+7 (914) 769-00-97</a>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">11. Изменение условий оферты</h2>
              <p>
                Продавец оставляет за собой право вносить изменения в настоящую оферту. Актуальная редакция всегда доступна на данной странице Сайта. Продолжение использования Сайта и оформление заказов после внесения изменений означает согласие Покупателя с новой редакцией оферты.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offer;
