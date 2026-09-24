import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/crab-photo-6.webp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HairyCrabShanghaiStyle = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Шанхайская классика: краб на пару с соусом из чёрного уксуса и имбиря";
  const titleEn = "The Shanghai Classic: Steamed Crab with Black Vinegar and Ginger";
  const descRu = "Как подают мохнаторукого краба в Китае: пар, тёплый соус на чёрном уксусе, порядок разбора. И почему «пьяного краба» лучше обойти стороной.";
  const descEn = "How the mitten crab is served in China: steam, a warm black vinegar dip, the order of eating. And why drunken crab is best avoided.";

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
      seoTitle={isEn ? "Shanghai Style Mitten Crab: Steam and Black Vinegar Dip | Rakushka65" : "Шанхайская подача мохнаторукого краба: пар и чёрный уксус | Ракушка65"}
      seoDescription={isEn ? "The Chinese way with mitten crab: steaming, a warm dip of black vinegar, ginger and sugar, hot tea alongside, and why raw drunken crab is a risk." : "Китайская подача мохнаторукого краба: пар, тёплый соус из чёрного уксуса с имбирём и сахаром, горячий чай и почему сырой «пьяный краб» рискован."}
      breadcrumbName={isEn ? "The Shanghai Classic" : "Шанхайская классика"}
      slug="shanhajskaya-podacha-mohnatorukogo-kraba"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/og-hairy-crab.jpg"
      ogImageAlt={isEn ? "Hairy crab shell and legs up close" : "Панцирь и ноги мохнаторукого краба вблизи"}
    >
      <img
        src={heroImg}
        alt={isEn ? "Hairy crab shell and walking legs up close" : "Панцирь и ходильные ноги мохнаторукого краба вблизи"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={900}
      />

      {isEn ? (
        <>
          <p>
            In China this crab is a seasonal event, and the way it is served has barely changed in generations. No complicated cooking, no heavy sauces. Steam, a small bowl of dark vinegar, hot tea. The whole point is to stay out of the crab's way.
          </p>

          <h2>The dip</h2>
          <p>
            The classic partner is Chinkiang black vinegar with ginger. Grate the ginger finely, stir it into the vinegar with a pinch of sugar, and warm the mixture gently. Do not serve it cold: warm vinegar softens the sharpness and works better with a hot crab. Some cooks add a splash of soy or a little rice wine, but the base is always vinegar and ginger.
          </p>

          <h2>The crab itself</h2>
          <p>
            Steam it, do not boil it, so the flavour stays in the shell. Rice wine in the steamer water is a common touch. Twelve to eighteen minutes for a portion crab, counted from proper steam. Serve immediately, because this crab cools fast and loses a lot when it does.
          </p>

          <h2>The order of eating</h2>
          <p>
            There is a traditional sequence, and it is not ceremony for its own sake. Start with the body, open the shell, work through the meat with a small spoon. Then the walking legs, which keep their texture longest. The claws come last because they take the most effort. In China a set of small tools is often laid out for this; a nutcracker and a teaspoon do the same job.
          </p>

          <h2>Why hot tea</h2>
          <p>
            Tea is served throughout, and it is not decoration. A rich crab goes down better with something hot and slightly astringent, and warm ginger tea is the usual choice at the end of the meal. In restaurants a bowl of warm water with a slice of lemon is also brought out, for hands rather than for drinking.
          </p>

          <h2>About drunken crab</h2>
          <p>
            You will read about a famous Chinese preparation in which live crab is marinated in Shaoxing wine and eaten raw. It is genuinely traditional and it is genuinely risky with a river crab: freshwater crabs can carry lung fluke larvae, which only heat removes. We would not recommend it. If you want the wine aroma, put the rice wine in the steamer water instead and get the same note without the risk.
          </p>

          <p>
            Technique in detail is in <Link to="/blog/kak-gotovit-mohnatorukogo-kraba">how to cook mitten crab</Link>, the Japanese soup in <Link to="/blog/sup-iz-mohnatorukogo-kraba">kani-maki-jiru</Link>. Live crab from Sakhalin is on the <Link to="/catalog/hairy-crab">product page</Link>, wholesale terms on the <Link to="/opt/mohnatorukij-krab">wholesale page</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            В Китае этот краб сезонное событие, и способ его подачи почти не менялся поколениями. Никакой сложной готовки и тяжёлых соусов. Пар, мисочка тёмного уксуса, горячий чай. Весь смысл в том, чтобы не мешать крабу.
          </p>

          <h2>Соус</h2>
          <p>
            Классическая пара это чжэньцзянский чёрный уксус с имбирём. Имбирь натрите мелко, размешайте в уксусе со щепоткой сахара и слегка подогрейте. Холодным не подавайте: тёплый уксус смягчает резкость и лучше работает с горячим крабом. Некоторые добавляют каплю соевого соуса или немного рисового вина, но основа всегда уксус и имбирь.
          </p>

          <h2>Сам краб</h2>
          <p>
            Готовьте на пару, а не отваривайте, тогда вкус остаётся в панцире. Рисовое вино в воду пароварки обычный приём. Двенадцать-восемнадцать минут для порционного краба, считая от нормального пара. Подавайте сразу: этот краб быстро остывает и много при этом теряет.
          </p>

          <h2>Порядок разбора</h2>
          <p>
            Есть традиционная последовательность, и она не ради церемонии. Начинают с тела: вскрывают панцирь и выбирают маленькой ложкой. Дальше ходильные ноги, они дольше всех держат текстуру. Клешни оставляют напоследок, потому что с ними больше всего возни. В Китае для этого подают набор мелких инструментов, но щипцы для орехов и чайная ложка справляются не хуже.
          </p>

          <h2>Зачем горячий чай</h2>
          <p>
            Чай наливают на протяжении всей трапезы, и это не украшение. Плотный краб легче идёт с чем-то горячим и слегка вяжущим, а в конце обычно подают тёплый имбирный чай. В ресторанах приносят ещё и пиалу тёплой воды с долькой лимона, но она для рук, а не для питья.
          </p>

          <h2>Про «пьяного краба»</h2>
          <p>
            Вам наверняка попадётся знаменитый китайский способ, когда живого краба маринуют в шаосинском вине и едят сырым. Он действительно традиционный и действительно рискованный для речного краба: пресноводные крабы могут нести личинок лёгочного сосальщика, а убирает их только нагрев. Мы такое не советуем. Если хочется винной ноты, влейте рисовое вино в воду пароварки, получите тот же оттенок без риска.
          </p>

          <p>
            Подробно про технику в статье <Link to="/blog/kak-gotovit-mohnatorukogo-kraba">как готовить мохнаторукого краба</Link>, японский суп в материале <Link to="/blog/sup-iz-mohnatorukogo-kraba">кани-маки-дзиру</Link>. Живой краб с Сахалина на <Link to="/catalog/hairy-crab">странице товара</Link>, условия опта на <Link to="/opt/mohnatorukij-krab">оптовой странице</Link>.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default HairyCrabShanghaiStyle;
