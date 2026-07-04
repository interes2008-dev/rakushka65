import { products } from "@/components/ProductsSection";

const SITE_URL = "https://rakushka65.ru";
const LOGO_URL = `${SITE_URL}/favicon.svg`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Ракушка65",
  alternateName: "Rakushka65",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  description: "Купить живые морепродукты с Сахалина: вонголе, устрицы, гребешок, спизула. Прямые поставки за 24 часа",
  telephone: "+79147690097",
  email: "interes2015@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. 4-Железнодорожная, 18, стр. 1",
    addressLocality: "Южно-Сахалинск",
    addressRegion: "Сахалинская область",
    postalCode: "693000",
    addressCountry: "RU",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ракушка65",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["ru", "en"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FishStore",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Ракушка65",
  image: LOGO_URL,
  url: SITE_URL,
  telephone: "+79147690097",
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. 4-Железнодорожная, 18, стр. 1",
    addressLocality: "Южно-Сахалинск",
    addressCountry: "RU",
  },
};

export function getProductSchema(product: any, productName: string, productDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: productDescription,
    image: `${SITE_URL}${product.image}`,
    sku: product.id,
    brand: { "@type": "Brand", name: "Ракушка65" },
    offers: product.price ? {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/catalog/${product.id}`,
    } : undefined,
  };
}

export function getCatalogItemListSchema(productItems: any[], translations: Record<string, string>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Каталог морепродуктов Сахалина",
    numberOfItems: productItems.length,
    itemListElement: productItems.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/catalog/${p.id}`,
      name: translations[p.id] || p.name,
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
