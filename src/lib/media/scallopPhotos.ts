import s1 from "@/assets/blog-scallop-photo-1.webp";
import s2 from "@/assets/blog-scallop-photo-2.webp";
import s3 from "@/assets/blog-scallop-photo-3.webp";
import s4 from "@/assets/blog-scallop-photo-4.webp";
import s5 from "@/assets/blog-scallop-photo-5.webp";
import s6 from "@/assets/blog-scallop-photo-6.webp";
import s7 from "@/assets/blog-scallop-photo-7.webp";
import s8 from "@/assets/blog-scallop-photo-8.webp";
import s9 from "@/assets/blog-scallop-photo-9.webp";
import s10 from "@/assets/blog-scallop-photo-10.webp";
import s11 from "@/assets/blog-scallop-photo-11.webp";
import s12 from "@/assets/blog-scallop-photo-12.webp";
import videoPoster from "@/assets/scallop-video-poster.webp";

export interface ScallopPhoto {
  /** Картинка плитки (для видео это постер) */
  url: string;
  altRu: string;
  altEn: string;
  /** Если задано, элемент открывается как видео */
  video?: string;
}

export const scallopPhotos: ScallopPhoto[] = [
  {
    url: videoPoster,
    video: "/video/scallop-live.mp4",
    altRu: "Видео: живой сахалинский гребешок в цехе и вскрытие раковины",
    altEn: "Video: live Sakhalin scallop at the facility and shucking",
  },
  { url: s1, altRu: "Морской гребешок с Сахалина: раковины разного размера и окраса", altEn: "Sakhalin scallops: shells of different size and colour" },
  { url: s2, altRu: "Замер сахалинского гребешка линейкой, крупная раковина", altEn: "Measuring a Sakhalin scallop with a ruler, large shell" },
  { url: s3, altRu: "Крупные раковины сахалинского гребешка вблизи", altEn: "Large Sakhalin scallop shells up close" },
  { url: s4, altRu: "Ящик со свежим живым гребешком с Сахалина", altEn: "A crate of fresh live Sakhalin scallops" },
  { url: s5, altRu: "Взвешивание сахалинского гребешка, вес одной раковины", altEn: "Weighing a Sakhalin scallop, one shell on the scale" },
  { url: s6, altRu: "Живой гребешок с Сахалина на весах в цехе", altEn: "Live Sakhalin scallop on the facility scale" },
  { url: s7, altRu: "Контроль веса сахалинского гребешка при приёмке", altEn: "Weight check of Sakhalin scallop at intake" },
  { url: s8, altRu: "Крупная партия сахалинского гребешка на сортировке", altEn: "A large batch of Sakhalin scallop being sorted" },
  { url: s9, altRu: "Гребешок с Сахалина в термоящиках со льдом перед отправкой", altEn: "Sakhalin scallop in foam boxes with ice before shipping" },
  { url: s10, altRu: "Раскрытый сахалинский гребешок с крупным мускулом в руке", altEn: "Opened Sakhalin scallop with a large muscle held in hand" },
  { url: s11, altRu: "Живой гребешок с приоткрытой раковиной на решётке цеха", altEn: "Live scallop with a slightly open shell on the facility grate" },
  { url: s12, altRu: "Вскрытие сахалинского гребешка ножом при разделке", altEn: "Shucking a Sakhalin scallop with a knife" },
];

export function pickScallopPhotos(count: number, offset = 0): ScallopPhoto[] {
  return Array.from({ length: Math.min(count, scallopPhotos.length) }, (_, i) =>
    scallopPhotos[(offset + i) % scallopPhotos.length]
  );
}
