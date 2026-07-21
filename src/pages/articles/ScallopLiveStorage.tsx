import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import liveScallopImg from "@/assets/blog-scallop-live-storage.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ScallopLiveStorage = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Как хранить живого морского гребешка дома - пошаговая инструкция";
  const titleEn = "How to Store Live Sea Scallops at Home - Step-by-Step Guide";
  const descRu = "Сроки и условия хранения живого сахалинского гребешка, признаки свежести и частые ошибки. Гид от Ракушка65.";
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
      seoTitle={isEn ? "How to Store Live Sea Scallop at Home - Shelf Life | Rakushka65" : "Как хранить живого морского гребешка дома - сроки и условия | Ракушка65"}
      seoDescription={isEn ? "Detailed guide: how long and at what temperature to store live Sakhalin scallop, how to extend freshness, signs of spoilage and food safety." : "Инструкция: сколько и как хранить живого сахалинского гребешка, как продлить свежесть, признаки порчи."}
      breadcrumbName={isEn ? "Storing Live Scallop" : "Хранение живого гребешка"}
      slug="kak-hranit-zhivogo-grebeshka"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/src/assets/blog-scallop-live-storage.jpg"
      ogImageAlt={isEn ? "Live sea scallops on ice - proper storage" : "Живые морские гребешки на льду - правильное хранение"}
    >
      <img
        src={liveScallopImg}
        alt={isEn ? "Live Sakhalin scallop - home storage rules" : "Живой сахалинский гребешок - правила хранения дома"}
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
            The most common buyer mistake is dropping live scallops into a bowl of fresh or even salted water "to keep them alive longer". This kills the mollusk in 2-4 hours. Scallops are marine organisms adapted to stable salinity (30-34 ‰) and temperatures of +2...+6 °C. Tap water - or an incorrectly mixed brine - causes osmotic shock.
          </p>

          <p>
            The correct method is cold storage in a humid environment that mimics holding-tank conditions.
          </p>

          <h2>Step-by-step instructions</h2>

          <ol>
            <li><strong>Unbox immediately.</strong> Open the thermo-box and inspect the mollusks. Valves should be slightly open or close when tapped.</li>
            <li><strong>Quick rinse with cold running water.</strong> 15-20 seconds, no soaking. Goal: remove sand and seaweed from the shell.</li>
            <li><strong>Place in a container.</strong> Use a perforated tray or a container with drainage holes - shells should sit cup-down so internal moisture is retained.</li>
            <li><strong>Cover with damp cotton cloth.</strong> A towel or cheesecloth soaked in cold salted water (1 tbsp salt per 1 L). The cloth keeps the mantle moist.</li>
            <li><strong>Refrigerate.</strong> Best zone: bottom shelf or vegetable drawer. Temperature +2...+4 °C, never freezer.</li>
            <li><strong>Refresh the cloth daily.</strong> Rinse in cold salted water, wring out, return.</li>
          </ol>

          <h2>Shelf life</h2>

          <ul>
            <li><strong>Live in shell</strong> - up to 5 days at +2...+4 °C with proper care.</li>
            <li><strong>Shucked muscle (fresh)</strong> - up to 48 hours at 0...+2 °C in a sealed container on ice.</li>
            <li><strong>Flash-frozen</strong> - up to 6 months at -18 °C. Freeze right after shucking, single layer.</li>
            <li><strong>Thawed scallop</strong> - use within 24 hours, refreezing not allowed.</li>
          </ul>

          <h2>Freshness vs spoilage signs</h2>

          <p><strong>Fresh live scallop:</strong></p>

          <ul>
            <li>Valves open 2-5 mm, close when tapped</li>
            <li>Muscle glossy, cream-white, slightly moist</li>
            <li>Coral bright orange, firm</li>
            <li>Aroma: fresh sea, cucumber, slight sweetness</li>
            <li>Mantle reacts to touch - moves</li>
          </ul>

          <p><strong>Signs of spoilage - discard:</strong></p>

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
            <li>Freezer for 1-2 hours (flash-freezing at -18...-25 °C).</li>
            <li>Transfer frozen muscles to vacuum or zip bags, expel air.</li>
            <li>Label with date. Shelf life - 6 months.</li>
          </ol>

          <p>
            <strong>Thaw only in the fridge</strong> (12-16 hours). Never in water, microwave or at room temperature: this destroys protein structure and activates bacteria.
          </p>

          <h2>FAQ</h2>

          <p>
            <strong>Can I store scallops on ice?</strong> Yes, but never submerged in melt water. Place shells above a drainage layer with ice underneath. Refresh ice every 12 hours.
          </p>

          <p>
            <strong>What if some mollusks died in transit?</strong> Open the shell: if the muscle is firm, color natural and smell fresh - it's safe for cooking (pan-fry, grill, soup). Any spoilage signs - discard.
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
            Живой сахалинский гребешок - продукт капризный. То, как вы с ним поступите в первые часы после доставки, определит и вкус, и безопасность вашего ужина. <strong>Ракушка65</strong> подготовила простую инструкцию, чтобы ваши моллюски оставались свежими до 5 дней.
          </p>

          <h2>Главное правило: никакой воды</h2>

          <p>
            Часто покупатели кладут гребешков в миску с водой, чтобы те «пожили подольше». Это роковая ошибка. Пресная вода из-под крана убивает моллюска за пару часов. Соленая вода, если ее неправильно развести, тоже может вызвать шок.
          </p>

          <p>
            Правильный вариант - хранить гребешков на холоде во влажной среде.
          </p>

          <h2>Пошаговая инструкция</h2>

          <ol>
            <li><strong>Распаковка</strong>. Сразу откройте коробку и проверьте моллюсков. Створки могут быть чуть открыты, но при легком ударе должны закрываться.</li>
            <li><strong>Промывка</strong>. Быстро сполосните раковины под холодной струей воды (секунд 15-20). Это уберет лишний песок. Не замачивайте!</li>
            <li><strong>Укладка</strong>. Возьмите лоток с дырочками или контейнер. Кладите раковины «чашечкой» вниз, чтобы они не теряли влагу.</li>
            <li><strong>Влажная ткань</strong>. Накройте их мокрым полотенцем. Лучше смочить его в соленой воде (ложка соли на литр). Это имитирует морскую влажность.</li>
            <li><strong>Холодильник</strong>. Ставьте на нижнюю полку или в ящик для овощей. Идеально - около +2-4 °C.</li>
            <li><strong>Уход</strong>. Раз в день смачивайте полотенце заново.</li>
          </ol>

          <h2>Сроки хранения</h2>

          <ul>
            <li><strong>В раковине</strong>: до 5 суток в холодильнике при правильном уходе.</li>
            <li><strong>Очищенный мускул</strong>: до 48 часов при температуре около нуля.</li>
            <li><strong>Заморозка</strong>: до 6 месяцев при -18 °C. Морозьте сразу после очистки, выложив мускулы в один слой.</li>
            <li><strong>Размороженный</strong>: нужно съесть за сутки, второй раз морозить нельзя.</li>
          </ul>

          <h2>Свежий или испорченный?</h2>

          <p><strong>У свежего гребешка:</strong></p>

          <ul>
            <li>Раковина реагирует на касание - закрывается.</li>
            <li>Мускул белый или кремовый, блестит.</li>
            <li>Корал (икра) яркий и плотный.</li>
            <li>Запах - море и свежий огурец.</li>
          </ul>

          <p><strong>Признаки порчи (такое есть нельзя):</strong></p>

          <ul>
            <li>Раковина широко открыта и не реагирует на стук.</li>
            <li>Мясо стало серым или желтоватым.</li>
            <li>Появился резкий рыбный или аммиачный запах.</li>
            <li>Внутри раковины много слизи или мутной воды.</li>
          </ul>

          <h2>Как заморозить гребешков</h2>

          <p>
            Если заказали много и не успеваете съесть - лучше заморозить. Вот как это сделать правильно:
          </p>

          <ol>
            <li>Разделайте моллюсков, достаньте мускул и корал.</li>
            <li>Сполосните соленой водой и обсушите полотенцем.</li>
            <li>Разложите на доске в один слой и уберите в морозилку на пару часов.</li>
            <li>Когда они замерзнут, переложите в плотный пакет, уберите воздух.</li>
            <li>Напишите дату. Храните до полугода.</li>
          </ol>

          <p>
            <strong>Размораживайте только в холодильнике</strong>. Никакой горячей воды - это разрушит структуру белка и испортит вкус.
          </p>

          <h2>Ответы на вопросы</h2>

          <p>
            <strong>Можно ли класть на лед?</strong> Да, но не давайте им плавать в талой воде. Используйте лоток с дренажом.
          </p>

          <p>
            <strong>Что если гребешок погиб в пути?</strong> Если мускул упругий и пахнет свежестью, его можно готовить (жарить или в суп). Если есть сомнения - лучше выбросить.
          </p>

          <p>
            Почитайте наши гиды, чтобы знать, <Link to="/blog/kak-vybrat-grebeshok">как выбирать</Link> и <Link to="/blog/kak-prigotovit-grebeshok">как готовить</Link> эти деликатесы. Свежую партию всегда можно заказать в <Link to="/catalog/scallop">каталоге</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default ScallopLiveStorage;
