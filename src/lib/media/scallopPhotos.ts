import p1 from "@/assets/scallop-photo-1.webp.asset.json";
import p2 from "@/assets/scallop-photo-2.webp.asset.json";
import p3 from "@/assets/scallop-photo-3.webp.asset.json";
import p4 from "@/assets/scallop-photo-4.webp.asset.json";
import p5 from "@/assets/scallop-photo-5.webp.asset.json";
import p6 from "@/assets/scallop-photo-6.webp.asset.json";
import p7 from "@/assets/scallop-photo-7.webp.asset.json";
import p8 from "@/assets/scallop-photo-8.webp.asset.json";

export interface ScallopPhoto {
  url: string;
  altRu: string;
  altEn: string;
}

export const scallopPhotos: ScallopPhoto[] = [
  {
    url: p1.url,
    altRu: "Живой морской гребешок с Сахалина в транспортном ящике после вылова",
    altEn: "Live Sakhalin sea scallops in a crate right after harvest",
  },
  {
    url: p2.url,
    altRu: "Раковины живого гребешка разного окраса на приёмном столе",
    altEn: "Live scallop shells of different colours on the sorting deck",
  },
  {
    url: p3.url,
    altRu: "Замер калибра живого гребешка линейкой: раковины 12-15 см",
    altEn: "Measuring live scallop size with a ruler: 12-15 cm shells",
  },
  {
    url: p4.url,
    altRu: "Шесть раковин сахалинского гребешка одного калибра",
    altEn: "Six Sakhalin scallop shells of the same grade",
  },
  {
    url: p5.url,
    altRu: "Отсортированный живой гребешок перед упаковкой",
    altEn: "Sorted live scallops before packing",
  },
  {
    url: p6.url,
    altRu: "Взвешивание живого гребешка: одна раковина 370 грамм",
    altEn: "Weighing a live scallop: one shell at 370 grams",
  },
  {
    url: p7.url,
    altRu: "Живой гребешок на весах, вес раковины 240 грамм",
    altEn: "Live scallop on the scales, shell weight 240 grams",
  },
  {
    url: p8.url,
    altRu: "Контроль веса партии живого гребешка перед отгрузкой",
    altEn: "Weight control of a live scallop batch before shipment",
  },
];

/** Стабильная выборка нескольких фото со сдвигом (для разнообразия в статьях). */
export function pickScallopPhotos(count: number, offset = 0): ScallopPhoto[] {
  return Array.from({ length: Math.min(count, scallopPhotos.length) }, (_, i) =>
    scallopPhotos[(offset + i) % scallopPhotos.length]
  );
}
