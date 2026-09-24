import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/blog-hairy-crab-underwater.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabWholesale = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Мохнаторукий краб оптом с Сахалина: живые поставки для ресторанов";
  const titleEn = "Hairy Crab Wholesale from Sakhalin: Live Supply for Restaurants";
  const descRu = "Оптовые поставки живого мохнаторукого краба с Сахалина. Калибровка партий по размеру, доставка живым в термобоксе, документы. Прайс по запросу.";
  const descEn = "Wholesale supply of live hairy crab from Sakhalin. Batches graded by size, live delivery in thermoboxes, full documents. Price list on request.";

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
      seoTitle={isEn ? "Hairy Crab Wholesale from Sakhalin, Live Supply | Rakushka65" : "Мохнаторукий краб оптом с Сахалина, живые поставки | Ракушка65"}
      seoDescription={isEn ? "Buy live hairy crab wholesale from Sakhalin. Batches graded by size, cold-chain live delivery, veterinary documents. Request the price list." : "Купить мохнаторукого краба оптом с Сахалина. Калибровка партий по размеру, живая доставка с холодовой цепью, документы. Запросите прайс."}
      breadcrumbName={isEn ? "Hairy Crab Wholesale" : "Мохнаторукий краб оптом"}
      slug="mohnatorukij-krab-optom"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Live hairy crab underwater on river stones" : "Живой мохнаторукий краб под водой на камнях"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Live hairy crab in clear water, wholesale supply from Sakhalin" : "Живой мохнаторукий краб в чистой воде, оптовая поставка с Сахалина"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            <strong>Hairy crab</strong> (the mitten or Shanghai crab) is a restaurant product first and foremost. Kitchens want it alive, and a steady autumn supply turns it into a seasonal item on the menu. <strong>Rakushka65</strong> ships live hairy crab from Sakhalin in batches graded by size, with full documents on every shipment.
          </p>

          <h2>Why restaurants buy hairy crab by the batch</h2>
          <p>
            Demand is seasonal and concentrated, which is exactly why Asian and fine-dining kitchens plan volumes ahead rather than buying piece by piece. A live crab on the pass also reads as proof of freshness, and that lifts the whole seafood section of a menu.
          </p>

          <h2>What a wholesale shipment includes</h2>
          <ul>
            <li><strong>Grading by size.</strong> Batches sorted so portioning and plating stay consistent.</li>
            <li><strong>Consistent calibre.</strong> A piece usually runs 80 to 250 grams, so portioning and plating stay predictable.</li>
            <li><strong>Live delivery.</strong> Oxygen packing and temperature sensors in the thermobox, cold chain held from tank to your city.</li>
            <li><strong>Documents.</strong> Veterinary papers and traceability for every batch, ready for audits and chains.</li>
          </ul>

          <h2>Volumes, season and booking</h2>
          <p>
            Autumn is the peak: best condition, best volume. Because demand spikes in season, we ask wholesale partners to reserve quantities in advance so we can hold the batch and the calibre you need. Off-season supply is possible in smaller volumes, quality still controlled at the holding tanks before shipping.
          </p>

          <h2>How to start</h2>
          <p>
            Tell us your city, target volume and the calibre you need. We send a wholesale price list tied to volume and season, agree the route and timing, and lock the first shipment. The fastest way is to <Link to="/opt/mohnatorukij-krab#zayavka">call or message us</Link>. See the product page for <Link to="/catalog/hairy-crab">live hairy crab</Link>, and read how we keep it alive across the country in <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">live hairy crab delivery</Link>. New to the species? Start with <Link to="/blog/chto-takoe-mohnatorukij-krab">what the hairy crab is</Link>.
          </p>
          <p>
            <strong>Rakushka65</strong>, direct wholesale from Sakhalin. Live, graded, documented.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Мохнаторукий краб</strong> (он же волосатый или шанхайский) это в первую очередь ресторанный продукт. Кухне нужен живой краб, а стабильная осенняя поставка делает его сезонной позицией в меню. <strong>Ракушка65</strong> отгружает живого мохнаторукого краба с Сахалина партиями: с калибровкой по размеру и документами на каждую отгрузку.
          </p>

          <h2>Почему рестораны берут краба партиями</h2>
          <p>
            Спрос на краба сезонный и плотный, поэтому азиатские кухни и рестораны высокой кухни планируют объёмы заранее, а не докупают поштучно. Живой краб на подаче работает как доказательство свежести, а это подтягивает всю рыбную часть меню.
          </p>

          <h2>Что входит в оптовую поставку</h2>
          <ul>
            <li><strong>Калибровка по размеру.</strong> Партии отсортированы, чтобы порционирование и подача были ровными.</li>
            <li><strong>Ровный калибр.</strong> Обычный вес штуки 80-250 граммов, порционирование и подача остаются предсказуемыми.</li>
            <li><strong>Живая доставка.</strong> Кислородная упаковка и датчики температуры в термобоксе, холодовая цепь от бассейна до вашего города.</li>
            <li><strong>Документы.</strong> Ветеринарные документы и прослеживаемость по каждой партии, готовые под проверки и сети.</li>
          </ul>

          <h2>Объёмы, сезон и бронь</h2>
          <p>
            Осень это пик: лучшее состояние краба и максимальный объём. Спрос в сезон резко растёт, поэтому оптовых партнёров мы просим бронировать количество заранее, тогда за вами закрепляется и партия, и нужный калибр. Вне сезона поставка тоже возможна, меньшими объёмами, качество так же контролируем в бассейнах перед отгрузкой.
          </p>

          <h2>Как начать работать</h2>
          <p>
            Напишите город, целевой объём и нужный калибр. Мы пришлём оптовый прайс, привязанный к объёму и сезону, согласуем маршрут и сроки и закрепим первую отгрузку. Быстрее всего <Link to="/opt/mohnatorukij-krab#zayavka">позвонить или написать в мессенджер</Link>. Страница товара: <Link to="/catalog/hairy-crab">живой мохнаторукий краб</Link>. Как мы довозим его живым через всю страну, читайте в статье <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">доставка живого мохнаторукого краба</Link>. Если краб для вас новый, начните с материала <Link to="/blog/chto-takoe-mohnatorukij-krab">что такое мохнаторукий краб</Link>.
          </p>
          <p>
            <strong>Ракушка65</strong>, прямой опт с Сахалина. Живой, с калибровкой, с документами.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabWholesale;
