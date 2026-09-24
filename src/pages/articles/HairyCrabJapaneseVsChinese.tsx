import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/crab-photo-2.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabJapaneseVsChinese = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Японский или китайский: какой мохнаторукий краб добывается на Дальнем Востоке";
  const titleEn = "Japanese or Chinese: Which Mitten Crab Comes from the Russian Far East";
  const descRu = "Два похожих вида, один промысловый ареал. Кто такой Eriocheir japonica, какого размера бывает, с какого года его ловят и куда он уходит.";
  const descEn = "Two similar species, one fishing range. What Eriocheir japonica is, what size it reaches, when the fishery started and where the catch goes.";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: isEn ? "en" : "ru",
    headline: isEn ? titleEn : titleRu,
    description: isEn ? descEn : descRu,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    author: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
    publisher: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
    image: "https://rakushka65.ru/og-hairy-crab.jpg",
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "Japanese vs Chinese Mitten Crab: What Comes from the Far East | Rakushka65" : "Японский или китайский мохнаторукий краб: что ловят у нас | Ракушка65"}
      seoDescription={isEn ? "Eriocheir japonica against Eriocheir sinensis: range, size to 9.5 cm carapace and over half a kilo, commercial size from 5 cm, fishery since 1998." : "Eriocheir japonica против Eriocheir sinensis: ареал, размер панциря до 9,5 см и вес свыше полукилограмма, промысловый размер от 5 см, лов с 1998 года."}
      breadcrumbName={isEn ? "Japanese or Chinese" : "Японский или китайский"}
      slug="yaponskiy-ili-kitayskiy-mohnatorukij-krab"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Hairy crab claws close-up with the dark furry mittens" : "Клешни мохнаторукого краба крупным планом с тёмными «варежками»"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Hairy crab claws close-up, dark furry mittens clearly visible" : "Клешни мохнаторукого краба крупным планом, хорошо видны тёмные «варежки»"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={900}
      />

      {isEn ? (
        <>
          <p>
            Ask about the <strong>mitten crab</strong> and sooner or later someone will say "Shanghai crab". The name is not wrong, but it points at a different animal. Two close species carry those furry claws, and only one of them is fished here.
          </p>

          <h2>Two species, one look</h2>
          <p>
            The Chinese mitten crab, <em>Eriocheir sinensis</em>, is the famous one: the species behind the Shanghai crab name and the same species that spread through the rivers of Europe and North America. The Japanese mitten crab, <em>Eriocheir japonica</em>, is the one that lives in our waters, from the Amur estuary and the rivers of north-eastern Sakhalin south to Hong Kong and Taiwan. Across the Russian Far East it is the only member of the genus, apart from a handful of Chinese mitten crabs caught in the Amur.
          </p>

          <h2>How big it gets</h2>
          <p>
            The reference figures for the species put the carapace at up to about 9.5 cm in males and 8.9 cm in females, with weight going above half a kilogram in the largest specimens. Commercial size starts from 5 cm of carapace. In practice a shipping batch usually runs 80 to 250 grams a piece, which is why this is a portion-sized crab and why grading by size matters so much on the kitchen side.
          </p>

          <h2>A young fishery</h2>
          <p>
            Compared with king crab or snow crab, the mitten crab fishery here is young. Interest in it as a coastal commercial species appeared only in the late 1990s, small-scale fishing in Primorye started in 1998, and the catch has been exported mainly to South East Asia ever since. Researchers have also worked on rearing the species in controlled conditions, which tells you the demand has been there for a while.
          </p>

          <h2>How to tell it is the real thing</h2>
          <p>
            Forget the Latin names when a box arrives. Look at the claws: dense dark tufts of bristles, the mittens that give the crab its name. Then look at the animal itself, because with live seafood that matters more than species labels. A firm shell without cracks, a clear reaction when you touch it, legs that hold. A sluggish crab with a soft shell should never have made it into the box.
          </p>

          <p>
            More on the species in <Link to="/blog/chto-takoe-mohnatorukij-krab">what the hairy crab is</Link>, on its river life in <Link to="/blog/mohnatorukij-krab-iz-reki-v-more">from river to sea</Link>, and on the European side of the story in <Link to="/blog/mohnatorukij-krab-v-evrope">a delicacy here, a disaster there</Link>. Wholesale terms are on the <Link to="/opt/mohnatorukij-krab">crab wholesale page</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            Спросите про <strong>мохнаторукого краба</strong>, и рано или поздно кто-нибудь скажет «шанхайский». Название не выдумано, только указывает оно на другое животное. Мохнатые клешни носят два близких вида, а ловят у нас один из них.
          </p>

          <h2>Два вида, одна внешность</h2>
          <p>
            Китайский мохнаторукий краб, <em>Eriocheir sinensis</em>, это тот самый знаменитый: именно он стоит за названием «шанхайский» и он же расселился по рекам Европы и Северной Америки. Японский мохнаторукий краб, <em>Eriocheir japonica</em>, живёт в наших водах, от Амурского лимана и речек северо-восточного Сахалина на юг до Гонконга и Тайваня. На всём российском Дальнем Востоке это единственный представитель рода, если не считать единичных поимок китайского краба в Амуре.
          </p>

          <h2>Каким он вырастает</h2>
          <p>
            Справочные показатели по виду такие: ширина панциря до 9,5 см у самцов и до 8,9 см у самок, вес самых крупных экземпляров превышает полкилограмма. Промысловый размер начинается от 5 см панциря. На практике отгрузочная партия обычно идёт по 80-250 граммов штука, поэтому краб и считается порционным, и поэтому калибровка по размеру так важна для кухни.
          </p>

          <h2>Молодой промысел</h2>
          <p>
            На фоне камчатского краба или стригуна промысел мохнаторукого у нас совсем молодой. Интерес к нему как к объекту прибрежного лова появился только в конце 1990-х, небольшая добыча в Приморье ведётся с 1998 года, и улов всё это время в основном уходил в Юго-Восточную Азию. Специалисты занимались и технологией культивирования вида в контролируемых условиях, а это верный признак того, что спрос на него держится давно.
          </p>

          <h2>Как понять, что перед вами он</h2>
          <p>
            Когда приезжает ящик, латынь можно забыть. Смотрите на клешни: плотные тёмные пучки жёстких волосков, те самые «варежки», от которых пошло название. А дальше смотрите на само животное, потому что с живым продуктом это важнее видовых ярлыков. Плотный панцирь без трещин, внятная реакция на прикосновение, ноги держат. Вялый краб с мягким панцирем в ящик попасть не должен.
          </p>

          <p>
            Подробнее о виде в статье <Link to="/blog/chto-takoe-mohnatorukij-krab">что такое мохнаторукий краб</Link>, о жизни в реках в материале <Link to="/blog/mohnatorukij-krab-iz-reki-v-more">из реки в море</Link>, а европейская часть истории здесь: <Link to="/blog/mohnatorukij-krab-v-evrope">деликатес у нас, стихийное бедствие в Европе</Link>. Условия опта на <Link to="/opt/mohnatorukij-krab">оптовой странице</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabJapaneseVsChinese;
