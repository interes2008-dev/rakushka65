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
        title="Политика конфиденциальности — Rakushka65"
        description="Политика конфиденциальности и обработки персональных данных сайта Rakushka65.ru. Защита данных клиентов."
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
              Дата последнего обновления: {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта{" "}
                <a href="https://rakushka65.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rakushka65.ru</a>{" "}
                (далее — «Сайт»), принадлежащего ИП Шаманаев Игорь Геннадьевич (ИНН 650107445280, ОГРНИП 318650100013172) (далее — «Компания»).
              </p>
              <p>
                Используя Сайт и предоставляя свои персональные данные, вы соглашаетесь с условиями данной Политики конфиденциальности.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">2. Какие данные мы собираем</h2>
              <p>Мы можем собирать следующие персональные данные:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Имя (указанное в форме заявки)</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Комментарии и сообщения, оставленные через форму обратной связи</li>
                <li>Техническая информация: IP-адрес, тип браузера, время посещения</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">3. Цели обработки данных</h2>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Обработка заявок и заказов на морепродукты</li>
                <li>Связь с клиентами по телефону или в мессенджерах</li>
                <li>Организация доставки и самовывоза</li>
                <li>Улучшение качества обслуживания и работы Сайта</li>
                <li>Выполнение требований законодательства Российской Федерации</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">4. Защита данных</h2>
              <p>
                Компания принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
              <p>
                Доступ к персональным данным имеют только уполномоченные сотрудники Компании, которым эта информация необходима для выполнения своих обязанностей.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">5. Передача данных третьим лицам</h2>
              <p>
                Компания не передаёт персональные данные третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Передача данных службам доставки (Яндекс-доставка) для выполнения заказа</li>
                <li>Выполнение требований законодательства РФ по запросу уполномоченных государственных органов</li>
                <li>Наличие явного согласия пользователя на передачу данных</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">6. Сроки хранения данных</h2>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, но не более 3 (трёх) лет с момента последнего взаимодействия пользователя с Компанией, если иное не предусмотрено законодательством.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">7. Права пользователя</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Запросить информацию о хранимых персональных данных</li>
                <li>Потребовать исправления неточных данных</li>
                <li>Потребовать удаления своих персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
              </ul>
              <p>
                Для реализации указанных прав свяжитесь с нами по электронной почте:{" "}
                <a href="mailto:interes2015@gmail.com" className="text-primary hover:underline">interes2015@gmail.com</a>{" "}
                или по телефону{" "}
                <a href="tel:+79147690097" className="text-primary hover:underline">+7 (914) 769-00-97</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">8. Файлы cookie</h2>
              <p>
                Сайт может использовать файлы cookie для улучшения пользовательского опыта. Файлы cookie не содержат персональных данных и используются исключительно для технических целей.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground">9. Контактная информация</h2>
              <p>По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
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
              <h2 className="font-heading text-xl font-semibold text-foreground">10. Изменения в политике</h2>
              <p>
                Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на данной странице Сайта.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
