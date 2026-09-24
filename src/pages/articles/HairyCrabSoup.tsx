import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/crab-photo-3.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabSoup = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Кани-маки-дзиру: японский суп, в котором краба толкут вместе с панцирем";
  const titleEn = "Kani-maki-jiru: The Japanese Soup Where the Crab Is Crushed, Shell and All";
  const descRu = "Деревенский рецепт из Миядзаки: краба разбивают целиком, процеживают и варят густой суп на мисо. Плюс приём с заморозкой, который усиливает вкус.";
  const descEn = "A country recipe from Miyazaki: the whole crab is crushed, strained and simmered into a rich miso soup. Plus the freezing trick that deepens the flavour.";

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

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    inLanguage: isEn ? "en" : "ru",
    name: isEn ? "Kani-maki-jiru: mitten crab soup" : "Кани-маки-дзиру: суп из мохнаторукого краба",
    description: isEn
      ? "The whole crab is frozen, crushed with its shell, strained and simmered with miso."
      : "Краба замораживают, толкут вместе с панцирем, процеживают и варят с мисо.",
    totalTime: "PT3H30M",
    supply: [
      { "@type": "HowToSupply", name: isEn ? "Live mitten crab" : "Живой мохнаторукий краб" },
      { "@type": "HowToSupply", name: isEn ? "Miso paste" : "Паста мисо" },
      { "@type": "HowToSupply", name: isEn ? "Spring onion" : "Зелёный лук" },
    ],
    tool: [
      { "@type": "HowToTool", name: isEn ? "Mortar or heavy pestle" : "Ступка или тяжёлый пестик" },
      { "@type": "HowToTool", name: isEn ? "Fine sieve or cloth" : "Мелкое сито или ткань" },
    ],
    step: (isEn
      ? [
          ["Freeze the crab", "Freeze the crab solid, a few hours. Ice ruptures the cell walls so the extract comes out far more readily."],
          ["Clean it", "Rinse the crab and remove the gills."],
          ["Crush it", "Crush the crab, shell and all, in a mortar until you have a coarse paste."],
          ["Strain", "Add cold water, stir and strain through a fine sieve or cloth so no shell fragments remain."],
          ["Simmer", "Heat gently at first so the flavour dissolves out, then bring it up and simmer to concentrate. A real simmer also makes river crab safe."],
          ["Finish", "Season with miso to taste and scatter spring onion over the bowls."],
        ]
      : [
          ["Заморозить краба", "Заморозьте краба насквозь, несколько часов. Лёд рвёт клеточные стенки, и экстракт выходит гораздо охотнее."],
          ["Почистить", "Промойте краба и удалите жабры."],
          ["Растолочь", "Растолките краба вместе с панцирем в ступке до грубой массы."],
          ["Процедить", "Влейте холодную воду, размешайте и процедите через мелкое сито или ткань, чтобы не осталось осколков панциря."],
          ["Уварить", "Нагревайте сначала слабо, чтобы вкус растворился, затем доведите и уваривайте. Нормальное кипение заодно делает речного краба безопасным."],
          ["Заправить", "Заправьте мисо по вкусу и посыпьте зелёным луком."],
        ]
    ).map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "Kani-maki-jiru: Japanese Mitten Crab Soup Recipe | Rakushka65" : "Кани-маки-дзиру: японский суп из мохнаторукого краба | Ракушка65"}
      seoDescription={isEn ? "The crab is crushed with its shell, strained and simmered with miso. A regional Japanese dish with local variants, plus the freezing trick for a deeper broth." : "Краба разбивают вместе с панцирем, процеживают и варят с мисо. Региональное японское блюдо, его варианты и приём с заморозкой для густого бульона."}
      breadcrumbName={isEn ? "Kani-maki-jiru" : "Кани-маки-дзиру"}
      slug="sup-iz-mohnatorukogo-kraba"
      jsonLd={[articleJsonLd, howToJsonLd]}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Hairy crab close-up before cooking" : "Мохнаторукий краб крупным планом перед готовкой"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Hairy crab close-up on the scale platform before cooking" : "Мохнаторукий краб крупным планом на площадке весов перед готовкой"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={900}
      />

      {isEn ? (
        <>
          <p>
            In Japan the mitten crab is called mokuzugani, and the most interesting way to eat it is not on a plate at all. It is a soup in which the crab is crushed whole, shell included, then strained and simmered. The dish is called <strong>kani-maki-jiru</strong>, and it comes from Kitagō in Miyazaki Prefecture. Neighbouring regions have their own versions: gan-jiru in Ōita, tsugani-jiru in Kōchi.
          </p>

          <h2>The idea</h2>
          <p>
            A small river crab does not give you much meat, so nobody tries to pick it. Instead the whole animal goes into the pot as flavour. Crushing the shell releases everything the crab has, the liquid is strained, and what you get is a broth with a depth that no crab meat on its own will give you.
          </p>

          <h2>The freezing trick</h2>
          <p>
            Japanese home cooks freeze the crab solid before making the soup. The reason is physical: water inside the cells expands as it freezes and ruptures the cell walls, so the extract comes out far more readily when you crush and simmer. Allow a few hours for the crab to freeze right through.
          </p>

          <h2>How it is made</h2>
          <ul>
            <li>Freeze the crab through, then rinse it and remove the gills.</li>
            <li>Crush the crab, shell and all, in a mortar or with a heavy pestle until you have a coarse paste.</li>
            <li>Add cold water, stir, and strain through a fine sieve or cloth so no shell fragments remain.</li>
            <li>Heat the strained liquid gently at first, so the flavour dissolves out, then bring it up and simmer to concentrate it.</li>
            <li>Finish with miso to taste and scatter spring onion over the bowls.</li>
          </ul>

          <h2>The safety part</h2>
          <p>
            Because this is a river crab, the soup has to be properly simmered, not merely warmed. The lung fluke larvae that freshwater crabs can carry die at 56 °C after 20 minutes or at 70 °C after 5 minutes, so a real simmer covers it. Freezing alone is a flavour technique, not a substitute for heat.
          </p>

          <h2>Where else it goes</h2>
          <p>
            The same principle, crab crushed with the shell, is used for miso-based crab soups across Japan, and the French would recognise it: this is essentially how a bisque is built. In Japan the crab also goes into ramen broth, which is a good hint if you want something less traditional.
          </p>

          <p>
            Basic technique for the same crab is in <Link to="/blog/kak-gotovit-mohnatorukogo-kraba">how to cook mitten crab</Link>, the Chinese way of serving it in <Link to="/blog/shanhajskaya-podacha-mohnatorukogo-kraba">the Shanghai style</Link>. Live crab is on the <Link to="/catalog/hairy-crab">product page</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            В Японии мохнаторукого краба называют мокудзугани, и самый интересный способ его съесть вообще не подразумевает тарелки с крабом. Это суп, в котором краба разбивают целиком, вместе с панцирем, потом процеживают и варят. Блюдо называется <strong>кани-маки-дзиру</strong> и происходит из городка Китаго в префектуре Миядзаки. У соседних регионов свои версии: ган-дзиру в Оите, цугани-дзиру в Коти.
          </p>

          <h2>В чём идея</h2>
          <p>
            С мелкого речного краба много мяса не возьмёшь, поэтому его никто и не выбирает. Вместо этого животное целиком идёт в котёл как вкус. Раздавленный панцирь отдаёт всё, что в крабе есть, жидкость процеживают, и получается бульон такой глубины, какой одно крабовое мясо не даст никогда.
          </p>

          <h2>Приём с заморозкой</h2>
          <p>
            Японские хозяйки перед варкой замораживают краба до твёрдого состояния. Причина физическая: вода внутри клеток при замерзании расширяется и рвёт клеточные стенки, поэтому при дроблении и варке экстракт выходит гораздо охотнее. На полную заморозку закладывайте несколько часов.
          </p>

          <h2>Как готовят</h2>
          <ul>
            <li>Заморозить краба насквозь, затем промыть и удалить жабры.</li>
            <li>Растолочь краба вместе с панцирем в ступке или тяжёлым пестиком до грубой массы.</li>
            <li>Влить холодную воду, размешать и процедить через мелкое сито или ткань, чтобы не осталось осколков панциря.</li>
            <li>Нагревать процеженную жидкость сначала на слабом огне, чтобы вкус растворился, потом довести и уваривать до густоты.</li>
            <li>В конце заправить мисо по вкусу и посыпать зелёным луком.</li>
          </ul>

          <h2>Про безопасность</h2>
          <p>
            Краб речной, поэтому суп нужно именно проваривать, а не подогревать. Личинки лёгочного сосальщика, которых могут нести пресноводные крабы, гибнут при 56 °C через 20 минут или при 70 °C через 5 минут, так что нормальное кипение вопрос закрывает. Заморозка здесь приём для вкуса, а не замена нагреву.
          </p>

          <h2>Куда этот приём годится ещё</h2>
          <p>
            Тот же принцип, краб растолчённый вместе с панцирем, используют для мисо-супов по всей Японии, и француз узнал бы в нём знакомое: примерно так строится биск. В Японии этого краба пускают и в бульон для рамена, что неплохая подсказка, если хочется чего-то менее традиционного.
          </p>

          <p>
            Базовая техника по тому же крабу в статье <Link to="/blog/kak-gotovit-mohnatorukogo-kraba">как готовить мохнаторукого краба</Link>, китайская подача в материале <Link to="/blog/shanhajskaya-podacha-mohnatorukogo-kraba">шанхайская классика</Link>. Живой краб на <Link to="/catalog/hairy-crab">странице товара</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabSoup;
