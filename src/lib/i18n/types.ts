export type Language = "ru" | "en";

export interface Translations {
  nav: {
    home: string;
    catalog: string;
    about: string;
    reviews: string;
    contacts: string;
    order: string;
    ordersLine: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    catalogBtn: string;
    availabilityBtn: string;
    scrollDown: string;
  };
  benefits: {
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  products: {
    title: string;
    titleAccent: string;
    subtitle: string;
    catalogBtn: string;
  };
  about: {
    badge: string;
    title: string;
    titleAccent: string;
    yearsLabel: string;
    yearsDesc: string;
    paragraphs: string[];
    certificateLink: string;
    certificateLine: string;
    ctaBtn: string;
  };
  reviews: {
    title: string;
    titleAccent: string;
  };
  contact: {
    title: string;
    titleAccent: string;
    subtitle: string;
    phoneLabel: string;
    phoneHours: string;
    emailLabel: string;
    emailResponse: string;
    addressLabel: string;
    city: string;
    street: string;
    pickup: string;
    yandexDelivery: string;
    hoursLabel: string;
    hoursValue: string;
    deliveryToday: string;
    messengers: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneFormLabel: string;
    phonePlaceholder: string;
    commentLabel: string;
    commentPlaceholder: string;
    submitBtn: string;
    submitted: string;
    privacyText: string;
    privacyLink: string;
  };
  footer: {
    description: string;
    navigation: string;
    contactsTitle: string;
    copyright: string;
    privacy: string;
    offer: string;
  };
  catalog: {
    title: string;
    titleAccent: string;
    subtitle: string;
    all: string;
    oysters: string;
    mollusks: string;
    delicacies: string;
    crustaceans: string;
    sortDefault: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    sortRating: string;
  };
  productDetail: {
    backToCatalog: string;
    sizeWeight: string;
    taste: string;
    condition: string;
    conditionValue: string;
    orderBtn: string;
    delivery24: string;
    coldChain: string;
    freshCatch: string;
    relatedTitle: string;
    relatedAccent: string;
    notFound: string;
    notFoundLink: string;
  };
  certificate: {
    backHome: string;
    title: string;
    description: string;
  };
  // Product-level translations
  productNames: Record<string, string>;
  productDescriptions: Record<string, string>;
  productFullDescriptions: Record<string, string>;
  productCategories: Record<string, string>;
  productWeights: Record<string, string>;
  productTastes: Record<string, string>;
  unitKg: string;
}
