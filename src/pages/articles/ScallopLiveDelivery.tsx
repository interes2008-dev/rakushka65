import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import liveScallopImg from "@/assets/blog-scallop-live-delivery.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ScallopLiveDelivery = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Доставка живого морского гребешка с Сахалина по России — как это работает";
  const titleEn = "Live Sakhalin Sea Scallop Delivery Across Russia — How It Works";
  const descRu = "Как Ракушка65 доставляет живого сахалинского гребешка в Москву, СПб и регионы: логистика, сроки, упаковка, документы и гарантии.";
  const descEn = "How Rakushka65 delivers live Sakhalin scallop to Moscow, St Petersburg and the regions: logistics, lead times, packaging, documents and guarantees.";

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
    image: "https://rakushka65.ru/src/assets/blog-scallop-live-delivery.jpg",
  };

  return (
    <ArticleLayout
      title={isEn ? titleEn : titleRu}
      seoTitle={isEn ? "Live Sakhalin Sea Scallop Delivery to Moscow & Regions | Rakushka65" : "Доставка живого гребешка с Сахалина в Москву и регионы | Ракушка65"}
      seoDescription={isEn ? "How we deliver live Sakhalin sea scallops across Russia: packaging, 24–48h transit, temperature control, Mercury (VetIS) documents, guarantees." : "Как мы доставляем живого сахалинского морского гребешка по России: упаковка, сроки 24–48 часов, температурный режим, документы Меркурий, гарантии."}
      breadcrumbName={isEn ? "Live Scallop Delivery" : "Доставка живого гребешка"}
      slug="dostavka-zhivogo-grebeshka-rossiya"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/src/assets/blog-scallop-live-delivery.jpg"
      ogImageAlt={isEn ? "Live Sakhalin sea scallop delivery across Russia" : "Доставка живого морского гребешка с Сахалина по России"}
    >
      <img
        src={liveScallopImg}
        alt={isEn ? "Live Sakhalin sea scallop — delivery across Russia" : "Живой сахалинский морской гребешок — доставка по России"}
        className="w-full rounded-xl mb-8"
        width={1200}
        height={800}
      />

      {isEn ? (
        <>
          <p>
            Delivering a live mollusk 7,000+ km from the Sea of Okhotsk shore to Moscow, Saint Petersburg or Krasnodar is a task only a handful of suppliers in Russia can solve. <strong>Rakushka65</strong> has refined this chain to Swiss-watch precision: every live Sakhalin scallop reaches the customer with verified temperature record, full document package and a brand-new replacement guarantee.
          </p>

          <h2>The full route: from diver to your kitchen</h2>

          <h3>Stage 1. Harvest (day 0)</h3>

          <p>
            Sakhalin scallops are dive-harvested in the coastal zone of the Sea of Okhotsk and Aniva Bay. A vessel's working day is 4–6 morning hours. Each mollusk is inspected on deck: damaged, undersized or sick specimens are returned to the sea. This is a certified harvest under Federal Fishery Agency quotas.
          </p>

          <h3>Stage 2. Holding (day 0–1)</h3>

          <p>
            The catch is delivered to a coastal holding cage — a tank of flow-through sea water at +2…+4 °C. Here the mollusk spends 12–24 hours purging sand from its mantle and rebuilding glycogen after harvest stress. Without this stage live shipping is impossible — the scallop won't make the trip.
          </p>

          <h3>Stage 3. Sorting and packaging (day 1)</h3>

          <p>Each mollusk passes hand selection:</p>

          <ul>
            <li>Tap test on the valve — reflex check</li>
            <li>Calibration by size (12–15 cm, 15–18 cm, 18+ cm)</li>
            <li>Layered into thermo-boxes between sheets of kelp</li>
            <li>Gel-ice packs around the box perimeter</li>
            <li>Internal temperature logger in every box (report on request after delivery)</li>
          </ul>

          <h3>Stage 4. Air freight (day 1–2)</h3>

          <p>
            From Yuzhno-Sakhalinsk the boxes ship on direct Aeroflot, S7 or Aurora flights to hub cities: Moscow (Sheremetyevo / Domodedovo), Saint Petersburg (Pulkovo), Vladivostok, Khabarovsk, Novosibirsk. The cargo is declared as "fresh seafood" with priority loading and a fixed +2…+5 °C temperature regime in the hold.
          </p>

          <h3>Stage 5. Last mile (day 2)</h3>

          <p>
            In Moscow and Saint Petersburg — our own courier with thermo-bag. In the regions — partner express services (CDEK Express, DPD, local operators) with mandatory cold-chain compliance. From airport to your door: no more than 6–12 hours.
          </p>

          <h2>Delivery times by city</h2>

          <ul>
            <li><strong>Moscow, Saint Petersburg</strong> — 24–36 hours from dispatch</li>
            <li><strong>Vladivostok, Khabarovsk</strong> — 12–18 hours</li>
            <li><strong>Yekaterinburg, Novosibirsk, Kazan</strong> — 36–48 hours</li>
            <li><strong>Krasnodar, Rostov-on-Don, Sochi</strong> — 36–48 hours</li>
            <li><strong>Kaliningrad, Murmansk</strong> — 48–60 hours (via Moscow)</li>
          </ul>

          <h2>Documents you receive</h2>

          <ol>
            <li><strong>Veterinary certificate (Form №4)</strong> with Rosselkhoznadzor stamp</li>
            <li><strong>Mercury (VetIS) electronic record</strong> — full traceability from diver to recipient</li>
            <li><strong>Declaration of conformity TR EAEU 040/2016</strong> "On safety of fish and fish products"</li>
            <li><strong>Certificate of origin</strong> with the harvest area</li>
            <li><strong>Bill of lading</strong> and invoice</li>
          </ol>

          <p>
            The full document package makes our scallop legally suitable for restaurants, hotels, catering and retail networks.
          </p>

          <h2>Minimum order and pricing</h2>

          <ul>
            <li><strong>Retail</strong> — fixed city tariff for delivery</li>
            <li><strong>HoReCa and wholesale</strong> — from 30 kg, individual price and logistics</li>
            <li><strong>Recurring shipments</strong> — weekly flights, 10%+ discount</li>
          </ul>

          <p>
            Current prices are listed in the catalog and depend on season, mollusk size and destination city.
          </p>

          <h2>Live-arrival guarantee</h2>

          <p>
            If more than 10% of the batch arrives dead (no reflex on tapping, valves wide open, off-smell), we refund 100% of the defective portion or ship a replacement on the next flight. This is fixed in our public offer.
          </p>

          <p>
            Condition — photo and video evidence on opening the box in the courier's presence within 30 minutes of delivery.
          </p>

          <h2>How to place an order</h2>

          <ol>
            <li>Open the <Link to="/catalog/scallop">Sea Scallop</Link> catalog page.</li>
            <li>Pick size and quantity, submit the request.</li>
            <li>Manager calls back within an hour to confirm date and exact delivery time.</li>
            <li>Dispatch — next morning flight from Yuzhno-Sakhalinsk.</li>
            <li>Receipt — inspection with the courier and signed documents.</li>
          </ol>

          <p>
            Want to learn more? Read our guide <Link to="/blog/zhivoj-morskoj-grebeshok-sahalin">"Live Sakhalin Sea Scallop"</Link>, the article <Link to="/blog/kak-hranit-zhivogo-grebeshka">on home storage</Link> and our <Link to="/blog/kak-prigotovit-grebeshok">chef recipes</Link>.
          </p>

          <p>
            <strong>Rakushka65</strong> — direct supplier of live Sakhalin seafood. No middlemen, no freezing, full traceability.
          </p>
        </>
      ) : (
        <>
          <p>
            Доставить живого моллюска за 7000+ км от берега Охотского моря в Москву, Санкт-Петербург или Краснодар — задача, которую могут решить единицы поставщиков в России. <strong>Ракушка65</strong> отработал эту цепочку до уровня швейцарской логистики: каждый живой сахалинский гребешок попадает к клиенту с подтверждённым температурным режимом, полным пакетом документов и гарантией возврата при браке.
          </p>

          <h2>Полный маршрут: от водолаза до вашей кухни</h2>

          <h3>Этап 1. Добыча (день 0)</h3>

          <p>
            Сахалинский гребешок добывается водолазным методом в прибрежной зоне Охотского моря и залива Анива. Рабочий день судна — 4–6 часов утренних работ. Каждый моллюск осматривается на палубе: повреждённые, мелкие или больные особи возвращаются в море. Это сертифицированный промысел с квотами Росрыболовства.
          </p>

          <h3>Этап 2. Передержка (день 0–1)</h3>

          <p>
            Улов доставляется в береговой садок — резервуар с проточной морской водой при +2…+4 °C. Здесь моллюск 12–24 часа очищает мантию от песка и восстанавливает гликоген после стресса добычи. Без этого этапа живая поставка невозможна — гребешок не доедет.
          </p>

          <h3>Этап 3. Сортировка и упаковка (день 1)</h3>

          <p>Каждый моллюск проходит ручной отбор:</p>

          <ul>
            <li>Постукивание по створке — проверка рефлекса</li>
            <li>Калибровка по размеру (12–15 см, 15–18 см, 18+ см)</li>
            <li>Укладка в термокороба слоями ламинарии</li>
            <li>Гель-аккумуляторы холода по периметру короба</li>
            <li>Внутренний термодатчик в каждом коробе (по запросу — отчёт после доставки)</li>
          </ul>

          <h3>Этап 4. Авиаперевозка (день 1–2)</h3>

          <p>
            Из Южно-Сахалинска короба отправляются прямыми рейсами «Аэрофлота», S7 или «Авроры» в города-хабы: Москва (Шереметьево/Домодедово), Санкт-Петербург (Пулково), Владивосток, Хабаровск, Новосибирск. Грузы оформляются как «свежие морепродукты» с приоритетом погрузки и фиксированным температурным режимом +2…+5 °C в багажном отсеке.
          </p>

          <h3>Этап 5. «Последняя миля» (день 2)</h3>

          <p>
            В Москве и СПб — собственный курьер с термосумкой. В регионы — партнёрские службы экспресс-доставки (СДЭК Express, DPD, локальные операторы) с обязательным сохранением холодовой цепи. От аэропорта до вашей двери — не более 6–12 часов.
          </p>

          <h2>Сроки доставки по городам</h2>

          <ul>
            <li><strong>Москва, Санкт-Петербург</strong> — 24–36 часов от момента отправки</li>
            <li><strong>Владивосток, Хабаровск</strong> — 12–18 часов</li>
            <li><strong>Екатеринбург, Новосибирск, Казань</strong> — 36–48 часов</li>
            <li><strong>Краснодар, Ростов-на-Дону, Сочи</strong> — 36–48 часов</li>
            <li><strong>Калининград, Мурманск</strong> — 48–60 часов (через Москву)</li>
          </ul>

          <h2>Документы, которые вы получите</h2>

          <ol>
            <li><strong>Ветеринарное свидетельство формы № 4</strong> с отметкой Россельхознадзора</li>
            <li><strong>Выписка ВетИС «Меркурий»</strong> — электронная прослеживаемость партии от водолаза до получателя</li>
            <li><strong>Декларация соответствия ТР ЕАЭС 040/2016</strong> «О безопасности рыбы и рыбной продукции»</li>
            <li><strong>Сертификат происхождения</strong> с указанием района промысла</li>
            <li><strong>Товарно-транспортная накладная</strong> и счёт-фактура</li>
          </ol>

          <p>
            Полный пакет документов делает наш гребешок легально пригодным для использования в ресторанах, отелях, кейтеринге и розничных сетях.
          </p>

          <h2>Минимальная партия и цены</h2>

          <ul>
            <li><strong>Розница</strong> — доставка по фиксированному тарифу города</li>
            <li><strong>HoReCa и опт</strong> — от 30 кг, индивидуальная цена и логистика</li>
            <li><strong>Регулярные поставки</strong> — еженедельные рейсы, скидка от 10%</li>
          </ul>

          <p>
            Актуальную цену уточняйте в каталоге — она зависит от сезона, размера моллюска и города доставки.
          </p>

          <h2>Гарантия живой поставки</h2>

          <p>
            Если более 10% моллюсков в партии прибыли мёртвыми (без рефлекса при постукивании, с раскрытыми створками и характерным запахом), мы возвращаем 100% стоимости брака или досылаем замену следующим рейсом. Это закреплено в публичной оферте.
          </p>

          <p>
            Условие — фото- и видеофиксация при вскрытии короба в присутствии курьера в течение 30 минут после доставки.
          </p>

          <h2>Как сделать заказ</h2>

          <ol>
            <li>Перейдите в каталог <Link to="/catalog/scallop">«Морской гребешок»</Link>.</li>
            <li>Выберите размер и количество, оставьте заявку.</li>
            <li>Менеджер свяжется в течение часа, согласует дату и точное время доставки.</li>
            <li>Отправка — ближайшим утренним рейсом из Южно-Сахалинска.</li>
            <li>Получение — с проверкой при курьере и оформлением документов.</li>
          </ol>

          <p>
            Хотите узнать больше о продукте? Прочитайте наш гид <Link to="/blog/zhivoj-morskoj-grebeshok-sahalin">«Живой морской гребешок с Сахалина»</Link>, статью <Link to="/blog/kak-hranit-zhivogo-grebeshka">о хранении дома</Link> и подборку <Link to="/blog/kak-prigotovit-grebeshok">рецептов от шеф-поваров</Link>.
          </p>

          <p>
            <strong>Ракушка65</strong> — прямой поставщик живых сахалинских морепродуктов. Без посредников, без заморозки, с полной прослеживаемостью.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default ScallopLiveDelivery;
