import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/crab-photo-8.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabInEurope = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Деликатес у нас, стихийное бедствие в Европе: история мохнаторукого краба";
  const titleEn = "A Delicacy Here, a Disaster There: The Mitten Crab in Europe";
  const descRu = "Как краб доехал в балластной воде до Германии в 1912 году, добрался до Темзы и обошёлся Европе в десятки миллионов евро. И почему у нас всё наоборот.";
  const descEn = "How the crab reached Germany in ballast water in 1912, spread to the Thames and cost Europe tens of millions of euros. And why the Far East is the opposite case.";

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
      seoTitle={isEn ? "Mitten Crab in Europe: Invasion Story and Damage | Rakushka65" : "Мохнаторукий краб в Европе: история вторжения | Ракушка65"}
      seoDescription={isEn ? "Ballast water, 1912, the river Aller, 700 km up the Elbe, 220 tonnes pulled from the Weser in one year, and tens of millions of euros in damage." : "Балластная вода, 1912 год, река Аллер, 700 км вверх по Эльбе, 220 тонн из Везера за год и десятки миллионов евро ущерба."}
      breadcrumbName={isEn ? "The Mitten Crab in Europe" : "Мохнаторукий краб в Европе"}
      slug="mohnatorukij-krab-v-evrope"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "A batch of live hairy crab in a facility tank" : "Партия живого мохнаторукого краба в бассейне цеха"}
    >
      <img
        src={heroImg}
        alt={isEn ? "A batch of live hairy crab in the holding tank" : "Партия живого мохнаторукого краба в бассейне"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={900}
      />

      {isEn ? (
        <>
          <p>
            Here is a species with two completely different reputations. In East Asia the <strong>mitten crab</strong> is a prized seasonal product. In Europe it sits on the list of the world's 100 worst invasive species, and countries spend public money to catch and destroy it. Same crab, opposite outcomes, and the reason is simply where it belongs.
          </p>

          <h2>1912, a German river and a ship's ballast tank</h2>
          <p>
            The first documented European record came from the river Aller in northern Germany in 1912. Nobody brought the crab on purpose. The accepted explanation is ballast water: ships took on water in Asian ports and pumped it out in European ones, and the larvae went with it. It is one of the earliest recorded cases of an aquatic invasive species in Europe.
          </p>

          <h2>How fast it went</h2>
          <p>
            After a quiet lag phase the numbers exploded. By 1936 attempts to remove the crab from German rivers were abandoned as hopeless. In that single year, 220 tonnes were pulled out of the river Weser alone. Individual crabs have been recorded 700 kilometres up the Elbe. The first British record came from the Thames drainage at Chelsea in 1935, and since the late 1980s the Thames population has grown sharply.
          </p>

          <h2>Why it causes damage</h2>
          <p>
            The crab digs burrows in banks and dikes. Enough burrows in one stretch and the bank starts to erode, drainage systems clog and flood risk rises. Add the eating: an omnivore competes with local species and thins out invertebrates and plants. Add the fishing gear: crabs get into nets and eel traps, eat the bait and damage the catch. In German waters alone the accumulated damage has been put at around 80 million euros.
          </p>

          <h2>Today: traps, projects and an awkward question</h2>
          <p>
            Populations are established in 18 of the 27 EU member states, and the species is on the EU list of invasive alien species of concern. In 2023 European researchers joined an EU-funded project to reduce numbers; so far the most effective tool has been a trap developed in Belgium. The crab has even turned up in the canals of Bruges. And here is the awkward part: captured crabs are destroyed, costs keep rising, and authorities have openly discussed whether the catch could instead be sold to Asia, where the animal is food rather than a pest.
          </p>

          <h2>Why the Far East is the opposite case</h2>
          <p>
            In the Amur estuary, in the rivers of Sakhalin and in Primorye this crab is native. It is part of the local system, not an intruder in it, and it is harvested as a commercial species: small-scale fishing in Primorye started in 1998 and the catch has long been exported to South East Asia. No one is fighting it here, because there is nothing to fight. The same animal that Europe traps and destroys is, in its home rivers, an ordinary seasonal resource.
          </p>

          <p>
            If you are new to the species, start with <Link to="/blog/chto-takoe-mohnatorukij-krab">what the hairy crab is</Link>, or read about its unusual life between river and sea in <Link to="/blog/mohnatorukij-krab-iz-reki-v-more">from river to sea</Link>. Live crab from Sakhalin is on the <Link to="/catalog/hairy-crab">product page</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            У этого вида две совершенно разные репутации. В Восточной Азии <strong>мохнаторукий краб</strong> ценный сезонный продукт. В Европе он в списке ста худших инвазивных видов мира, и страны тратят бюджетные деньги, чтобы его выловить и уничтожить. Краб один и тот же, итог противоположный, и вся разница в том, где он у себя дома.
          </p>

          <h2>1912 год, немецкая река и балластный танк</h2>
          <p>
            Первая задокументированная европейская находка это река Аллер на севере Германии, 1912 год. Никто краба туда не завозил специально. Общепринятое объяснение это балластная вода: суда набирали её в азиатских портах и сбрасывали в европейских, вместе с водой путешествовали личинки. Случай считается одним из самых ранних зафиксированных вторжений водного вида в Европе.
          </p>

          <h2>Как быстро всё пошло</h2>
          <p>
            После тихого периода численность рванула вверх. К 1936 году попытки вылавливать краба из немецких рек признали бесполезными и свернули. За один только тот год из реки Везер достали 220 тонн. Отдельные особи попадались в 700 километрах вверх по Эльбе. В Британии первая находка датируется 1935 годом, бассейн Темзы, район Челси, а с конца 1980-х темзенская популяция резко выросла.
          </p>

          <h2>Откуда берётся ущерб</h2>
          <p>
            Краб роет норы в берегах и дамбах. Достаточно плотно изрыть участок, и берег начинает осыпаться, дренаж забивается, риск подтопления растёт. Плюс питание: всеядный вид конкурирует с местными обитателями и выедает беспозвоночных и растительность. Плюс снасти: крабы лезут в сети и ловушки на угря, съедают наживку и портят улов. По немецким водоёмам накопленный ущерб оценивают примерно в 80 миллионов евро.
          </p>

          <h2>Сегодня: ловушки, проекты и неудобный вопрос</h2>
          <p>
            Устойчивые популяции есть в 18 из 27 стран Евросоюза, вид включён в европейский перечень инвазивных видов, вызывающих озабоченность. В 2023 году исследователи объединились в проект при финансировании ЕС, чтобы сократить численность, и самым действенным инструментом пока оказалась ловушка, разработанная в Бельгии. Краба находили даже в каналах Брюгге. Дальше начинается неудобная часть: пойманных крабов уничтожают, расходы растут, и власти открыто обсуждали, нельзя ли вместо этого продавать улов в Азию, где это животное еда, а не вредитель.
          </p>

          <h2>Почему у нас всё наоборот</h2>
          <p>
            В Амурском лимане, в реках Сахалина и в Приморье этот краб коренной вид. Он часть местной системы, а не пришелец в ней, и его добывают как промысловый объект: небольшой лов в Приморье ведётся с 1998 года, улов давно поставляют в Юго-Восточную Азию. С ним никто не борется, потому что бороться не с чем. То самое животное, которое Европа ловит и утилизирует, в родных реках просто сезонный ресурс.
          </p>

          <p>
            Если краб для вас новый, начните с материала <Link to="/blog/chto-takoe-mohnatorukij-krab">что такое мохнаторукий краб</Link>, а про его необычную жизнь между рекой и морем читайте в статье <Link to="/blog/mohnatorukij-krab-iz-reki-v-more">из реки в море</Link>. Живой краб с Сахалина на <Link to="/catalog/hairy-crab">странице товара</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabInEurope;
