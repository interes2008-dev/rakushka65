import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/crab-photo-1.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabHowToCook = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Как готовить мохнаторукого краба: пар против варки и почему нельзя сырым";
  const titleEn = "How to Cook Mitten Crab: Steam Beats Boiling, and Why Never Raw";
  const descRu = "Почему живого краба не бросают в кипяток, зачем пар вместо варки, сколько держать и при какой температуре. Разбор техники от поставщика.";
  const descEn = "Why a live crab never goes into boiling water, why steam beats boiling, how long to cook and at what temperature. Technique explained by a supplier.";

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
    name: isEn ? "How to steam a live mitten crab" : "Как приготовить живого мохнаторукого краба на пару",
    description: isEn
      ? "Steaming a river crab safely: cold start, steam instead of boiling, timing and the temperature that makes it safe."
      : "Безопасный пар для речного краба: холодный старт, пар вместо варки, время и температура прогрева.",
    totalTime: "PT25M",
    supply: [
      { "@type": "HowToSupply", name: isEn ? "Live mitten crab, 80-250 g a piece" : "Живой мохнаторукий краб, 80-250 г штука" },
      { "@type": "HowToSupply", name: isEn ? "Rice wine or dry white wine" : "Рисовое вино или сухое белое" },
      { "@type": "HowToSupply", name: isEn ? "Black vinegar, ginger, a pinch of sugar" : "Чёрный уксус, имбирь, щепотка сахара" },
    ],
    tool: [{ "@type": "HowToTool", name: isEn ? "Steamer" : "Пароварка" }],
    step: (isEn
      ? [
          ["Chill the crab", "Hold the crab in ice until it is dormant, or plan to start from cold water. A live crab dropped into boiling water sheds its claws and legs."],
          ["Prepare the steamer", "Pour water into the steamer and add rice wine or dry white wine. A slice of lemon or a few herbs take the edge off any river smell."],
          ["Steam through", "Steam 12 to 18 minutes depending on size, counted from proper steam. River crab must be cooked through: the parasite larvae die at 56 °C after 20 minutes or at 70 °C after 5 minutes."],
          ["Make the dip", "Grate ginger finely into black vinegar, add a pinch of sugar and warm the mixture gently."],
          ["Serve at once", "Serve hot with the warm dip and a pot of hot tea. This crab cools fast and loses a lot when it does."],
        ]
      : [
          ["Охладить краба", "Подержите краба во льду до оцепенения либо планируйте старт с холодной воды. Живой краб, брошенный в кипяток, сбрасывает клешни и ноги."],
          ["Подготовить пароварку", "Налейте воду в пароварку и добавьте рисовое вино или сухое белое. Долька лимона или пара веточек трав убирают речной запах."],
          ["Пропарить насквозь", "Держите на пару 12-18 минут в зависимости от размера, считая от нормального пара. Речного краба нужно прогревать полностью: личинки паразита гибнут при 56 °C через 20 минут или при 70 °C через 5 минут."],
          ["Сделать соус", "Натрите имбирь мелко в чёрный уксус, добавьте щепотку сахара и слегка подогрейте."],
          ["Подать сразу", "Подавайте горячим с тёплым соусом и чайником горячего чая. Краб быстро остывает и много при этом теряет."],
        ]
    ).map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "How to Cook Mitten Crab: Steaming, Boiling, Safety | Rakushka65" : "Как готовить мохнаторукого краба: пар, варка, безопасность | Ракушка65"}
      seoDescription={isEn ? "Steam instead of boiling, cold-water start so the crab keeps its legs, timing by size and the temperature that makes freshwater crab safe to eat." : "Пар вместо варки, старт с холодной воды, чтобы краб не сбросил ноги, время по размеру и температура, при которой пресноводный краб безопасен."}
      breadcrumbName={isEn ? "How to Cook" : "Как готовить"}
      slug="kak-gotovit-mohnatorukogo-kraba"
      jsonLd={[articleJsonLd, howToJsonLd]}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Live hairy crab, full top-down view" : "Живой мохнаторукий краб целиком, вид сверху"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Live hairy crab before cooking, top-down view" : "Живой мохнаторукий краб перед готовкой, вид сверху"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={900}
      />

      {isEn ? (
        <>
          <p>
            The <strong>mitten crab</strong> is a river crab, and that changes two things: how you cook it and how carefully you cook it. Neither rule is complicated, but both are easy to get wrong the first time.
          </p>

          <h2>The rule that comes first: cook it through</h2>
          <p>
            Freshwater crabs and crayfish can carry the larvae of a lung fluke. This is the one parasite risk associated with crustaceans, and it does not exist in marine species. The larvae die at 56 °C after 20 minutes, and at 70 °C after 5 minutes. In practice that means proper steaming or boiling right through to the centre. It also means the famous raw preparations, crab marinated in rice wine or soy, are not something we would recommend for a river crab, however traditional they are.
          </p>

          <h2>Never drop a live crab into boiling water</h2>
          <p>
            Do it and the crab sheds its claws and legs from shock. That is autotomy, a defence reflex, and it ruins the look of the dish and loses you the best parts. Two ways around it. Either start from cold water and bring it up gradually, or chill the crab first in ice, which makes it dormant before cooking.
          </p>

          <h2>Why steaming beats boiling</h2>
          <p>
            Boiling pulls flavour out of the crab and into the water. Steam keeps it inside the shell, which is why in Japan and China steaming is the default for this species. Add rice wine or dry white wine to the water in the steamer and the aroma carries into the crab. A slice of lemon or a few herbs in the pot take the edge off any river smell.
          </p>

          <h2>Timing</h2>
          <p>
            For a portion crab of 80 to 250 grams, steaming takes roughly 12 to 18 minutes depending on size, counted from the moment the steam is going properly. A bigger crab needs the upper end of that range. Underdone is not an option here, so if you are unsure, give it the extra couple of minutes rather than fewer.
          </p>

          <h2>What to serve with it</h2>
          <p>
            Keep it simple. The classic partner is a dip of black vinegar with finely grated ginger and a pinch of sugar, served warm. Heavy sauces do nothing for a crab this size. A pot of hot tea alongside is the traditional finish in Chinese restaurants.
          </p>

          <p>
            More on the species in <Link to="/blog/chto-takoe-mohnatorukij-krab">what the hairy crab is</Link> and in <Link to="/blog/yaponskiy-ili-kitayskiy-mohnatorukij-krab">Japanese or Chinese</Link>. Live crab from Sakhalin is on the <Link to="/catalog/hairy-crab">product page</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Мохнаторукий краб</strong> это речной краб, и из этого следуют две вещи: как его готовить и насколько внимательно. Оба правила несложные, но с первого раза их легко нарушить.
          </p>

          <h2>Правило номер один: прожаривать до конца</h2>
          <p>
            Пресноводные крабы и раки могут нести личинок лёгочного сосальщика. Это единственный паразитарный риск, связанный с ракообразными, и у морских видов его нет. Личинки гибнут при 56 °C через 20 минут и при 70 °C через 5 минут. На практике это значит: полноценный пар или варка, до прогрева в середине. Отсюда же вывод про знаменитые сырые заготовки, краба в рисовом вине или в соевом маринаде: для речного краба мы такое не рекомендуем, какой бы традиционной подача ни была.
          </p>

          <h2>Живого краба не бросают в кипяток</h2>
          <p>
            Бросите, и краб от шока сбросит клешни и ноги. Это автотомия, защитный рефлекс, и она портит и вид блюда, и самое ценное в нём. Обходов два. Либо начинать с холодной воды и поднимать температуру постепенно, либо сначала подержать краба во льду, тогда он впадает в оцепенение и готовится спокойно.
          </p>

          <h2>Почему пар лучше варки</h2>
          <p>
            При варке вкус уходит из краба в воду. Пар оставляет его внутри панциря, поэтому в Японии и Китае для этого вида пар давно считается основным способом. Добавьте в воду пароварки рисовое вино или сухое белое, и аромат перейдёт в краба. Долька лимона или пара веточек трав в кастрюле убирают речной запах, если он вас смущает.
          </p>

          <h2>Сколько держать</h2>
          <p>
            Для порционного краба на 80-250 граммов пар занимает примерно 12-18 минут в зависимости от размера, считая с момента, когда пар пошёл как следует. Крупному экземпляру нужен верх этого диапазона. Недодержать здесь нельзя, так что при сомнениях лучше добавить пару минут, чем убавить.
          </p>

          <h2>С чем подавать</h2>
          <p>
            Чем проще, тем лучше. Классическая пара это соус из чёрного уксуса с мелко натёртым имбирём и щепоткой сахара, подавать тёплым. Тяжёлые соусы крабу такого размера ничего не добавляют. В китайских ресторанах к нему традиционно ставят чайник горячего чая.
          </p>

          <p>
            Больше о виде в статьях <Link to="/blog/chto-takoe-mohnatorukij-krab">что такое мохнаторукий краб</Link> и <Link to="/blog/yaponskiy-ili-kitayskiy-mohnatorukij-krab">японский или китайский</Link>. Живой краб с Сахалина на <Link to="/catalog/hairy-crab">странице товара</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabHowToCook;
