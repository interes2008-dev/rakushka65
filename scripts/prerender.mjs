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
for (const file of readdirSync(articlesDir).filter((f) => f.endsWith(".tsx"))) {
  const src = readFileSync(join(articlesDir, file), "utf8");
  const slug = parseProp(src, "slug");
  if (!slug) continue;
  articleMeta[slug] = {
    seoTitle: parseProp(src, "seoTitle") || parseProp(src, "title"),
    seoDescription: parseProp(src, "seoDescription") || "",
    h1: parseProp(src, "title") || "",
    ogImage: `${SITE_URL}/og-image.jpg`,
  };
}

// --- 3. Товары (id -> имя/цена/рейтинг/og), формулы как в ProductDetail ---
const PRODUCTS = {
  scallop: { name: "Морской гребешок сахалинский", price: "700", rating: 5, og: "og-scallop.jpg" },
  oysters: { name: "Устрицы сахалинские", price: "500", rating: 5, og: "og-oysters.jpg" },
  vongole: { name: "Вонголе (морской петушок)", price: "500", rating: 4, og: "og-vongole.jpg" },
  spizula: { name: "Спизула сахалинская", price: "500", rating: 4, og: "og-spizula.jpg" },
  "sea-urchin": { name: "Ёж морской сахалинский", price: "500", rating: 5, og: "og-sea-urchin.jpg" },
  rapany: { name: "Рапаны сахалинские", price: "600", rating: 4, og: "og-rapany.jpg" },
  "sea-snails": { name: "Морские улитки сахалинские", price: "600", rating: 5, og: "og-sea-snails.jpg" },
  corbicula: { name: "Корбикула сахалинская", price: "600", rating: 5, og: "og-corbicula.jpg" },
  trepang: { name: "Трепанг дальневосточный", price: "", rating: 5, og: "og-image.jpg" },
  "trepang-tincture": { name: "Настойка на трепанге", price: "", rating: 5, og: "og-image.jpg" },
  crab: { name: "Краб колючий сахалинский", price: "", rating: 5, og: "og-image.jpg" },
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
    title: "Ракушка65 - Живые морепродукты с Сахалина | Вонголе, устрицы, гребешок с доставкой",
    description: "Купить живые морепродукты с Сахалина: вонголе (морской петушок), устрицы, гребешок, спизула, морской ёж. Прямые поставки с Сахалина, доставка за 24 часа по России. Ракушка65 - редкие сахалинские деликатесы.",
    ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [organizationSchema, websiteSchema, localBusinessSchema],
    h1: "Живые морепродукты с Сахалина", intro: "Вонголе, устрицы, морской гребешок, спизула и морской ёж напрямую с Сахалина. Прямые поставки и доставка за 24 часа по России.",
  };
  if (path === "/catalog") return {
    title: "Каталог морепродуктов с Сахалина | Ракушка65",
    description: "Каталог живых морепродуктов с Сахалина: гребешок, устрицы, вонголе, спизула, морской ёж, рапаны, трепанг. Прямые поставки, доставка за 24 часа.",
    ogImage: `${SITE_URL}/og-catalog.jpg`, jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Каталог", url: "/catalog" }])],
    h1: "Каталог морепродуктов с Сахалина", intro: "Живой гребешок, устрицы, вонголе, спизула, морской ёж, рапаны и деликатесы. Прямые поставки с Сахалина.",
  };
  if (path === "/blog") return {
    title: "Блог о морепродуктах Сахалина - рецепты, польза, советы | Ракушка65",
    description: "Статьи о сахалинских морепродуктах: как выбрать, хранить и готовить гребешок, устрицы, вонголе, спизулу и морского ежа. Рецепты и советы от поставщика.",
    ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }])],
    h1: "Блог о сахалинских морепродуктах", intro: "Как выбирать, хранить и готовить морепродукты. Рецепты и советы от поставщика с Сахалина.",
  };
  if (path === "/privacy") return { title: "Политика конфиденциальности | Ракушка65", description: "Политика конфиденциальности интернет-магазина морепродуктов Ракушка65.", ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [], h1: "Политика конфиденциальности", intro: "" };
  if (path === "/offer") return { title: "Публичная оферта | Ракушка65", description: "Публичная оферта интернет-магазина морепродуктов Ракушка65.", ogImage: `${SITE_URL}/og-image.jpg`, jsonLd: [], h1: "Публичная оферта", intro: "" };
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
      jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }, { name: a.h1, url: path }])],
      h1: a.h1, intro: a.seoDescription,
    };
  }
  // Автогенерируемая статья (Supabase или фолбэк из slug)
  if (m) {
    const slug = m[1];
    const d = dynamicMeta[slug] || { title: `${deslugify(slug)} | Ракушка65`, description: `${deslugify(slug)}. Статья о сахалинских морепродуктах от Ракушка65.`.slice(0, 160), h1: deslugify(slug) };
    return {
      title: d.title.includes("Ракушка") ? d.title : `${d.title} | Ракушка65`,
      description: d.description, ogImage: `${SITE_URL}/og-image.jpg`, ogType: "article",
      jsonLd: [breadcrumb([{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }, { name: d.h1, url: path }])],
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
