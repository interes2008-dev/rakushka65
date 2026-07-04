import oystersImg from "@/assets/product-oysters.jpg";
import scallopImg from "@/assets/product-scallop.jpg";
import vongoleImg from "@/assets/product-vongole.jpg";
import spizulaImg from "@/assets/product-spizula.jpg";
import seaurchinImg from "@/assets/product-seaurchin.png";
import crabImg from "@/assets/product-crab.png";
import rapanyImg from "@/assets/product-rapany.png";
import snailsImg from "@/assets/product-snails.png";
import corbiculaImg from "@/assets/product-corbicula.png";
import trepangImg from "@/assets/product-trepang.png";
import trepangTinctureImg from "@/assets/product-trepang-tincture.png";
import trepangHoneyTinctureImg from "@/assets/product-trepang-honey-tincture.jpg";

export type ProductTag = "oysters" | "scallop" | "vongole" | "spisula" | "urchin" | "crab" | "rapany" | "snails" | "corbicula" | "trepang" | "trepang-tincture" | "trepang-honey-tincture";

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
    tag: "crab",
    label: "Крабы",
    productLink: "/catalog/crab",
    image: crabImg,
    cta: "Купить краба с Сахалина",
    ctaDescription: "Дальневосточный краб - сочное мясо с морским сладковатым вкусом.",
  },
  {
    tag: "rapany",
    label: "Рапаны",
    productLink: "/catalog/rapany",
    image: rapanyImg,
    cta: "Купить рапаны с Сахалина",
    ctaDescription: "Сахалинские рапаны - упругая мякоть с дымно-морским вкусом.",
  },
  {
    tag: "snails",
    label: "Морские улитки",
    productLink: "/catalog/sea-snails",
    image: snailsImg,
    cta: "Купить морские улитки с Сахалина",
    ctaDescription: "Морские улитки с Сахалина - пикантный деликатес Тихого океана.",
  },
  {
    tag: "corbicula",
    label: "Корбикула",
    productLink: "/catalog/corbicula",
    image: corbiculaImg,
    cta: "Купить корбикулу с Сахалина",
    ctaDescription: "Сахалинская корбикула - нежный, чуть сладковатый моллюск.",
  },
  {
    tag: "trepang",
    label: "Трепанг",
    productLink: "/catalog/trepang",
    image: trepangImg,
    cta: "Купить трепанг с Сахалина",
    ctaDescription: "Дальневосточный трепанг - морской деликатес, который ценят за состав и плотную текстуру.",
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
