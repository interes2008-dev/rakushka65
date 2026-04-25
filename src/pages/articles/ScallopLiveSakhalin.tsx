import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import liveScallopImg from "@/assets/blog-scallop-live-hero.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ScallopLiveSakhalin = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Живой морской гребешок с Сахалина — почему это лучший выбор";
  const titleEn = "Live Sakhalin Sea Scallop — Why It's the Best Choice";
  const descRu = "Чем живой сахалинский морской гребешок отличается от замороженного: вкус, текстура, польза, документы и логистика. Полный гид от Ракушка65.";
  const descEn = "How live Sakhalin sea scallop differs from frozen: taste, texture, health benefits, documents and direct delivery logistics. Complete guide by Rakushka65.";

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
    image: "https://rakushka65.ru/src/assets/blog-scallop-live-hero.jpg",
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "Live Sakhalin Sea Scallop — Buy Direct from Supplier | Rakushka65" : "Живой морской гребешок с Сахалина — купить, цена | Ракушка65"}
      seoDescription={isEn ? "Live Sakhalin sea scallop: how it differs from frozen, how it's harvested, delivery across Russia. Buy live scallops directly from the supplier." : "Живой сахалинский морской гребешок: чем отличается от замороженного, как добывают, доставка по России. Купить живой гребешок напрямую от поставщика."}
      breadcrumbName={isEn ? "Live Sea Scallop" : "Живой морской гребешок"}
      slug="zhivoj-morskoj-grebeshok-sahalin"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/src/assets/blog-scallop-live-hero.jpg"
      ogImageAlt={isEn ? "Live Sakhalin sea scallops in shells on ice" : "Живой морской гребешок с Сахалина в раковинах на льду"}
    >
      <img
        src={liveScallopImg}
        alt={isEn ? "Live Sakhalin sea scallop — fresh catch in shells" : "Живой морской гребешок с Сахалина — свежий улов в раковинах"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            <strong>Live sea scallop</strong> is the highest tier of this mollusk. Unlike its frozen or vacuum-packed counterpart, the live Sakhalin scallop preserves everything Michelin-starred chefs cherish: the crystalline sweetness of the adductor muscle, springy texture and the unmistakable "oceanic" freshness that simply cannot be faked. <strong>Rakushka65</strong> ships live scallops directly from the Sakhalin coast — from diver to your plate within 24–48 hours.
          </p>

          <h2>What "live" actually means</h2>

          <p>
            A scallop is considered live when it reaches the buyer in an undamaged shell, with an active muscle and a reflex response to external stimuli. The valves are slightly open — the mollusk is breathing, pumping water through the mantle. A light tap causes the shell to snap shut. This is the absolute marker of a living animal that has never been frozen or chemically treated.
          </p>

          <p>
            Sakhalin scallop (<em>Mizuhopecten yessoensis</em>) is the largest representative of the Pectinidae family in the north-western Pacific. Shell diameter — 12–20 cm, muscle weight — 60–120 g for an adult. These dimensions are achievable only in the cold, oxygen-rich waters of the Sea of Okhotsk, where the scallop grows for 3–5 years in its natural habitat.
          </p>

          <h2>Live vs frozen: 7 key differences</h2>

          <ul>
            <li><strong>Taste.</strong> The live scallop has a pronounced natural sweetness with notes of milk and the sea. Frozen loses up to 30% of flavor compounds during ice crystallization.</li>
            <li><strong>Texture.</strong> The live muscle is dense, silky, "springs" under the knife. After freezing, fiber structure breaks down — the flesh becomes loose and watery.</li>
            <li><strong>Raw consumption.</strong> Only live scallop can be eaten in carpaccio, sashimi, tartare, ceviche. Frozen — only after heat treatment.</li>
            <li><strong>Coral (roe).</strong> The live scallop has a bright orange, firm coral — a delicacy in itself. After freezing it darkens and loses shape.</li>
            <li><strong>Glaze and false weight.</strong> Frozen product often contains 10–30% ice and phosphates "for weight". Live scallop is 100% product.</li>
            <li><strong>Aroma.</strong> Live smells of fresh sea and cucumber. Frozen — neutral or slightly "fishy".</li>
            <li><strong>Documents.</strong> Live shipments come with veterinary certificate, an electronic Mercury (VetIS) record, and origin certificate. Frozen product often passes through 3–4 resellers.</li>
          </ul>

          <h2>How we deliver live scallops</h2>

          <p>
            Live mollusk logistics is a separate engineering challenge. Rakushka65 uses a three-stage viability protocol:
          </p>

          <ol>
            <li><strong>Coastal holding.</strong> After harvesting, scallops rest for 12–24 hours in flow-through cages with sea water at +2…+4 °C. They purge sediment and rebuild muscle glycogen.</li>
            <li><strong>Gel-ice packaging.</strong> Scallops are layered into thermo-boxes between damp kelp and gel-ice packs. Inside the box: stable +1…+3 °C for 72 hours.</li>
            <li><strong>Air freight.</strong> From Yuzhno-Sakhalinsk to Vladivostok, Khabarovsk, Moscow, Saint Petersburg, Yekaterinburg and Krasnodar — flights with controlled temperature regime. Time from pier to recipient: 24–48 hours.</li>
          </ol>

          <h2>Why specifically the Sakhalin live scallop</h2>

          <p>
            Sakhalin is one of the planet's best waters for wild Pacific scallop. Cold currents from the Kuril, East-Sakhalin and Okhotsk basins create ideal conditions:
          </p>

          <ul>
            <li><strong>Water temperature +2…+10 °C</strong> — the scallop grows slowly (3–5 years to market size) and accumulates maximum glycogen, amino acids and taurine.</li>
            <li><strong>Pristine waters.</strong> Sakhalin coastal zones are routinely tested by Rosselkhoznadzor; heavy-metal and microplastic levels are 2–3× lower than European norms.</li>
            <li><strong>Rich plankton.</strong> Cold upwellings bring nutrients from the seabed; the mollusk feeds on diverse phytoplankton — the foundation of its pronounced "oceanic" flavor.</li>
            <li><strong>Wild harvest.</strong> 90% of Sakhalin scallop is dive-harvested in the wild, not aquaculture. The flesh is denser, the coral brighter, the taste deeper.</li>
          </ul>

          <h2>Health benefits of live scallop</h2>

          <p>
            The muscle of a live Sakhalin scallop is top-tier dietary protein: 18–20 g protein per 100 g, only 88 kcal, minimal fat. The composition is unique even among seafood:
          </p>

          <ul>
            <li><strong>Taurine (1.2 g / 100 g)</strong> — supports heart and vision.</li>
            <li><strong>Vitamin B12 (180% DV)</strong> — critical for nervous system and hematopoiesis.</li>
            <li><strong>Selenium, zinc, iodine</strong> — antioxidant defense and thyroid health.</li>
            <li><strong>Omega-3 (0.3 g)</strong> — anti-inflammatory effect.</li>
            <li><strong>Glycogen</strong> — fast energy without sugar spikes; valuable for athletes and high-metabolism diets.</li>
          </ul>

          <h2>Who should buy live scallops</h2>

          <ul>
            <li><strong>Chefs and restaurants</strong> — for carpaccio, sashimi, tartare, in-shell service.</li>
            <li><strong>Gourmets</strong> — to experience the product in its absolute form.</li>
            <li><strong>Quality-driven families</strong> — children and the elderly need maximally natural protein without phosphates.</li>
            <li><strong>Athletes and clean-eating enthusiasts</strong> — high-protein, low-calorie, nutrient-dense.</li>
          </ul>

          <h2>How to order</h2>

          <p>
            Order live scallops from the <Link to="/catalog/scallop">Sea Scallop</Link> page or contact our manager. Read also <Link to="/blog/kak-vybrat-grebeshok">how to choose quality scallops</Link> and <Link to="/blog/kak-prigotovit-grebeshok">how to cook them properly</Link>.
          </p>

          <p>
            <strong>Rakushka65</strong> — your gateway to genuine Sakhalin delicacies. No middlemen. No freezing. No compromises.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Живой морской гребешок</strong> — высшая категория этого моллюска. В отличие от замороженного или вакуумированного аналога, живой сахалинский гребешок сохраняет всё то, за что его ценят шефы мишленовских ресторанов: кристальную сладость мускула, упругую текстуру и ту самую «океаническую» свежесть, которую невозможно подделать. <strong>Ракушка65</strong> поставляет живого гребешка напрямую с побережья Сахалина — от рыбака до вашего стола за 24–48 часов.
          </p>

          <h2>Что значит «живой» гребешок</h2>

          <p>
            Живым считается гребешок, который попадает к покупателю в неповреждённой раковине, с активным мускулом и реакцией на внешние раздражители. Створки слегка приоткрыты — моллюск дышит, прокачивая воду через мантию. При прикосновении или лёгком постукивании раковина рефлекторно смыкается. Это абсолютный признак того, что перед вами живой моллюск, не подвергавшийся заморозке или химической обработке.
          </p>

          <p>
            Сахалинский гребешок (<em>Mizuhopecten yessoensis</em>) — крупнейший представитель семейства Pectinidae в северо-западной Пацифике. Диаметр раковины — 12–20 см, вес мускула — 60–120 г у взрослой особи. Эти параметры достижимы только в холодных, насыщенных кислородом водах Охотского моря, где гребешок растёт 3–5 лет в естественной среде.
          </p>

          <h2>Живой vs замороженный: 7 ключевых отличий</h2>

          <ul>
            <li><strong>Вкус.</strong> Живой гребешок имеет выраженную природную сладость с нотами молока и моря. Замороженный теряет до 30% вкусовых соединений при кристаллизации воды.</li>
            <li><strong>Текстура.</strong> Мускул живого моллюска плотный, шелковистый, «пружинит» под ножом. После заморозки структура волокон нарушается — мякоть становится рыхлой, водянистой.</li>
            <li><strong>Возможность сырого употребления.</strong> Только живой гребешок можно есть в карпаччо, сашими, тартаре, севиче. Замороженный — исключительно после термообработки.</li>
            <li><strong>Икра (корал).</strong> У живого гребешка ярко-оранжевый, упругий корал — деликатес сам по себе. После заморозки он темнеет и теряет форму.</li>
            <li><strong>Глазировка и довес.</strong> Замороженный продукт часто содержит 10–30% льда и фосфатов «для веса». Живой гребешок — это 100% продукта.</li>
            <li><strong>Аромат.</strong> Живой пахнет свежим морем и огурцом. Замороженный — нейтральный или с лёгкой «рыбной» нотой.</li>
            <li><strong>Документы.</strong> Живая поставка сопровождается ветеринарным свидетельством формы № 4, выпиской ВетИС «Меркурий», сертификатом происхождения. Замороженный продукт нередко идёт через 3–4 перекупщиков.</li>
          </ul>

          <h2>Как мы доставляем живого гребешка</h2>

          <p>
            Логистика живого моллюска — отдельная инженерная задача. Ракушка65 использует трёхступенчатую схему сохранения жизнеспособности:
          </p>

          <ol>
            <li><strong>Передержка на побережье.</strong> После добычи гребешок 12–24 часа отдыхает в проточных садках с морской водой при +2…+4 °C. За это время моллюск очищается, восстанавливает гликоген в мускуле.</li>
            <li><strong>Упаковка с гель-льдом.</strong> Гребешка укладывают в термокороб слоями, перекладывая влажными морскими водорослями (ламинарией) и пакетами гель-аккумуляторов холода. Внутри коробки — стабильные +1…+3 °C на 72 часа.</li>
            <li><strong>Авиадоставка.</strong> Из Южно-Сахалинска во Владивосток, Хабаровск, Москву, Санкт-Петербург, Екатеринбург, Краснодар — рейсами с фиксированным температурным режимом. Срок «от выгрузки на пирс до получателя» — 24–48 часов.</li>
          </ol>

          <h2>Чем хорош именно сахалинский живой гребешок</h2>

          <p>
            Сахалин — одна из лучших на планете акваторий для дикого приморского гребешка. Холодные течения Курильского, Восточно-Сахалинского и Охотоморского бассейнов создают идеальные условия:
          </p>

          <ul>
            <li><strong>Температура воды +2…+10 °C</strong> — гребешок растёт медленно (3–5 лет до товарного размера) и накапливает максимум гликогена, аминокислот, таурина.</li>
            <li><strong>Чистота акватории.</strong> Прибрежные зоны Сахалина регулярно проверяются Россельхознадзором; уровень тяжёлых металлов и микропластика — ниже европейских норм в 2–3 раза.</li>
            <li><strong>Богатый планктон.</strong> Холодные апвеллинги поднимают со дна питательные вещества, и моллюск получает разнообразный фитопланктон — основу его выраженного «морского» вкуса.</li>
            <li><strong>Дикий промысел.</strong> 90% сахалинского гребешка — это водолазная добыча в дикой среде, а не аквакультура. Мясо плотнее, корал ярче, вкус глубже.</li>
          </ul>

          <h2>Польза живого гребешка</h2>

          <p>
            Мускул живого сахалинского гребешка — это диетическое мясо высшей категории: 18–20 г белка на 100 г, всего 88 ккал, минимум жира. Состав уникален даже среди морепродуктов:
          </p>

          <ul>
            <li><strong>Таурин (1,2 г / 100 г)</strong> — поддерживает работу сердца и зрения.</li>
            <li><strong>Витамин B12 (180% суточной нормы)</strong> — критичен для нервной системы и кроветворения.</li>
            <li><strong>Селен, цинк, йод</strong> — антиоксидантная защита и здоровье щитовидной железы.</li>
            <li><strong>Омега-3 (0,3 г)</strong> — противовоспалительный эффект.</li>
            <li><strong>Гликоген</strong> — быстрая энергия без скачков сахара, важно для спортсменов и людей с ускоренным метаболизмом.</li>
          </ul>

          <h2>Кому стоит покупать живого гребешка</h2>

          <ul>
            <li><strong>Шефам и ресторанам</strong> — для карпаччо, сашими, тартара, сервировки в раковине.</li>
            <li><strong>Гурманам</strong> — чтобы попробовать продукт в его абсолютной форме.</li>
            <li><strong>Семьям, ценящим качество</strong> — детям и пожилым людям нужен максимально натуральный белок без фосфатов.</li>
            <li><strong>Спортсменам и тем, кто на ПП</strong> — высокобелковый, низкокалорийный продукт.</li>
          </ul>

          <h2>Как заказать</h2>

          <p>
            Закажите живого гребешка на странице <Link to="/catalog/scallop">«Морской гребешок»</Link> или свяжитесь с нашим менеджером. Подробнее о том, <Link to="/blog/kak-vybrat-grebeshok">как выбрать качественный гребешок</Link> и <Link to="/blog/kak-prigotovit-grebeshok">как его правильно приготовить</Link>, читайте в наших экспертных гидах.
          </p>

          <p>
            <strong>Ракушка65</strong> — ваш проводник в мир настоящих сахалинских деликатесов. Без посредников. Без заморозки. Без компромиссов.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default ScallopLiveSakhalin;
