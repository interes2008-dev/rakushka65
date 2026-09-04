// Пререндер для SPA: на каждый маршрут из sitemap пишем dist/<route>/index.html
// с уже вшитыми в исходный HTML title, description, canonical, OG, Twitter и JSON-LD,
// плюс индексируемым текстовым блоком (H1 + intro) внутри #root.
// Это решает главную проблему SPA в Яндексе: раньше все страницы отдавали HTML главной.
//
// Запускается после `vite build`. Данные берём из готового билда и исходников (без headless-браузера).

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { execSync } from "child_process";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const SITE_URL = "https://rakushka65.ru";

// --- 1. Данные категорий/статей через esbuild (всегда свежие) ---
execSync("node scripts/_extract-data.mjs", { cwd: ROOT, stdio: "inherit" });
const { categoryLandings, productFaq } = JSON.parse(readFileSync(join(ROOT, "scripts/_data.json"), "utf8"));

// --- 1b. .env: параметры Supabase для догрузки автогенерируемых статей ---
function readEnv() {
  try {
    const env = readFileSync(join(ROOT, ".env"), "utf8");
    const get = (k) => (env.match(new RegExp(`${k}="?([^"\\n]+)"?`)) || [])[1];
    return { url: get("VITE_SUPABASE_URL"), key: get("VITE_SUPABASE_PUBLISHABLE_KEY") };
  } catch { return {}; }
}
const SUPA = readEnv();

// slug -> человекочитаемый заголовок (фолбэк, если база недоступна)
function deslugify(slug) {
  const noDate = slug.replace(/-\d{4}-\d{2}-\d{2}$/, "");
  const s = noDate.replace(/-/g, " ").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Курируемые русские метаданные автогенерируемых статей (используются, если Supabase недоступен при сборке)
const DYNAMIC_FALLBACK = {
  "morskoy-ezh-5-mifov-i-vsya-pravda-o-glavnom-delikatese-sahalina-2026-04-17": {
    title: "Морской ёж: 5 мифов и вся правда о деликатесе",
    description: "Разбираем пять популярных мифов о морском еже и рассказываем правду о главном деликатесе Сахалина: вкус, польза, как выбирать и есть.",
    h1: "Морской ёж: 5 мифов и вся правда о главном деликатесе Сахалина",
  },
  "morskoy-ezh-s-sahalina-iskusstvo-podachi-i-idealnye-vinnye-pary-2026-04-22": {
    title: "Морской ёж с Сахалина: подача и винные пары",
    description: "Как красиво подать сахалинского морского ежа и с каким вином его сочетать. Идеальные винные пары для икры морского ежа.",
    h1: "Морской ёж с Сахалина: искусство подачи и идеальные винные пары",
  },
  "sahalinskiy-morskoy-ezh-chem-on-luchshe-yaponskih-i-chiliyskih-analogov-2026-04-21": {
    title: "Сахалинский морской ёж против японского и чилийского",
    description: "Чем сахалинский морской ёж лучше японских и чилийских аналогов: свежесть, вкус икры, логистика и цена. Честное сравнение.",
    h1: "Сахалинский морской ёж: чем он лучше японских и чилийских аналогов",
  },
  "ustricy-dlya-detoksa-i-diety-polza-sahalinskih-mollyuskov-2026-04-19": {
    title: "Устрицы для детокса и диеты: польза моллюсков",
    description: "Чем полезны сахалинские устрицы в детоксе и диете: белок, цинк, низкая калорийность. Как включить устрицы в рацион.",
    h1: "Устрицы для детокса и диеты: польза сахалинских моллюсков",
  },
  "sahalinskiy-grebeshok-kak-vklyuchit-v-dietu-i-programmu-detoks-2026-04-23": {
    title: "Сахалинский гребешок в диете и детоксе",
    description: "Как включить сахалинский гребешок в диету и программу детокс: много белка без лишних калорий, рецепты и порции.",
    h1: "Сахалинский гребешок: как включить в диету и программу детокс",
  },
  "vongole-ili-petushki-v-chem-raznica-i-kak-vybrat-luchshie-mollyuski-2026-04-18": {
    title: "Вонголе или петушки: в чём разница и как выбрать",
    description: "Вонголе и петушки: в чём разница между моллюсками, как выбрать лучшие и не перепутать. Гид от поставщика с Сахалина.",
    h1: "Вонголе или петушки: в чём разница и как выбрать лучшие моллюски",
  },
};

// Article JSON-LD для страниц статей
const articleSchema = (h1, description, path, image) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: h1,
  description,
  inLanguage: "ru",
  image: image || `${SITE_URL}/og-image.jpg`,
  author: { "@type": "Organization", name: "Ракушка65", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Ракушка65", logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` } },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
});

