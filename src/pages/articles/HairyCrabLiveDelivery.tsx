import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/product-hairy-crab.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabLiveDelivery = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Доставка живого мохнаторукого краба по России: как мы возим его живым";
  const titleEn = "Live Hairy Crab Delivery Across Russia: How We Keep It Alive";
  const descRu = "Как доставить живого мохнаторукого краба через всю страну: передержка, кислородная упаковка, термобокс, сроки и документы. Опыт поставщика с Сахалина.";
  const descEn = "How live hairy crab travels across Russia: holding, oxygen packing, thermoboxes, transit times and documents. Practical guide from a Sakhalin supplier.";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: isEn ? "en" : "ru",
    headline: isEn ? titleEn : titleRu,
    description: isEn ? descEn : descRu,
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    author: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
    publisher: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
    image: "https://rakushka65.ru/og-hairy-crab.jpg",
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "Live Hairy Crab Delivery Across Russia | Rakushka65" : "Доставка живого мохнаторукого краба по России | Ракушка65"}
      seoDescription={isEn ? "Live hairy crab delivery from Sakhalin: holding, oxygen packing, thermoboxes, 24-48h transit, veterinary documents. Wholesale shipments kept alive." : "Доставка живого мохнаторукого краба с Сахалина: передержка, кислородная упаковка, термобокс, сроки 24-48 часов, документы. Оптом и живым."}
      breadcrumbName={isEn ? "Live Hairy Crab Delivery" : "Доставка живого краба"}
      slug="zhivoj-mohnatorukij-krab-dostavka"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Live hairy crab close-up before packing" : "Живой мохнаторукий краб крупным планом перед упаковкой"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Live hairy crab, hairy claws, ready for live shipping" : "Живой мохнаторукий краб с мохнатыми клешнями, готов к живой отгрузке"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            A live crab that arrives active is not luck, it is a protocol. Hairy crab is hardy compared with many crustaceans, but a shipment across the country still needs holding, the right packing and a cold chain that never breaks. Here is how <strong>Rakushka65</strong> moves live hairy crab from a Sakhalin tank to a restaurant in another region.
          </p>

          <h2>Step 1: holding before shipping</h2>
          <p>
            After the catch, crabs rest in flow-through tanks with cold water. They calm down, empty the gut and rebuild energy, which is what lets them travel well. We ship only active animals with a firm shell and a clear reflex response, weak specimens never go into a batch.
          </p>

          <h2>Step 2: oxygen packing and the thermobox</h2>
          <p>
            Crabs are packed damp and cool, not in water. Low temperature slows the metabolism and the animal spends less oxygen, so it holds out far longer. Into the thermobox go gel-ice and temperature sensors, and the target inside is a steady cold that keeps the crab dormant but alive for the whole trip.
          </p>

          <h2>Step 3: transit and timing</h2>
          <p>
            From Yuzhno-Sakhalinsk we route shipments by air with a controlled temperature regime. Typical time from tank to recipient is 24 to 48 hours depending on the city. For wholesale partners we plan the route and the flight around your delivery window, so the crab lands close to service, not days before.
          </p>

          <h2>On arrival</h2>
          <ul>
            <li>Open the box in a cool room, do not shock the crab with heat.</li>
            <li>Keep it cold and damp, covered with a wet cloth, never submerged in fresh water.</li>
            <li>A light touch should trigger a reflex, that is your live check.</li>
            <li>Cook the same day for the best roe and texture.</li>
          </ul>

          <h2>Documents and volume</h2>
          <p>
            Every wholesale batch ships with veterinary papers and traceability, which chains and audited kitchens require. Volumes and calibration are agreed in advance, especially in the autumn roe season when demand peaks.
          </p>

          <p>
            Order on the <Link to="/catalog/hairy-crab">live hairy crab</Link> page, see full wholesale terms in <Link to="/blog/mohnatorukij-krab-optom">hairy crab wholesale</Link>, or learn the species in <Link to="/blog/chto-takoe-mohnatorukij-krab">what the hairy crab is</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            Живой краб, который приезжает активным, это не везение, а протокол. Мохнаторукий краб выносливее многих ракообразных, но поставка через всю страну всё равно требует передержки, правильной упаковки и холодовой цепи, которая нигде не рвётся. Вот как <strong>Ракушка65</strong> везёт живого мохнаторукого краба из сахалинского бассейна в ресторан другого региона.
          </p>

          <h2>Шаг 1: передержка перед отгрузкой</h2>
          <p>
            После вылова крабы отдыхают в бассейнах с проточной холодной водой. Они успокаиваются, очищают кишечник и восстанавливают силы, именно это позволяет им хорошо перенести дорогу. В партию идут только активные особи с плотным панцирем и чёткой реакцией, слабых не берём.
          </p>

          <h2>Шаг 2: кислородная упаковка и термобокс</h2>
          <p>
            Краба упаковывают влажным и холодным, не в воде. Низкая температура замедляет обмен веществ, кислорода расходуется меньше, и краб держится в дороге заметно дольше. В термобокс кладут хладагент и датчики температуры, задача внутри держать стабильный холод, при котором краб дремлет, но остаётся живым весь путь.
          </p>

          <h2>Шаг 3: перевозка и сроки</h2>
          <p>
            Из Южно-Сахалинска отправляем груз авиа с температурным контролем. Обычное время от бассейна до получателя 24-48 часов в зависимости от города. Оптовым партнёрам маршрут и рейс мы планируем под ваше окно доставки, чтобы краб приезжал ближе к сервису, а не за несколько дней до него.
          </p>

          <h2>Что делать при получении</h2>
          <ul>
            <li>Вскрывайте коробку в прохладном помещении, не устраивайте крабу тепловой шок.</li>
            <li>Держите холодным и влажным, под мокрой тканью, не топите в пресной воде.</li>
            <li>Лёгкое касание должно вызвать реакцию, это и есть проверка на живость.</li>
            <li>Готовьте в тот же день, так икра и текстура будут на пике.</li>
          </ul>

          <h2>Документы и объём</h2>
          <p>
            Каждая оптовая партия едет с ветеринарными документами и прослеживаемостью, это требуют сети и кухни с аудитом. Объёмы и калибровку согласуем заранее, особенно в осенний сезон икры, когда спрос на пике.
          </p>

          <p>
            Заказать можно на странице <Link to="/catalog/hairy-crab">живой мохнаторукий краб</Link>. Полные условия опта в статье <Link to="/blog/mohnatorukij-krab-optom">мохнаторукий краб оптом</Link>, а про сам вид читайте в материале <Link to="/blog/chto-takoe-mohnatorukij-krab">что такое мохнаторукий краб</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabLiveDelivery;
