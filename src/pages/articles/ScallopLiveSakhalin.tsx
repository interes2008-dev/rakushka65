import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import liveScallopImg from "@/assets/blog-scallop-live-hero.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ScallopLiveSakhalin = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Живой морской гребешок с Сахалина - почему это лучший выбор";
  const titleEn = "Live Sakhalin Sea Scallop - Why It's the Best Choice";
  const descRu = "Чем живой сахалинский гребешок отличается от заморозки: вкус, польза, логистика. Гид от Ракушка65.";
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
      seoTitle={isEn ? "Live Sakhalin Sea Scallop - Buy Direct from Supplier | Rakushka65" : "Живой морской гребешок с Сахалина - купить, цена | Ракушка65"}
      seoDescription={isEn ? "Live Sakhalin sea scallop: how it differs from frozen, how it's harvested, delivery across Russia. Buy live scallops directly from the supplier." : "Живой сахалинский морской гребешок: отличия от замороженного, способ добычи, доставка. Купить напрямую от поставщика."}
      breadcrumbName={isEn ? "Live Sea Scallop" : "Живой морской гребешок"}
      slug="zhivoj-morskoj-grebeshok-sahalin"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/src/assets/blog-scallop-live-hero.jpg"
      ogImageAlt={isEn ? "Live Sakhalin sea scallops in shells on ice" : "Живой морской гребешок с Сахалина в раковинах на льду"}
    >
      <img
        src={liveScallopImg}
        alt={isEn ? "Live Sakhalin sea scallop - fresh catch in shells" : "Живой морской гребешок с Сахалина - свежий улов в раковинах"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            <strong>Live sea scallop</strong> is the highest tier of this mollusk. Unlike its frozen or vacuum-packed counterpart, the live Sakhalin scallop preserves everything Michelin-starred chefs cherish: the crystalline sweetness of the adductor muscle, springy texture and the unmistakable "oceanic" freshness that simply cannot be faked. <strong>Rakushka65</strong> ships live scallops directly from the Sakhalin coast - from diver to your plate within 24-48 hours.
          </p>

          <h2>What "live" actually means</h2>

          <p>
            A scallop is considered live when it reaches the buyer in an undamaged shell, with an active muscle and a reflex response to external stimuli. The valves are slightly open - the mollusk is breathing, pumping water through the mantle. A light tap causes the shell to snap shut. This is the absolute marker of a living animal that has never been frozen or chemically treated.
          </p>

          <p>
            Sakhalin scallop (<em>Mizuhopecten yessoensis</em>) is the largest representative of the Pectinidae family in the north-western Pacific. Shell diameter - 12-20 cm, muscle weight - 60-120 g for an adult. These dimensions are achievable only in the cold, oxygen-rich waters of the Sea of Okhotsk, where the scallop grows for 3-5 years in its natural habitat.
          </p>

          <h2>Live vs frozen: 7 key differences</h2>

          <ul>
            <li><strong>Taste.</strong> The live scallop has a pronounced natural sweetness with notes of milk and the sea. Frozen loses up to 30% of flavor compounds during ice crystallization.</li>
            <li><strong>Texture.</strong> The live muscle is dense, silky, "springs" under the knife. After freezing, fiber structure breaks down - the flesh becomes loose and watery.</li>
            <li><strong>Raw consumption.</strong> Only live scallop can be eaten in carpaccio, sashimi, tartare, ceviche. Frozen - only after heat treatment.</li>
            <li><strong>Coral (roe).</strong> The live scallop has a bright orange, firm coral - a delicacy in itself. After freezing it darkens and loses shape.</li>
            <li><strong>Glaze and false weight.</strong> Frozen product often contains 10-30% ice and phosphates "for weight". Live scallop is 100% product.</li>
            <li><strong>Aroma.</strong> Live smells of fresh sea and cucumber. Frozen - neutral or slightly "fishy".</li>
            <li><strong>Documents.</strong> Live shipments come with veterinary certificate, an electronic Mercury (VetIS) record, and origin certificate. Frozen product often passes through 3-4 resellers.</li>
          </ul>

          <h2>How we deliver live scallops</h2>

          <p>
            Live mollusk logistics is a separate engineering challenge. Rakushka65 uses a three-stage viability protocol:
          </p>

          <ol>
            <li><strong>Coastal holding.</strong> After harvesting, scallops rest for 12-24 hours in flow-through cages with sea water at +2...+4 °C. They purge sediment and rebuild muscle glycogen.</li>
            <li><strong>Gel-ice packaging.</strong> Scallops are layered into thermo-boxes between damp kelp and gel-ice packs. Inside the box: stable +1...+3 °C for 72 hours.</li>
            <li><strong>Air freight.</strong> From Yuzhno-Sakhalinsk to Vladivostok, Khabarovsk, Moscow, Saint Petersburg, Yekaterinburg and Krasnodar - flights with controlled temperature regime. Time from pier to recipient: 24-48 hours.</li>
          </ol>

          <h2>Why specifically the Sakhalin live scallop</h2>

          <p>
            Sakhalin is one of the planet's best waters for wild Pacific scallop. Cold currents from the Kuril, East-Sakhalin and Okhotsk basins create ideal conditions:
          </p>

          <ul>
            <li><strong>Water temperature +2...+10 °C</strong> - the scallop grows slowly (3-5 years to market size) and accumulates maximum glycogen, amino acids and taurine.</li>
            <li><strong>Pristine waters.</strong> Sakhalin coastal zones are routinely tested by Rosselkhoznadzor; heavy-metal and microplastic levels are 2-3x lower than European norms.</li>
            <li><strong>Rich plankton.</strong> Cold upwellings bring nutrients from the seabed; the mollusk feeds on diverse phytoplankton - the foundation of its pronounced "oceanic" flavor.</li>
            <li><strong>Wild harvest.</strong> 90% of Sakhalin scallop is dive-harvested in the wild, not aquaculture. The flesh is denser, the coral brighter, the taste deeper.</li>
          </ul>

          <h2>Health benefits of live scallop</h2>

          <p>
            The muscle of a live Sakhalin scallop is top-tier dietary protein: 18-20 g protein per 100 g, only 88 kcal, minimal fat. Its nutrient profile stands out even among seafood:
          </p>

          <ul>
            <li><strong>Taurine (1.2 g / 100 g)</strong> - supports heart and vision.</li>
            <li><strong>Vitamin B12 (180% DV)</strong> - critical for nervous system and hematopoiesis.</li>
            <li><strong>Selenium, zinc, iodine</strong> - antioxidant defense and thyroid health.</li>
            <li><strong>Omega-3 (0.3 g)</strong> - anti-inflammatory effect.</li>
            <li><strong>Glycogen</strong> - fast energy without sugar spikes; valuable for athletes and high-metabolism diets.</li>
          </ul>

          <h2>Who should buy live scallops</h2>

          <ul>
            <li><strong>Chefs and restaurants</strong> - for carpaccio, sashimi, tartare, in-shell service.</li>
            <li><strong>Gourmets</strong> - to experience the product in its absolute form.</li>
            <li><strong>Quality-driven families</strong> - children and the elderly need maximally natural protein without phosphates.</li>
            <li><strong>Athletes and clean-eating enthusiasts</strong> - high-protein, low-calorie, nutrient-dense.</li>
          </ul>

          <h2>How to order</h2>

          <p>
            Order live scallops from the <Link to="/catalog/scallop">Sea Scallop</Link> page or contact our manager. Read also <Link to="/blog/kak-vybrat-grebeshok">how to choose quality scallops</Link> and <Link to="/blog/kak-prigotovit-grebeshok">how to cook them properly</Link>.
          </p>

          <p>
            <strong>Rakushka65</strong> - your gateway to genuine Sakhalin delicacies. No middlemen. No freezing. No compromises.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Живой морской гребешок</strong> - это элита среди моллюсков. В отличие от заморозки, живой сахалинский гребешок сохраняет то, за что его так любят шеф-повара: природную сладость, упругость и тот самый аромат океана. <strong>Ракушка65</strong> привозит его напрямую с Сахалина. От водолаза до вашего стола проходит всего 24-48 часов.
          </p>

          <h2>Что значит «живой» гребешок</h2>

          <p>
            Живой - значит в целой раковине, с активным мускулом и реакцией на внешние раздражители. Моллюск дышит, приоткрыв створки. Коснитесь их или постучите - раковина должна захлопнуться. Это главный признак того, что перед вами свежий продукт, который не видел химии или морозильной камеры.
          </p>

          <p>
            На Сахалине добывают вид <em>Mizuhopecten yessoensis</em>. Это настоящий гигант: раковина может быть до 20 см, а мускул весит под 100 граммов. Чтобы вырасти до таких размеров в ледяной воде Охотского моря, гребешку нужно 3-5 лет.
          </p>

          <h2>7 отличий живого от замороженного</h2>

          <ul>
            <li><strong>Вкус</strong>. Свежий гребешок сладковатый, сливочный. Заморозка «крадет» до трети вкуса.</li>
            <li><strong>Текстура</strong>. Живой мускул плотный и шелковистый. После разморозки он становится рыхлым.</li>
            <li><strong>Сыроедение</strong>. Только живой гребешок подходит для сашими и тартара. Замороженный нужно обязательно жарить или варить.</li>
            <li><strong>Икра (корал)</strong>. У свежего она ярко-оранжевая и упругая. При заморозке корал темнеет и теряет вид.</li>
            <li><strong>Честный вес</strong>. В заморозке бывает до 30% льда и фосфатов. Живой гребешок - это только чистый продукт.</li>
            <li><strong>Аромат</strong>. Пахнет свежим морем и даже огурцом. У заморозки запах нейтральный или специфический «рыбный».</li>
            <li><strong>Документы</strong>. Каждая живая партия идет с ветеринарным свидетельством и через систему «Меркурий». Вы точно знаете, откуда он приехал.</li>
          </ul>

          <h2>Как мы его везем</h2>

          <p>
            Доставить живого моллюска через всю страну - целая наука. В <strong>Ракушка65</strong> мы используем проверенную схему:
          </p>

          <ol>
            <li><strong>Передержка</strong>. После вылова гребешок сутки живет в садках с морской водой. Это помогает ему прийти в себя и очиститься.</li>
            <li><strong>Термоупаковка</strong>. Укладываем в коробки со свежими водорослями и льдом. Внутри держится температура +1-3 °C.</li>
            <li><strong>Самолет</strong>. Из Южно-Сахалинска груз летит в Москву, Питер и другие города рейсами с температурным контролем.</li>
          </ol>

          <h2>Почему именно Сахалин?</h2>

          <p>
            Здесь идеальные условия для дикого гребешка. Холодные течения Охотского моря делают свое дело:
          </p>

          <ul>
            <li><strong>Медленный рост</strong>. При температуре +2-10 °C моллюск копит полезные вещества годами.</li>
            <li><strong>Чистота</strong>. Акватории регулярно проверяются. Никаких заводов рядом, только чистый океан.</li>
            <li><strong>Дикий промысел</strong>. Мы не выращиваем гребешок на фермах. Это дикий продукт с мощным вкусом и плотным мясом.</li>
          </ul>

          <h2>Польза для здоровья</h2>

          <p>
            Мускул гребешка - это легкий белок: почти 20 г протеина и всего 88 ккал. В составе много ценных веществ:
          </p>

          <ul>
            <li><strong>Таурин</strong> - для сердца и зрения.</li>
            <li><strong>Витамин B12</strong> - рекордные дозы для нервной системы.</li>
            <li><strong>Минералы</strong> - селен, цинк и йод для щитовидки и иммунитета.</li>
            <li><strong>Омега-3</strong> - против воспалений.</li>
          </ul>

          <h2>Кому стоит попробовать</h2>

          <ul>
            <li><strong>Шеф-поварам</strong> - для сашими, тартара и красивой подачи в раковине.</li>
            <li><strong>Гурманам</strong> - чтобы узнать настоящий вкус океана.</li>
            <li><strong>Спортсменам</strong> - за максимум белка при минимуме калорий.</li>
            <li><strong>Всем, кто ценит качество</strong> - ведь натуральный дикий продукт всегда лучше.</li>
          </ul>

          <p>
            Заказать свежую партию можно в нашем <Link to="/catalog/scallop">каталоге</Link>. Посмотрите также наши советы, <Link to="/blog/kak-vybrat-grebeshok">как выбирать</Link> и <Link to="/blog/kak-prigotovit-grebeshok">как готовить</Link> гребешка правильно.
          </p>

          <p>
            <strong>Ракушка65</strong> - ваши прямые поставки с Сахалина. Без компромиссов.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default ScallopLiveSakhalin;
