import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/blog-hairy-crab-cooked.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabWhatIs = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Что такое мохнаторукий краб: волосатый, шанхайский, ради чего его берут";
  const titleEn = "What Is the Hairy Crab: Mitten, Shanghai, and Why It's Prized";
  const descRu = "Мохнаторукий краб простыми словами: как выглядит, почему «мохнаторукий», в чём ценность икры, когда сезон и как его готовят. Гид от поставщика с Сахалина.";
  const descEn = "The hairy crab explained: how it looks, why the furry claws, the value of its roe, when the season peaks and how it's cooked. Guide from a Sakhalin supplier.";

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
      seoDescription={isEn ? "Hairy crab (mitten, Shanghai crab): appearance, the furry claws, prized autumn roe, season and cooking. A supplier's plain-language guide." : "Мохнаторукий краб (волосатый, шанхайский): как выглядит, зачем «варежки» на клешнях, ценная осенняя икра, сезон и готовка. Понятный гид поставщика."}
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
            The <strong>hairy crab</strong> goes by several names: mitten crab, Shanghai crab, and in Russian simply the furry-clawed crab. The giveaway is right there on the claws, dense dark tufts that look like little mittens. It is a modest-sized crab with an outsized reputation, and the reason is the roe.
          </p>

          <h2>Why the furry claws</h2>
          <p>
            Those tufts of stiff hair sit on the pincers and are the easiest way to identify the species at a glance. They are not decoration for the kitchen, they are simply how you know you are looking at the real mitten crab and not a lookalike.
          </p>

          <h2>What people actually eat</h2>
          <p>
            The prize is the roe and the fat, not big chunks of leg meat. In autumn, females carry dense orange roe with a nutty, buttery flavor, this is the whole point of the crab and the reason it sells out in season. Males offer more sweet, jelly-like fat and a cleaner meat. Many buyers order both and serve them side by side.
          </p>

          <h2>When is the season</h2>
          <p>
            Autumn is the peak. That is when roe is fullest and the crab is in best condition, so restaurants plan volumes for those weeks. Outside the season the crab is still good, just less about the roe, which is why serious buyers reserve autumn quantities ahead of time.
          </p>

          <h2>How it's cooked</h2>
          <p>
            The classic treatment is steaming, roughly 12 to 18 minutes depending on size, served with a dip of black vinegar, ginger and a little sugar. Steaming keeps the roe intact and lets its flavor lead. Simple is better here, heavy sauces bury what makes this crab special.
          </p>

          <h2>Buying it live</h2>
          <p>
            Like most crab, it is best alive and cooked the same day. <strong>Rakushka65</strong> supplies live hairy crab from Sakhalin, wholesale for restaurants and by request for private orders. See the <Link to="/catalog/hairy-crab">product page</Link>, the <Link to="/blog/mohnatorukij-krab-optom">wholesale terms</Link>, and how we handle <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">live delivery</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            У <strong>мохнаторукого краба</strong> несколько имён: волосатый краб, шанхайский краб, а по-простому краб с «варежками». Опознаётся сразу по клешням: на них плотные тёмные пучки ворса, похожие на маленькие рукавицы. Краб некрупный, а репутация у него огромная, и всё дело в икре.
          </p>

          <h2>Зачем «варежки» на клешнях</h2>
          <p>
            Эти пучки жёстких волосков сидят на клешнях и это самый простой способ узнать вид с одного взгляда. Кухне они ни к чему, зато по ним понятно, что перед вами настоящий мохнаторукий краб, а не похожий на него сосед по семейству.
          </p>

          <h2>Что именно едят</h2>
          <p>
            Ценят икру и жир, а не крупное мясо ног. Осенью самки несут густую оранжевую икру с ореховым, чуть сливочным вкусом, ради неё этого краба и берут, в сезон он разлетается. У самцов больше сладкого желеобразного жира и более чистое мясо. Многие заказывают и тех, и других и подают рядом.
          </p>

          <h2>Когда сезон</h2>
          <p>
            Пик приходится на осень. Тогда икра самая полная, а краб в лучшем состоянии, поэтому рестораны планируют объёмы именно на эти недели. Вне сезона краб тоже хорош, просто уже меньше про икру, поэтому серьёзные закупщики бронируют осенние объёмы заранее.
          </p>

          <h2>Как готовят</h2>
          <p>
            Классика это пар, примерно 12-18 минут в зависимости от размера, с соусом из чёрного уксуса, имбиря и щепотки сахара. Пар сохраняет икру целой и выводит её вкус на первый план. Здесь чем проще, тем лучше: тяжёлые соусы забивают то, ради чего этого краба и берут.
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
