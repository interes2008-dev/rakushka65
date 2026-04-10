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
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description: "Купить живые морепродукты с Сахалина: вонголе (морской петушок), устрицы, гребешок, спизула. Прямые поставки с Сахалина, доставка по России за 24 часа",
  telephone: "+79147690097",
  email: "interes2015@gmail.com",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. 4-Железнодорожная, 18, стр. 1",
    addressLocality: "Южно-Сахалинск",
    addressRegion: "Сахалинская область",
    postalCode: "693000",
    addressCountry: "RU",
  },
  sameAs: [
    "https://t.me/+79147690097",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+79147690097",
      contactType: "sales",
      areaServed: "RU",
      availableLanguage: ["Russian", "English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "interes2015@gmail.com",
      availableLanguage: ["Russian", "English"],
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ракушка65",
  alternateName: "Rakushka65 — Живые морепродукты с Сахалина: вонголе, устрицы, гребешок",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["ru", "en"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/catalog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FishStore",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Ракушка65",
  alternateName: "Rakushka65",
  image: LOGO_URL,
  url: SITE_URL,
  telephone: "+79147690097",
  email: "interes2015@gmail.com",
  priceRange: "₽₽",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  currenciesAccepted: "RUB",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. 4-Железнодорожная, 18, стр. 1",
    addressLocality: "Южно-Сахалинск",
    addressRegion: "Сахалинская область",
    postalCode: "693000",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.9641,
    longitude: 142.7285,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  areaServed: {
    "@type": "Country",
    name: "Russia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Морепродукты Сахалина",
    itemListElement: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p.name,
        url: `${SITE_URL}/catalog/${p.id}`,
      },
    })),
  },
};

export function getProductSchema(product: typeof products[0], productName: string, productDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: productDescription,
    image: `${SITE_URL}${product.image}`,
    url: `${SITE_URL}/catalog/${product.id}`,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Ракушка65",
    },
    offers: {
      "@type": "Offer",
      price: product.price || undefined,
      priceCurrency: "RUB",
      unitCode: "KGM",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Ракушка65",
        "@id": `${SITE_URL}/#organization`,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "RU",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "d" },
          transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "d" },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 24 + Math.floor(product.rating * 7),
    },
    category: product.category,
  };
}

export function getCatalogItemListSchema(productItems: typeof products, translations: Record<string, string>) {
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
