import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/blog-hairy-crab-cooked.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabWhatIs = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Что такое мохнаторукий краб: волосатый, шанхайский, ради чего его берут";
  const titleEn = "What Is the Hairy Crab: Mitten, Shanghai, and Why It's Prized";
  const descRu = "Мохнаторукий краб простыми словами: как выглядит, почему «мохнаторукий», какого размера бывает, когда сезон и как его берут. Гид от поставщика с Сахалина.";
  const descEn = "The hairy crab explained: how it looks, why the furry claws, what size it runs, when the season peaks and how it is supplied. Guide from a Sakhalin supplier.";

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
      seoTitle={isEn ? "What Is the Hairy Crab: Mitten & Shanghai Crab Explained | Rakushka65" : "Что такое мохнаторукий краб: волосатый и шанхайский краб | Ракушка65"}
      seoDescription={isEn ? "Hairy crab (mitten, Shanghai crab): appearance, the furry claws, size, season and how it is supplied alive. A supplier's plain-language guide." : "Мохнаторукий краб (волосатый, шанхайский): как выглядит, зачем «варежки» на клешнях, размер, сезон и живая поставка. Понятный гид поставщика."}
      breadcrumbName={isEn ? "What Is the Hairy Crab" : "Что такое мохнаторукий краб"}
      slug="chto-takoe-mohnatorukij-krab"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Steamed hairy crabs served on a plate with dipping sauce" : "Приготовленный на пару мохнаторукий краб на блюде с соусом"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Steamed hairy crabs on a plate with black vinegar sauce and ginger" : "Мохнаторукий краб на пару на блюде с соусом из чёрного уксуса и имбирём"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            The <strong>hairy crab</strong> goes by several names: mitten crab, Shanghai crab, and in Russian simply the furry-clawed crab. The giveaway is right there on the claws, dense dark tufts that look like little mittens. It is a modest-sized crab, usually 80 to 250 grams a piece, with steady demand year after year.
          </p>

          <h2>Why the furry claws</h2>
          <p>
            Those tufts of stiff hair sit on the pincers and are the easiest way to identify the species at a glance. They are not decoration for the kitchen, they are simply how you know you are looking at the real mitten crab and not a lookalike.
          </p>

          <h2>Size and grading</h2>
          <p>
            A piece usually runs 80 to 250 grams, so this is a portion-sized crab rather than a centrepiece for a table. Kitchens care about consistency, so we sort every batch by size: portioning stays predictable and plating stays even. Tell us the calibre you need and we hold it for your shipment.
          </p>

          <h2>When is the season</h2>
          <p>
            Autumn is the peak: the crab is in its best condition and volumes are at their highest, so restaurants plan their buying around those weeks. Supply continues off-season in smaller batches, which is why serious buyers reserve autumn quantities ahead of time.
          </p>

          <h2>How to tell a good crab</h2>
          <p>
            The test is simple: the crab has to be alive and active. A firm shell with no cracks, and a clear reflex when you touch it. Sluggish crabs with soft shells never make it into a shipment, we cull those at intake.
          </p>

          <h2>Buying it live</h2>
          <p>
            Like most crab, it is best alive and cooked the same day. <strong>Rakushka65</strong> supplies live hairy crab from Sakhalin, wholesale for restaurants and by request for private orders. See the <Link to="/catalog/hairy-crab">product page</Link>, the <Link to="/blog/mohnatorukij-krab-optom">wholesale terms</Link>, and how we handle <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">live delivery</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            У <strong>мохнаторукого краба</strong> несколько имён: волосатый краб, шанхайский краб, а по-простому краб с «варежками». Опознаётся сразу по клешням: на них плотные тёмные пучки ворса, похожие на маленькие рукавицы. Краб некрупный, обычно 80-250 граммов штука, а спрос на него стабильно высокий.
          </p>

          <h2>Зачем «варежки» на клешнях</h2>
          <p>
            Эти пучки жёстких волосков сидят на клешнях и это самый простой способ узнать вид с одного взгляда. Кухне они ни к чему, зато по ним понятно, что перед вами настоящий мохнаторукий краб, а не похожий на него сосед по семейству.
          </p>

          <h2>Размер и калибровка</h2>
          <p>
            Обычный вес штуки 80-250 граммов, то есть это порционный краб, а не гигант на компанию. Для кухни важна ровность партии, поэтому мы сортируем краба по размеру: так проще считать порции и держать одинаковую подачу. Нужный калибр согласуем при заказе и закрепляем за отгрузкой.
          </p>

          <h2>Когда сезон</h2>
          <p>
            Пик приходится на осень: тогда краб в лучшем состоянии и объёмы максимальные, поэтому рестораны планируют закупку именно на эти недели. Вне сезона поставка тоже идёт, но партиями поменьше, так что осенние объёмы закупщики бронируют заранее.
          </p>

          <h2>Как понять, что краб хороший</h2>
          <p>
            Главный признак простой: краб должен быть живым и активным. Панцирь плотный, без трещин, на лёгкое касание идёт реакция. Вялый краб с мягким панцирем в отгрузку не идёт, такие экземпляры мы отбраковываем ещё на приёмке.
          </p>

          <h2>Брать живым</h2>
          <p>
            Как и почти любого краба, его лучше брать живым и готовить в тот же день. <strong>Ракушка65</strong> поставляет живого мохнаторукого краба с Сахалина, оптом для ресторанов и по запросу для частных заказов. Смотрите <Link to="/catalog/hairy-crab">страницу товара</Link>, <Link to="/blog/mohnatorukij-krab-optom">условия опта</Link> и то, как устроена <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">живая доставка</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabWhatIs;
