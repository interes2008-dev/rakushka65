import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/crab-photo-7.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabRiverToSea = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Краб, который живёт в реке: маршруты мохнаторукого краба от Амура до Сахалина";
  const titleEn = "The Crab That Lives in a River: Mitten Crab Routes from the Amur to Sakhalin";
  const descRu = "Мохнаторукий краб уходит в реки на десятки километров и возвращается к морю. Ареал от Амурского лимана до Тайваня, срок жизни, чем питается.";
  const descEn = "The mitten crab travels tens of kilometres up rivers and returns to the sea. Its range from the Amur estuary to Taiwan, lifespan and diet.";

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
      seoTitle={isEn ? "Mitten Crab Life Cycle: From River to Sea | Rakushka65" : "Жизнь мохнаторукого краба: из реки в море | Ракушка65"}
      seoDescription={isEn ? "How the Japanese mitten crab lives between rivers and the sea: range from the Amur estuary to Taiwan, migrations up to 50 km upstream, lifespan and diet." : "Как живёт японский мохнаторукий краб между реками и морем: ареал от Амурского лимана до Тайваня, миграции до 50 км вверх по рекам, срок жизни и питание."}
      breadcrumbName={isEn ? "River to Sea" : "Из реки в море"}
      slug="mohnatorukij-krab-iz-reki-v-more"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Live hairy crab in a holding tank" : "Живой мохнаторукий краб в бассейне передержки"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Live hairy crab in a water tank at the facility" : "Живой мохнаторукий краб в ванне с водой в цехе"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={900}
      />

      {isEn ? (
        <>
          <p>
            Almost every crab on a restaurant menu spends its whole life in salt water. The <strong>mitten crab</strong> is the exception: it feeds and grows in rivers, sometimes far from any coastline, and heads back downstream to salt water to reproduce. Before it reached Europe, no native European crab did anything like this, which is one reason the species drew so much scientific attention.
          </p>

          <h2>Fifty kilometres upstream</h2>
          <p>
            During feeding migrations the Japanese mitten crab can climb up to 50 kilometres up a river. Think about what that means in practice: a crab walking, day after day, against the current, past river bends and shallows, into water that is essentially fresh. In Europe, where the related Chinese species settled in, specimens have been recorded 700 kilometres up the Elbe.
          </p>

          <h2>Where it lives in our waters</h2>
          <p>
            The Japanese mitten crab occurs from the Amur estuary and the rivers of north-eastern Sakhalin all the way south to Hong Kong and Taiwan. That is a remarkable spread for one species: cold Far Eastern rivers at one end, subtropics at the other. Across the Russian Far East it is the only member of its genus, apart from occasional catches of the Chinese mitten crab in the Amur.
          </p>

          <h2>A short life</h2>
          <p>
            Depending on conditions, the crab lives between one and four years. That is short for a crustacean, and it explains why populations respond quickly to what happens in a river: water quality, food supply, a warm or a cold season. It also means a batch of crab is, in effect, the result of the last couple of seasons, not of a decade.
          </p>

          <h2>What it eats</h2>
          <p>
            The diet is broad: small molluscs, dead fish, whatever the river bottom offers. An omnivore like this is a useful cleaner in its home waters, and the same trait becomes a problem where the crab is an invader, which is a separate story we tell in <Link to="/blog/mohnatorukij-krab-v-evrope">how the mitten crab conquered Europe</Link>.
          </p>

          <h2>Why this matters for a buyer</h2>
          <p>
            A crab that walks between fresh and salt water is unusually tolerant of change. That is exactly why it travels well in a thermobox and arrives active, and why we hold it in tanks before shipping. The practical side of that is in <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">live hairy crab delivery</Link>, and the product itself is on the <Link to="/catalog/hairy-crab">hairy crab page</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            Почти любой краб из ресторанного меню всю жизнь проводит в солёной воде. <strong>Мохнаторукий краб</strong> из этого правила выпадает: он нагуливается в реках, иногда далеко от побережья, а для размножения скатывается обратно к солёной воде. До того как он попал в Европу, ни один тамошний краб так не делал, и именно поэтому вид попал под пристальное внимание учёных.
          </p>

          <h2>Пятьдесят километров вверх по реке</h2>
          <p>
            В кормовых миграциях японский мохнаторукий краб поднимается вверх по рекам до 50 километров. Представьте, что это значит: краб день за днём идёт против течения, через перекаты и излучины, туда, где вода уже практически пресная. В Европе, куда попал его китайский родственник, крабов находили в 700 километрах вверх по Эльбе.
          </p>

          <h2>Где он живёт у нас</h2>
          <p>
            Японский мохнаторукий краб встречается от Амурского лимана и речек северо-восточного Сахалина на юг до Гонконга и Тайваня. Разброс для одного вида впечатляющий: на одном конце холодные дальневосточные реки, на другом субтропики. На всём российском Дальнем Востоке это единственный представитель рода, если не считать единичных поимок китайского мохнаторукого краба в Амуре.
          </p>

          <h2>Короткая жизнь</h2>
          <p>
            В зависимости от условий краб живёт от одного года до четырёх лет. Для ракообразного это немного, и отсюда понятно, почему численность так быстро отзывается на всё, что происходит в реке: качество воды, кормовая база, тёплый или холодный сезон. Из этого же следует простая вещь: партия краба это результат последних сезонов, а не десятилетия накопления.
          </p>

          <h2>Чем питается</h2>
          <p>
            Рацион широкий: мелкие моллюски, погибшая рыба, всё, что даёт дно реки. В родных водах такой всеядный житель работает санитаром, а там, где краб оказался пришельцем, та же черта оборачивается проблемой. Про это отдельный сюжет: <Link to="/blog/mohnatorukij-krab-v-evrope">как мохнаторукий краб захватил Европу</Link>.
          </p>

          <h2>Что из этого следует покупателю</h2>
          <p>
            Краб, который ходит между пресной и солёной водой, необычно спокойно переносит перемены. Именно поэтому он хорошо едет в термобоксе и приезжает активным, и поэтому перед отгрузкой мы держим его в бассейнах. Практическая сторона вопроса в статье <Link to="/blog/zhivoj-mohnatorukij-krab-dostavka">доставка живого мохнаторукого краба</Link>, а сам товар на <Link to="/catalog/hairy-crab">странице краба</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabRiverToSea;
