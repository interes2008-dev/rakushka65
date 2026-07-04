import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";
import liveScallopImg from "@/assets/blog-scallop-live-delivery.jpg";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ScallopLiveDelivery = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const titleRu = "Доставка живого морского гребешка с Сахалина по России - как это работает";
  const titleEn = "Live Sakhalin Sea Scallop Delivery Across Russia — How It Works";
  const descRu = "Как Ракушка65 доставляет живого сахалинского гребешка в Москву, СПб и регионы: логистика, сроки, упаковка и гарантии.";
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
      seoDescription={isEn ? "How we deliver live Sakhalin sea scallops across Russia: packaging, 24–48h transit, temperature control, Mercury (VetIS) documents, guarantees." : "Как мы доставляем живого сахалинского морского гребешка по России: упаковка, сроки 24-48 часов, температурный режим, документы Меркурий, гарантии."}
      breadcrumbName={isEn ? "Live Scallop Delivery" : "Доставка живого гребешка"}
      slug="dostavka-zhivogo-grebeshka-rossiya"
      jsonLd={articleJsonLd}
      ogImage="https://rakushka65.ru/src/assets/blog-scallop-live-delivery.jpg"
      ogImageAlt={isEn ? "Live Sakhalin sea scallop delivery across Russia" : "Доставка живого морского гребешка с Сахалина по России"}
    >
      <img
        src={liveScallopImg}
        alt={isEn ? "Live Sakhalin sea scallop — delivery across Russia" : "Живой сахалинский морской гребешок - доставка по России"}
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
            Доставить живого моллюска за 7000 км от Сахалина в Москву или Петербург - задача сложная. Но в <strong>Ракушка65</strong> мы наладили логистику так, что каждый гребешок доезжает в идеальном состоянии. Контроль температуры на каждом этапе и полная прозрачность по документам - это наш стандарт.
          </p>

          <h2>Путь гребешка: от моря до тарелки</h2>

          <h3>1. Добыча (день 0)</h3>

          <p>
            Наши водолазы работают в Охотском море и заливе Анива. Каждое утро судно выходит на промысел. На палубе моллюсков сразу проверяют: мелких или поврежденных возвращают в воду. Мы работаем строго по квотам Росрыболовства.
          </p>

          <h3>2. Передержка (день 0-1)</h3>

          <p>
            Улов едет в береговые садки с проточной морской водой (+2-4 °C). Там гребешок отдыхает после стресса и очищается от песка. Это важный момент: без передержки моллюск просто не переживет долгий перелет.
          </p>

          <h3>3. Упаковка (день 1)</h3>

          <p>Тут важен ручной отбор:</p>

          <ul>
            <li>Проверяем рефлексы (постукиваем по створкам).</li>
            <li>Сортируем по размерам (от 12 см и больше).</li>
            <li>Укладываем в термобоксы на «подушку» из свежей ламинарии.</li>
            <li>Обкладываем аккумуляторами холода.</li>
            <li>В каждый короб кладем датчик температуры.</li>
          </ul>

          <h3>4. Перелет (день 1-2)</h3>

          <p>
            Самолеты из Южно-Сахалинска везут ценный груз в Москву, Питер и другие крупные города. Морепродукты оформляются с приоритетом и летят в багажных отсеках, где поддерживается нужная температура.
          </p>

          <h3>5. Доставка в руки (день 2)</h3>

          <p>
            В Москве и Петербурге работают наши курьеры с термосумками. По регионам отправляем проверенными экспресс-службами. От аэропорта до вашей двери проходит не больше 12 часов.
          </p>

          <h2>Сроки по городам</h2>

          <ul>
            <li><strong>Москва, Санкт-Петербург</strong>: 24-36 часов.</li>
            <li><strong>Владивосток, Хабаровск</strong>: 12-18 часов.</li>
            <li><strong>Екатеринбург, Новосибирск, Казань</strong>: 36-48 часов.</li>
            <li><strong>Краснодар, Сочи</strong>: 36-48 часов.</li>
          </ul>

          <h2>Какие документы мы даем</h2>

          <ol>
            <li>Ветеринарное свидетельство (форма №4).</li>
            <li>Выписка из системы «Меркурий» (полная прослеживаемость).</li>
            <li>Декларация соответствия.</li>
            <li>Сертификат происхождения (где и когда выловлено).</li>
          </ol>

          <p>
            Все документы официальные. С ними наш гребешок могут закупать рестораны, отели и розничные магазины.
          </p>

          <h2>Заказ и цены</h2>

          <ul>
            <li><strong>В розницу</strong>: доставляем по тарифам вашего города.</li>
            <li><strong>Опт и HoReCa</strong>: специальные условия при заказе от 30 кг.</li>
            <li><strong>Постоянным клиентам</strong>: скидки от 10% на регулярные поставки.</li>
          </ul>

          <p>
            Цены в каталоге актуальны, они зависят от сезона и размера моллюска.
          </p>

          <h2>Гарантии качества</h2>

          <p>
            Мы гарантируем, что гребешок приедет живым. Если вдруг больше 10% партии погибло в пути, мы вернем деньги или пришлем замену следующим же рейсом.
          </p>

          <p>
            Для этого нужно просто снять видео при вскрытии коробки в присутствии курьера.
          </p>

          <h2>Как заказать</h2>

          <ol>
            <li>Зайдите в каталог <Link to="/catalog/scallop">«Морской гребешок»</Link>.</li>
            <li>Выберите количество и оформите заявку.</li>
            <li>Менеджер перезвонит в течение часа, чтобы подтвердить время.</li>
            <li>Утром посылка вылетит из Южно-Сахалинска.</li>
            <li>Вы получите свежайший продукт и проверите его при курьере.</li>
          </ol>

          <p>
            Хотите узнать больше? Читайте наш гид по <Link to="/blog/zhivoj-morskoj-grebeshok-sahalin">живому гребешку</Link>, статью про <Link to="/blog/kak-hranit-zhivogo-grebeshka">хранение дома</Link> и лучшие <Link to="/blog/kak-prigotovit-grebeshok">рецепты</Link>.
          </p>

          <p>
            <strong>Ракушка65</strong> - прямой поставщик с Сахалина. Никаких перекупщиков и лишней заморозки.
          </p>
        </>
      )}
    </ArticleLayout>
  );
};

export default ScallopLiveDelivery;
