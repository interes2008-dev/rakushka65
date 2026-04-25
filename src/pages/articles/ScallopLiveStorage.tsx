import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import liveScallopImg from "@/assets/blog-scallop-live-storage.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ScallopLiveStorage = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Как хранить живого морского гребешка дома — пошаговая инструкция";
  const titleEn = "How to Store Live Sea Scallops at Home — Step-by-Step Guide";
  const descRu = "Сроки и температура хранения живого сахалинского гребешка, признаки свежести, ошибки покупателей. Гид от Ракушка65.";
  const descEn = "Shelf life and temperature for storing live Sakhalin sea scallop, freshness signs and buyer mistakes. Guide by Rakushka65.";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: isEn ? "en" : "ru",
    headline: isEn ? titleEn : titleRu,
    description: isEn ? descEn : descRu,
    datePublished: "2026-04-25",
    dateModified: "2026-04-25",
    author: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
    publisher: { "@type": "Organization", name: isEn ? "Rakushka65" : "Ракушка65" },
    image: "https://rakushka65.ru/src/assets/blog-scallop-live-storage.jpg",
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "How to Store Live Sea Scallop at Home — Shelf Life | Rakushka65" : "Как хранить живого морского гребешка дома — сроки и условия | Ракушка65"}
      seoDescription={isEn ? "Detailed guide: how long and at what temperature to store live Sakhalin scallop, how to extend freshness, signs of spoilage and food safety." : "Подробная инструкция: сколько и при какой температуре хранить живого сахалинского гребешка, как продлить свежесть, признаки порчи, безопасность."}
      breadcrumbName={isEn ? "Storing Live Scallop" : "Хранение живого гребешка"}
      slug="kak-hranit-zhivogo-grebeshka"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/src/assets/blog-scallop-live-storage.jpg"
      ogImageAlt={isEn ? "Live sea scallops on ice — proper storage" : "Живые морские гребешки на льду — правильное хранение"}
    >
      <img
        src={liveScallopImg}
        alt={isEn ? "Live Sakhalin scallop — home storage rules" : "Живой сахалинский гребешок — правила хранения дома"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            Live Sakhalin sea scallop is a delicate product. How you store it during the first hours after delivery determines both flavor and food safety. This step-by-step guide from <strong>Rakushka65</strong> will help you keep mollusks fresh for up to 5 days without quality loss.
          </p>

          <h2>Rule #1: do NOT submerge scallops in water</h2>

          <p>
            The most common buyer mistake is dropping live scallops into a bowl of fresh or even salted water "to keep them alive longer". This kills the mollusk in 2–4 hours. Scallops are marine organisms adapted to stable salinity (30–34 ‰) and temperatures of +2…+6 °C. Tap water — or an incorrectly mixed brine — causes osmotic shock.
          </p>

          <p>
            The correct method is cold storage in a humid environment that mimics holding-tank conditions.
          </p>

          <h2>Step-by-step instructions</h2>

          <ol>
            <li><strong>Unbox immediately.</strong> Open the thermo-box and inspect the mollusks. Valves should be slightly open or close when tapped.</li>
            <li><strong>Quick rinse with cold running water.</strong> 15–20 seconds, no soaking. Goal: remove sand and seaweed from the shell.</li>
            <li><strong>Place in a container.</strong> Use a perforated tray or a container with drainage holes — shells should sit cup-down so internal moisture is retained.</li>
            <li><strong>Cover with damp cotton cloth.</strong> A towel or cheesecloth soaked in cold salted water (1 tbsp salt per 1 L). The cloth keeps the mantle moist.</li>
            <li><strong>Refrigerate.</strong> Best zone: bottom shelf or vegetable drawer. Temperature +2…+4 °C, never freezer.</li>
            <li><strong>Refresh the cloth daily.</strong> Rinse in cold salted water, wring out, return.</li>
          </ol>

          <h2>Shelf life</h2>

          <ul>
            <li><strong>Live in shell</strong> — up to 5 days at +2…+4 °C with proper care.</li>
            <li><strong>Shucked muscle (fresh)</strong> — up to 48 hours at 0…+2 °C in a sealed container on ice.</li>
            <li><strong>Flash-frozen</strong> — up to 6 months at −18 °C. Freeze right after shucking, single layer.</li>
            <li><strong>Thawed scallop</strong> — use within 24 hours, refreezing not allowed.</li>
          </ul>

          <h2>Freshness vs spoilage signs</h2>

          <p><strong>Fresh live scallop:</strong></p>

          <ul>
            <li>Valves open 2–5 mm, close when tapped</li>
            <li>Muscle glossy, cream-white, slightly moist</li>
            <li>Coral bright orange, firm</li>
            <li>Aroma: fresh sea, cucumber, slight sweetness</li>
            <li>Mantle reacts to touch — moves</li>
          </ul>

          <p><strong>Signs of spoilage — discard:</strong></p>

          <ul>
            <li>Shell wide open and unresponsive to tapping</li>
            <li>Muscle gray, yellowish or with greenish patches</li>
            <li>Sour, ammonia-like or putrid smell</li>
            <li>Mucus, cloudy liquid in the shell</li>
            <li>Flabby, "spreading" flesh texture</li>
          </ul>

          <h2>How to freeze live scallops correctly</h2>

          <p>
            If you received a large batch and can't eat it all, freezing is the best long-term option. Procedure:
          </p>

          <ol>
            <li>Open the shells, gently detach the muscle and coral with a knife.</li>
            <li>Rinse with cold salted water, pat dry with paper towel.</li>
            <li>Spread muscles in a single layer on a parchment-lined tray.</li>
            <li>Freezer for 1–2 hours (flash-freezing at −18…−25 °C).</li>
            <li>Transfer frozen muscles to vacuum or zip bags, expel air.</li>
            <li>Label with date. Shelf life — 6 months.</li>
          </ol>

          <p>
            <strong>Thaw only in the fridge</strong> (12–16 hours). Never in water, microwave or at room temperature: this destroys protein structure and activates bacteria.
          </p>

          <h2>FAQ</h2>

          <p>
            <strong>Can I store scallops on ice?</strong> Yes, but never submerged in melt water. Place shells above a drainage layer with ice underneath. Refresh ice every 12 hours.
          </p>

          <p>
            <strong>What if some mollusks died in transit?</strong> Open the shell: if the muscle is firm, color natural and smell fresh — it's safe for cooking (pan-fry, grill, soup). Any spoilage signs — discard.
          </p>

          <p>
            <strong>Can I store them next to other seafood?</strong> Yes, but in separate containers to prevent flavor mixing.
          </p>

          <p>
            Read also <Link to="/blog/kak-vybrat-grebeshok">how to choose quality scallops</Link>, <Link to="/blog/kak-prigotovit-grebeshok">how to cook them</Link> and why <Link to="/blog/zhivoj-morskoj-grebeshok-sahalin">live Sakhalin scallop</Link> is the best choice. Order a fresh batch from the <Link to="/catalog/scallop">catalog</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            Живой сахалинский морской гребешок — деликатный продукт. От того, как вы его храните в первые часы после получения, зависит и вкус, и безопасность блюда. Эта пошаговая инструкция от <strong>Ракушка65</strong> поможет сохранить моллюска свежим до 5 суток без потери качества.
          </p>

          <h2>Правило №1: НЕ кладите гребешка в воду</h2>

          <p>
            Самая частая ошибка покупателей — поместить живого гребешка в миску с пресной или даже подсоленной водой «чтобы пожил подольше». Это убивает моллюска за 2–4 часа. Гребешок — морской организм, привыкший к стабильной солёности 30–34 ‰ и температуре +2…+6 °C. Домашняя вода из-под крана или неправильно приготовленный солевой раствор вызывают осмотический шок.
          </p>

          <p>
            Правильный способ — холодное хранение во влажной среде, имитирующей условия садка.
          </p>

          <h2>Пошаговая инструкция</h2>

          <ol>
            <li><strong>Распакуйте.</strong> Сразу после получения откройте термокороб, оцените состояние моллюсков. Створки должны быть слегка приоткрыты или закрываться при постукивании.</li>
            <li><strong>Промойте холодной проточной водой.</strong> Быстро, 15–20 секунд, не замачивая. Цель — убрать песок и водоросли с раковины.</li>
            <li><strong>Уложите в контейнер.</strong> Используйте перфорированный лоток или контейнер с дренажными отверстиями — раковины должны лежать «чашечкой вниз», чтобы внутренняя влага не вытекала.</li>
            <li><strong>Накройте влажной хлопковой тканью.</strong> Полотенце или марля, смоченные в холодной подсоленной воде (1 ст. л. соли на 1 л). Ткань поддерживает влажность мантии.</li>
            <li><strong>Поставьте в холодильник.</strong> Идеальная зона — нижняя полка или ящик для овощей. Температура +2…+4 °C, никогда не в морозилку.</li>
            <li><strong>Меняйте ткань раз в сутки.</strong> Споласкивайте в холодной солёной воде, отжимайте, кладите обратно.</li>
          </ol>

          <h2>Сроки хранения</h2>

          <ul>
            <li><strong>Живой в раковине</strong> — до 5 суток при +2…+4 °C при правильном уходе.</li>
            <li><strong>Очищенный мускул (свежий)</strong> — до 48 часов при 0…+2 °C, в герметичном контейнере на льду.</li>
            <li><strong>Шоковая заморозка</strong> — до 6 месяцев при −18 °C. Замораживайте сразу после очистки, разложив мускулы в один слой.</li>
            <li><strong>Размороженный гребешок</strong> — употребить в течение 24 часов, повторная заморозка недопустима.</li>
          </ul>

          <h2>Признаки свежести и порчи</h2>

          <p><strong>Свежий живой гребешок:</strong></p>

          <ul>
            <li>Створки приоткрыты на 2–5 мм, при постукивании смыкаются</li>
            <li>Мускул блестящий, кремово-белый, слегка влажный</li>
            <li>Корал ярко-оранжевый, упругий</li>
            <li>Запах — свежее море, огурец, лёгкая сладость</li>
            <li>Мантия реагирует на касание — шевелится</li>
          </ul>

          <p><strong>Признаки порчи — продукт не использовать:</strong></p>

          <ul>
            <li>Раковина широко раскрыта и не закрывается при постукивании</li>
            <li>Мускул серый, желтоватый или с зеленоватыми пятнами</li>
            <li>Кислый, аммиачный или гнилостный запах</li>
            <li>Слизь, мутная жидкость в раковине</li>
            <li>Дряблая, «расползающаяся» текстура мяса</li>
          </ul>

          <h2>Как заморозить живого гребешка правильно</h2>

          <p>
            Если вы получили большую партию и не успеваете съесть, заморозка — лучший способ сохранить продукт надолго. Технология:
          </p>

          <ol>
            <li>Откройте раковины, аккуратно отделите мускул и корал ножом.</li>
            <li>Промойте холодной подсоленной водой, обсушите бумажным полотенцем.</li>
            <li>Разложите мускулы в один слой на доске или подносе, застеленном пергаментом.</li>
            <li>Поставьте в морозилку на 1–2 часа (шоковая заморозка при −18…−25 °C).</li>
            <li>Переложите замороженные мускулы в вакуумные пакеты или зип-пакеты, удалив воздух.</li>
            <li>Подпишите дату. Срок хранения — 6 месяцев.</li>
          </ol>

          <p>
            <strong>Размораживайте только в холодильнике</strong> (12–16 часов). Никогда — в воде, микроволновке или при комнатной температуре: это нарушает структуру белка и активирует бактерии.
          </p>

          <h2>Частые вопросы</h2>

          <p>
            <strong>Можно ли хранить гребешка во льду?</strong> Да, но не погружать в талую воду. Уложите раковины поверх дренажа, под который налит лёд. Меняйте лёд раз в 12 часов.
          </p>

          <p>
            <strong>Что делать, если часть моллюсков погибла в дороге?</strong> Откройте раковину: если мускул упругий, цвет естественный, запах свежий — продукт пригоден к термообработке (жарка, гриль, суп). Если есть малейшие признаки порчи — выбросить.
          </p>

          <p>
            <strong>Можно ли хранить рядом с другими морепродуктами?</strong> Да, но в отдельных контейнерах, чтобы запахи не смешивались.
          </p>

          <p>
            Подробнее о том, как <Link to="/blog/kak-vybrat-grebeshok">выбрать качественного гребешка</Link>, <Link to="/blog/kak-prigotovit-grebeshok">как его приготовить</Link> и почему <Link to="/blog/zhivoj-morskoj-grebeshok-sahalin">живой сахалинский гребешок</Link> — лучший выбор, читайте в наших гидах. Заказать свежую партию можно на странице <Link to="/catalog/scallop">каталога</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default ScallopLiveStorage;