// Догрузка метаданных автогенерируемых статей из Supabase REST (если доступно)
const dynamicMeta = {};
async function loadDynamic(slugs) {
  if (!SUPA.url || !SUPA.key || slugs.length === 0) return;
  try {
    const inList = slugs.map((s) => `"${s}"`).join(",");
    const url = `${SUPA.url}/rest/v1/articles?slug=in.(${encodeURIComponent(inList)})&select=slug,title,description,seo_title,seo_description`;
    const res = await fetch(url, { headers: { apikey: SUPA.key, Authorization: `Bearer ${SUPA.key}` } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    for (const row of await res.json()) {
      dynamicMeta[row.slug] = {
        title: row.seo_title || row.title,
        description: (row.seo_description || row.description || "").slice(0, 160),
        h1: row.title,
      };
    }
  } catch (e) {
    console.log("Supabase недоступен, использую заголовки из slug:", e.message);
  }
}

// --- 2. Парсим компоненты статей: slug -> {seoTitle, seoDescription, h1} ---
function parseProp(src, name) {
  // Форма 1: name="..." (простой литерал)
  let m = src.match(new RegExp(`${name}="([^"]*)"`));
  if (m) return m[1];
  // Форма 2: name={ ... ? "EN" : "RU" } — берём русскую ветку (последний литерал в фигурных скобках)
  m = src.match(new RegExp(`${name}=\\{([^}]*)\\}`));
  if (m) {
    const inner = m[1];
    const strings = [...inner.matchAll(/"([^"]*)"/g)].map((x) => x[1]);
    if (strings.length) return strings[strings.length - 1]; // RU идёт после EN в тернарнике isEn ? en : ru
    // Форма 3: name={isEn ? titleEn : titleRu} — резолвим переменную titleRu
    const varMatch = inner.match(/:\s*([A-Za-z_$][\w$]*)\s*$/);
    if (varMatch) {
      const vm = src.match(new RegExp(`const\\s+${varMatch[1]}\\s*=\\s*"([^"]*)"`));
      if (vm) return vm[1];
    }
  }
  return null;
}
const articlesDir = join(ROOT, "src/pages/articles");
const articleMeta = {};

// Извлекаем видимый текст тела статьи из JSX (H2/H3/P/LI) для индексируемого HTML.
// Применяем только к RU-статьям без isEn-ветвлений, чтобы не смешать языки.
function extractBody(src) {
  // берём часть после закрытия <img ... /> до </ArticleLayout>
  let body = src;
  const imgEnd = src.indexOf("/>", src.indexOf("<img"));
  const layoutEnd = src.lastIndexOf("</ArticleLayout>");
  if (imgEnd !== -1 && layoutEnd !== -1) body = src.slice(imgEnd + 2, layoutEnd);
  const clean = (t) =>
    t
      .replace(/<Link[^>]*>/g, "").replace(/<\/Link>/g, "")
      .replace(/<\/?strong>/g, "").replace(/<\/?em>/g, "")
      .replace(/\{["'](.*?)["']\}/g, "$1") // {" "} и строковые вставки
      .replace(/\{[^}]*\}/g, "") // прочие выражения убираем
      .replace(/\s+/g, " ")
      .trim();
  const out = [];
  const re = /<(h2|h3|p|li)[^>]*>([\s\S]*?)<\/\1>/g;
  let m, inList = false;
  while ((m = re.exec(body))) {
    const tag = m[1];
    const text = clean(m[2]);
    if (!text) continue;
    if (tag === "li") {
      if (!inList) { out.push("<ul>"); inList = true; }
      out.push(`<li>${esc0(text)}</li>`);
    } else {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<${tag}>${esc0(text)}</${tag}>`);
    }
  }
  if (inList) out.push("</ul>");
  return out.join("");
}
// esc для использования до основного esc (тот объявлен ниже)
function esc0(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

for (const file of readdirSync(articlesDir).filter((f) => f.endsWith(".tsx"))) {
  const src = readFileSync(join(articlesDir, file), "utf8");
  const slug = parseProp(src, "slug");
  if (!slug) continue;
  articleMeta[slug] = {
    seoTitle: parseProp(src, "seoTitle") || parseProp(src, "title"),
    seoDescription: parseProp(src, "seoDescription") || "",
    h1: parseProp(src, "title") || "",
    ogImage: `${SITE_URL}/og-image.jpg`,
    body: src.includes("isEn") ? "" : extractBody(src),
  };
}

// --- 3. Товары (id -> имя/цена/рейтинг/og), формулы как в ProductDetail ---
const PRODUCTS = {
  scallop: { name: "Морской гребешок сахалинский", price: "700", rating: 5, og: "og-scallop.jpg" },
  oysters: { name: "Устрицы сахалинские", price: "600", rating: 5, og: "og-oysters.jpg" },
  vongole: { name: "Вонголе (морской петушок)", price: "600", rating: 4, og: "og-vongole.jpg" },
  spizula: { name: "Спизула сахалинская", price: "500", rating: 4, og: "og-spizula.jpg" },
  "sea-urchin": { name: "Ёж морской сахалинский", price: "500", rating: 5, og: "og-sea-urchin.jpg" },
  "trepang-tincture": { name: "Настойка на трепанге", price: "", rating: 5, og: "og-image.jpg" },
  "hairy-crab": { name: "Краб мохнаторукий живой", price: "", rating: 5, og: "og-hairy-crab.jpg" },
};

// --- Схемы (копии из src/lib/seo/schemas.ts) ---
const LOGO_URL = `${SITE_URL}/favicon.svg`;
const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE_URL}/#organization`,
  name: "Ракушка65", alternateName: "Rakushka65", url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  description: "Купить живые морепродукты с Сахалина: вонголе, устрицы, гребешок, спизула. Прямые поставки за 24 часа",
  telephone: "+79147690097", email: "interes2015@gmail.com",
  address: { "@type": "PostalAddress", streetAddress: "ул. 4-Железнодорожная, 18, стр. 1", addressLocality: "Южно-Сахалинск", addressRegion: "Сахалинская область", postalCode: "693000", addressCountry: "RU" },
};
const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`,
  name: "Ракушка65", url: SITE_URL, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: ["ru", "en"],
};
const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "FishStore", "@id": `${SITE_URL}/#localbusiness`,
  name: "Ракушка65", image: LOGO_URL, url: SITE_URL, telephone: "+79147690097", priceRange: "₽₽",
  address: { "@type": "PostalAddress", streetAddress: "ул. 4-Железнодорожная, 18, стр. 1", addressLocality: "Южно-Сахалинск", addressCountry: "RU" },
};
const breadcrumb = (items) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.url}` })),
});
const productSchema = (id, p) => {
  const s = {
    "@context": "https://schema.org", "@type": "Product",
    name: p.name, description: `Купить ${p.name.toLowerCase()} с Сахалина. Прямые поставки, доставка за 24 часа от Ракушка65.`,
    image: `${SITE_URL}/${p.og}`, sku: id, brand: { "@type": "Brand", name: "Ракушка65" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating.toFixed(1), reviewCount: 12 + (id.length % 7) * 3, bestRating: 5 },
  };
  if (p.price) s.offers = { "@type": "Offer", price: p.price, priceCurrency: "RUB", availability: "https://schema.org/InStock", url: `${SITE_URL}/catalog/${id}` };
  return s;
};
const faqSchema = (faq) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

// --- 4. Резолвер метаданных по URL ---
function metaFor(path) {
  if (path === "/") return {
    title: "Ракушка65: живые морепродукты с Сахалина с доставкой",
    description: "Живые морепродукты с Сахалина: вонголе, устрицы, гребешок, спизула, морской ёж. Прямые поставки, доставка за 24 часа по России.",
    ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [organizationSchema, websiteSchema, localBusinessSchema],
    h1: "Живые морепродукты с Сахалина", intro: "Вонголе, устрицы, морской гребешок, спизула и морской ёж напрямую с Сахалина. Прямые поставки и доставка за 24 часа по России.",
  };
  if (path === "/catalog") return {
    title: "Каталог морепродуктов с Сахалина | Ракушка65",
    description: "Каталог живых морепродуктов с Сахалина: гребешок, устрицы, вонголе, спизула, морской ёж, трепанг, краб мохнаторукий. Доставка за 24 часа.",
    ogImage: `${SITE_URL}/og-catalog.jpg`, jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Каталог", url: "/catalog" }])],
    h1: "Каталог морепродуктов с Сахалина", intro: "Живой гребешок, устрицы, вонголе, спизула, морской ёж, рапаны и деликатесы. Прямые поставки с Сахалина.",
  };
  if (path === "/blog") return {
    title: "Блог о морепродуктах Сахалина - рецепты, польза, советы | Ракушка65",
    description: "Статьи о сахалинских морепродуктах: как выбрать, хранить и готовить гребешок, устрицы, вонголе, спизулу и морского ежа. Рецепты и советы от поставщика.",
    ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }])],
    h1: "Блог о сахалинских морепродуктах", intro: "Как выбирать, хранить и готовить морепродукты. Рецепты и советы от поставщика с Сахалина.",
    extraHtml: blogListHtml,
  };
  if (path === "/opt/mohnatorukij-krab") {
    const faq = [
      { q: "Какой минимальный объём опта?", a: "Минимум согласуем под город и маршрут, живая доставка планируется под рейс. Напишите целевой объём в неделю, подтвердим, что реально по вашему региону." },
      { q: "Можно заказать только самок с икрой?", a: "Да. Самки с икрой идут отдельным откалиброванным лотом. В осенний сезон это самый частый запрос, объёмы лучше бронировать заранее." },
      { q: "Даёте документы на партию?", a: "Каждая партия едет с ветеринарными документами и прослеживаемостью, под требования сетей и аудита." },
      { q: "Как быстро доставка?", a: "Обычно 24-48 часов от сахалинского бассейна до вашего города авиа с температурным контролем." },
    ];
    const productLd = {
      "@context": "https://schema.org", "@type": "Product",
      name: "Живой мохнаторукий краб оптом с Сахалина",
      description: "Оптовые поставки живого мохнаторукого краба с Сахалина для ресторанов: калибровка, самки с икрой отдельно, живая доставка, документы.",
      image: `${SITE_URL}/og-hairy-crab.jpg`, brand: { "@type": "Brand", name: "Ракушка65" },
      offers: { "@type": "AggregateOffer", priceCurrency: "RUB", availability: "https://schema.org/InStock", seller: { "@type": "Organization", name: "Ракушка65" }, url: `${SITE_URL}/opt/mohnatorukij-krab` },
    };
    return {
      title: "Мохнаторукий краб оптом с Сахалина, живая поставка ресторанам | Ракушка65",
      description: "Заказать живого мохнаторукого краба оптом с Сахалина. Калибровка, самки с икрой отдельно, живая доставка, документы. Оставьте заявку и получите прайс.",
      ogImage: `${SITE_URL}/og-hairy-crab.jpg`, ogType: "website",
      jsonLd: [productLd, faqSchema(faq), breadcrumb([{ name: "Главная", url: "/" }, { name: "Мохнаторукий краб оптом", url: "/opt/mohnatorukij-krab" }])],
      h1: "Мохнаторукий краб оптом с Сахалина",
      intro: "Живая поставка ресторанам и закупщикам. Калибровка партий, самки с икрой отдельно, холодовая цепь и документы на каждой отгрузке.",
      extraHtml: "<h2>Частые вопросы опта</h2>" + faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join(""),
    };
  }
  if (path === "/privacy") return { title: "Политика конфиденциальности | Ракушка65", description: "Политика конфиденциальности интернет-магазина морепродуктов Ракушка65.", ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [], h1: "Политика конфиденциальности", intro: "", noindex: true };
  if (path === "/offer") return { title: "Публичная оферта | Ракушка65", description: "Публичная оферта интернет-магазина морепродуктов Ракушка65.", ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [], h1: "Публичная оферта", intro: "", noindex: true };
  if (path === "/certificate") return { title: "Сертификаты качества | Ракушка65", description: "Сертификаты качества и ветеринарные документы на морепродукты Ракушка65.", ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [], h1: "Сертификаты качества", intro: "" };

  // Товар
  let m = path.match(/^\/catalog\/([a-z0-9-]+)$/);
  if (m && PRODUCTS[m[1]]) {
    const id = m[1], p = PRODUCTS[id];
    const priceFrag = p.price ? `От ${p.price} ₽/кг. ` : "Цена по запросу. ";
    const faq = (productFaq && productFaq[id]) || [];
    const jsonLd = [productSchema(id, p), breadcrumb([{ name: "Главная", url: "/" }, { name: "Каталог", url: "/catalog" }, { name: p.name, url: `/catalog/${id}` }])];
    if (faq.length) jsonLd.push(faqSchema(faq));
    // Вопросы-ответы в индексируемый контент
    const faqHtml = faq.length ? "<h2>Частые вопросы</h2>" + faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("") : "";
    return {
      title: `${p.name} с Сахалина - купить | Ракушка65`,
      description: `Купить ${p.name.toLowerCase()} с Сахалина. ${priceFrag}Прямые поставки, доставка за 24 часа от Ракушка65.`.slice(0, 160),
      ogImage: `${SITE_URL}/${p.og}`, ogType: "product", jsonLd,
      h1: p.name, intro: `${p.name} с Сахалина. ${priceFrag}Прямые поставки, доставка за 24 часа.`, extraHtml: faqHtml,
    };
  }
  // Категория
  m = path.match(/^\/category\/([a-z0-9-]+)$/);
  if (m) {
    const cat = categoryLandings.find((c) => c.slug === m[1]);
    if (cat) return {
      title: cat.seoTitle, description: cat.seoDescription, ogImage: cat.ogImage,
      jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Каталог", url: "/catalog" }, { name: cat.h1, url: `/category/${cat.slug}` }]), faqSchema(cat.faq)],
      h1: cat.h1, intro: (cat.intro && cat.intro[0]) || "",
    };
  }
  // Статья
  m = path.match(/^\/blog\/([a-z0-9-]+)$/);
  if (m && articleMeta[m[1]]) {
    const a = articleMeta[m[1]];
    return {
      title: a.seoTitle, description: a.seoDescription, ogImage: a.ogImage, ogType: "article",
      jsonLd: [
        articleSchema(a.h1, a.seoDescription, path, a.ogImage),
        breadcrumb([{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }, { name: a.h1, url: path }]),
      ],
      h1: a.h1, intro: a.seoDescription, extraHtml: a.body || "",
    };
  }
  // Автогенерируемая статья (Supabase -> курируемая карта -> фолбэк из slug)
  if (m) {
    const slug = m[1];
    const d = dynamicMeta[slug] || DYNAMIC_FALLBACK[slug] || { title: `${deslugify(slug)} | Ракушка65`, description: `${deslugify(slug)}. Статья о сахалинских морепродуктах от Ракушка65.`.slice(0, 160), h1: deslugify(slug) };
    return {
      title: d.title.includes("Ракушка") ? d.title : `${d.title} | Ракушка65`,
      description: d.description, ogImage: `${SITE_URL}/og-image.jpg`, ogType: "article",
      jsonLd: [
        articleSchema(d.h1, d.description, path, `${SITE_URL}/og-image.jpg`),
        breadcrumb([{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }, { name: d.h1, url: path }]),
      ],
      h1: d.h1, intro: d.description,
    };
  }
  return null;
}

// --- 5. Инъекция в шаблон ---
const template = readFileSync(join(DIST, "index.html"), "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Критичные шрифты (кириллица) для preload, чтобы не было мигания текста
const assetsDir = join(DIST, "assets");
const fontFiles = existsSync(assetsDir) ? readdirSync(assetsDir) : [];
const findFont = (re) => { const f = fontFiles.find((x) => re.test(x)); return f ? `/assets/${f}` : null; };
const preloadFonts = [
  findFont(/manrope-cyrillic-wght-normal.*\.woff2$/),
  findFont(/cormorant-garamond-cyrillic-wght-normal.*\.woff2$/),
].filter(Boolean);
const fontPreloadHtml = preloadFonts
  .map((href) => `    <link rel="preload" as="font" type="font/woff2" href="${href}" crossorigin>`)
  .join("\n");

function render(path, meta) {
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
  const ogType = meta.ogType || "website";
  let html = template;

  // Убираем любые уже присутствующие JSON-LD из базового шаблона, чтобы не дублировать схемы
  html = html.replace(/\s*<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "");

  // title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  // description
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(meta.description)}">`);
  // canonical
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}">`);
  // robots: noindex для служебных страниц (оферта, политика)
  if (meta.noindex) {
    html = html.replace(/<meta name="robots"[^>]*>/, `<meta name="robots" content="noindex, nofollow">`);
  }

  // Собираем/заменяем OG и twitter. Удаляем существующие og:/twitter:, добавляем свои.
  html = html.replace(/\s*<meta property="og:[^>]*>/g, "").replace(/\s*<meta name="twitter:[^>]*>/g, "");
  const ogBlock = [
    `<meta property="og:type" content="${ogType}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${meta.ogImage}">`,
    `<meta property="og:site_name" content="Ракушка65">`,
    `<meta property="og:locale" content="ru_RU">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(meta.title)}">`,
    `<meta name="twitter:description" content="${esc(meta.description)}">`,
    `<meta name="twitter:image" content="${meta.ogImage}">`,
  ].map((s) => "    " + s).join("\n");
  html = html.replace(/<link rel="canonical"[^>]*>/, (c) => c + "\n" + ogBlock);

  // JSON-LD (data-seo-prerender, чтобы клиентский SEOHead их не дублировал в дереве — он пишет data-seo-jsonld)
  const ld = (meta.jsonLd || []).map(
    (obj) => `    <script type="application/ld+json" data-seo-prerender>${JSON.stringify(obj)}</script>`
  ).join("\n");
  const headInject = [fontPreloadHtml, ld].filter(Boolean).join("\n");
  if (headInject) html = html.replace("</head>", headInject + "\n</head>");

  // Индексируемый контент внутри #root (React заменит его при монтировании)
  const introHtml = meta.intro ? `<p>${esc(meta.intro)}</p>` : "";
  const seoContent = `<div id="prerender-seo"><h1>${esc(meta.h1)}</h1>${introHtml}${meta.extraHtml || ""}</div>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);

  return html;
}

// --- 6. Список URL из sitemap ---
const sitemap = readFileSync(join(DIST, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((mm) => mm[1].replace(SITE_URL, "").trim())
  .filter(Boolean);

// Служебные страницы (noindex) пререндерим, но в sitemap не держим
for (const svc of ["/offer", "/privacy"]) {
  if (!urls.includes(svc)) urls.push(svc);
}

// Список ссылок на все статьи блога для страницы /blog (чтобы краулеры видели их в статике)
let blogListHtml = "";
{
  const blogUrls = urls.filter((u) => /^\/blog\/[a-z0-9-]+$/.test(u));
  const items = blogUrls.map((u) => {
    const slug = u.replace("/blog/", "");
    const meta = articleMeta[slug] || dynamicMeta[slug] || DYNAMIC_FALLBACK[slug] || {};
    const title = meta.h1 || meta.seoTitle || deslugify(slug);
    const desc = meta.seoDescription || meta.description || "";
    return `<li><a href="${u}">${esc(title)}</a>${desc ? `<p>${esc(desc)}</p>` : ""}</li>`;
  });
  blogListHtml = `<h2>Все статьи блога</h2><ul>${items.join("")}</ul>`;
}

// Определяем автогенерируемые статьи (нет статического компонента) и грузим их из Supabase
const dynSlugs = urls
  .map((u) => (u.match(/^\/blog\/([a-z0-9-]+)$/) || [])[1])
  .filter((s) => s && !articleMeta[s]);
await loadDynamic(dynSlugs);

let ok = 0, skipped = [];
for (const path of urls) {
  const meta = metaFor(path);
  if (!meta) { skipped.push(path); continue; }
  const html = render(path, meta);
  const outDir = path === "/" ? DIST : join(DIST, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  ok++;
}

console.log(`Prerendered ${ok} страниц.`);
if (skipped.length) console.log(`Пропущено (нет метаданных): ${skipped.join(", ")}`);
