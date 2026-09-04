import s1 from "@/assets/blog-scallop-photo-1.webp";
import s2 from "@/assets/blog-scallop-photo-2.webp";
import s3 from "@/assets/blog-scallop-photo-3.webp";
import s4 from "@/assets/blog-scallop-photo-4.webp";
import s5 from "@/assets/blog-scallop-photo-5.webp";
import s6 from "@/assets/blog-scallop-photo-6.webp";
import s7 from "@/assets/blog-scallop-photo-7.webp";
import s8 from "@/assets/blog-scallop-photo-8.webp";
import s9 from "@/assets/blog-scallop-photo-9.webp";

export interface ScallopPhoto {
  url: string;
  altRu: string;
  altEn: string;
}

export const scallopPhotos: ScallopPhoto[] = [
  { url: s1, altRu: "Морской гребешок с Сахалина: раковины разного размера и окраса", altEn: "Sakhalin scallops: shells of different size and colour" },
  { url: s2, altRu: "Замер сахалинского гребешка линейкой, крупная раковина", altEn: "Measuring a Sakhalin scallop with a ruler, large shell" },
  { url: s3, altRu: "Крупные раковины сахалинского гребешка вблизи", altEn: "Large Sakhalin scallop shells up close" },
  { url: s4, altRu: "Ящик со свежим живым гребешком с Сахалина", altEn: "A crate of fresh live Sakhalin scallops" },
  { url: s5, altRu: "Взвешивание сахалинского гребешка, вес одной раковины", altEn: "Weighing a Sakhalin scallop, one shell on the scale" },
  { url: s6, altRu: "Живой гребешок с Сахалина на весах в цехе", altEn: "Live Sakhalin scallop on the facility scale" },
  { url: s7, altRu: "Контроль веса сахалинского гребешка при приёмке", altEn: "Weight check of Sakhalin scallop at intake" },
  { url: s8, altRu: "Крупная партия сахалинского гребешка на сортировке", altEn: "A large batch of Sakhalin scallop being sorted" },
  { url: s9, altRu: "Гребешок с Сахалина в термоящиках со льдом перед отправкой", altEn: "Sakhalin scallop in foam boxes with ice before shipping" },
];

export function pickScallopPhotos(count: number, offset = 0): ScallopPhoto[] {
  return Array.from({ length: Math.min(count, scallopPhotos.length) }, (_, i) =>
    scallopPhotos[(offset + i) % scallopPhotos.length]
  );
}
