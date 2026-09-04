import oystersImg from "@/assets/product-oysters.webp";
import scallopImg from "@/assets/product-scallop.webp";
import vongoleImg from "@/assets/product-vongole.webp";
import spizulaImg from "@/assets/product-spizula.webp";
import seaurchinImg from "@/assets/product-seaurchin.webp";
import hairyCrabImg from "@/assets/product-hairy-crab.webp";
import trepangImg from "@/assets/product-trepang.webp";
import trepangTinctureImg from "@/assets/product-trepang-tincture.webp";
import trepangHoneyTinctureImg from "@/assets/product-trepang-honey-tincture.webp";

export type ProductTag = "oysters" | "scallop" | "vongole" | "spisula" | "urchin" | "crab" | "hairy-crab" | "rapany" | "snails" | "corbicula" | "trepang" | "trepang-tincture" | "trepang-honey-tincture";

export interface ProductCategory {
  tag: ProductTag;
  label: string;
  productLink: string;
  image: string;
  cta: string;
  ctaDescription: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    tag: "oysters",
    label: "Устрицы",
    productLink: "/catalog/oysters",
    image: oystersImg,
    cta: "Купить устрицы с Сахалина",
    ctaDescription: "Свежие живые устрицы прямо с побережья Сахалина - доставка по России за 24 часа.",
  },
  {
    tag: "scallop",
    label: "Морской гребешок",
    productLink: "/catalog/scallop",
    image: scallopImg,
    cta: "Купить гребешок с Сахалина",
    ctaDescription: "Живой морской гребешок с Сахалина - нежный, сладковатый вкус океана.",
  },
  {
    tag: "vongole",
    label: "Вонголе",
    productLink: "/catalog/vongole",
    image: vongoleImg,
    cta: "Купить вонголе с Сахалина",
    ctaDescription: "Морской петушок с побережья Сахалина - для пасты, ризотто и тушёных блюд.",
  },
  {
    tag: "spisula",
    label: "Спизула",
    productLink: "/catalog/spizula",
    image: spizulaImg,
    cta: "Купить спизулу с Сахалина",
    ctaDescription: "Сахалинская спизула - плотная сладковатая мякоть для сашими и гриля.",
  },
  {
    tag: "urchin",
    label: "Морской ёж",
    productLink: "/catalog/sea-urchin",
    image: seaurchinImg,
    cta: "Купить морского ежа с Сахалина",
    ctaDescription: "Свежий сахалинский морской ёж - сливочная икра прямо из Тихого океана.",
  },
  {
    tag: "hairy-crab",
    label: "Краб мохнаторукий",
    productLink: "/catalog/hairy-crab",
    image: hairyCrabImg,
    cta: "Заказать мохнаторукого краба оптом",
    ctaDescription: "Живой мохнаторукий краб с Сахалина оптом. Доставка живым в термобоксе, калибровка по размеру и полу, документы на партию.",
  },
  {
    tag: "trepang",
    label: "Трепанг",
    productLink: "/catalog/trepang-tincture",
    image: trepangImg,
    cta: "Купить настойку на трепанге",
    ctaDescription: "Настойка на дальневосточном трепанге, ценят за состав и пользу морского деликатеса.",
  },
  {
    tag: "trepang-tincture",
    label: "Настойка трепанга",
    productLink: "/catalog/trepang-tincture",
    image: trepangTinctureImg,
    cta: "Купить настойку на трепанге",
    ctaDescription: "Готовая медовая настойка трепанга - дальневосточный эликсир для иммунитета и тонуса.",
  },
  {
    tag: "trepang-honey-tincture",
    label: "Медовая настойка с трепангом без спирта",
    productLink: "/catalog/trepang-honey-tincture",
    image: trepangHoneyTinctureImg,
    cta: "Купить медовую настойку трепанга без спирта",
    ctaDescription: "Безалкогольный медовый эликсир из сахалинского трепанга - мягкая поддержка иммунитета без спирта.",
  },
];

const BY_TAG: Record<ProductTag, ProductCategory> = PRODUCT_CATEGORIES.reduce((acc, c) => {
  acc[c.tag] = c;
  return acc;
}, {} as Record<ProductTag, ProductCategory>);

export function detectProductTag(input: string): ProductTag {
  const s = input.toLowerCase();
  if (s.includes("ustri") || s.includes("oyster")) return "oysters";
  if (s.includes("grebesh") || s.includes("scallop")) return "scallop";
  if (s.includes("spisul") || s.includes("spizul")) return "spisula";
  if (s.includes("ezh") || s.includes("urchin")) return "urchin";
  if (s.includes("mohnatoruk") || s.includes("hairy") || s.includes("mitten") || s.includes("volosat") || s.includes("shanhaj")) return "hairy-crab";
  if (s.includes("krab") || s.includes("crab")) return "crab";
  if (s.includes("rapan")) return "rapany";
  if (s.includes("ulitk") || s.includes("snail")) return "snails";
  if (s.includes("corbicul") || s.includes("korbikul")) return "corbicula";
  if (s.includes("medov") || s.includes("honey") || s.includes("медов") || s.includes("bez-spirt") || s.includes("alcohol-free")) return "trepang-honey-tincture";
  if (s.includes("nastojk") || s.includes("tincture") || s.includes("настойк")) return "trepang-tincture";
  if (s.includes("trepang") || s.includes("трепанг")) return "trepang";
  return "vongole";
}

export function getProductCategory(tag: ProductTag): ProductCategory {
  return BY_TAG[tag];
}
