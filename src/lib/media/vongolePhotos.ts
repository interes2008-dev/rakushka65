import type { ScallopPhoto } from "@/lib/media/scallopPhotos";
import v1 from "@/assets/blog-vongole-photo-1.webp";
import v2 from "@/assets/blog-vongole-photo-2.webp";
import v3 from "@/assets/blog-vongole-photo-3.webp";
import v4 from "@/assets/blog-vongole-photo-4.webp";
import v5 from "@/assets/blog-vongole-photo-5.webp";
import v6 from "@/assets/blog-vongole-photo-6.webp";

export type VongolePhoto = ScallopPhoto;

export const vongolePhotos: VongolePhoto[] = [
  { url: v1, altRu: "Улов вонголе с Сахалина в мешках и вёдрах у воды", altEn: "Sakhalin vongole catch in bags and buckets by the water" },
  { url: v2, altRu: "Полный ящик свежих вонголе с Сахалина", altEn: "A full crate of fresh Sakhalin vongole" },
  { url: v3, altRu: "Замер сахалинских вонголе линейкой, калибр раковины", altEn: "Measuring Sakhalin vongole with a ruler, shell size" },
  { url: v4, altRu: "Свежие вонголе с Сахалина, отборные раковины", altEn: "Fresh Sakhalin vongole, graded shells" },
  { url: v5, altRu: "Живые вонголе на палубе после промысла", altEn: "Live vongole on deck after the catch" },
  { url: v6, altRu: "Свежий улов вонголе с Сахалина крупным планом", altEn: "Fresh Sakhalin vongole catch, close-up" },
];

export function pickVongolePhotos(count: number, offset = 0): VongolePhoto[] {
  return Array.from({ length: Math.min(count, vongolePhotos.length) }, (_, i) =>
    vongolePhotos[(offset + i) % vongolePhotos.length]
  );
}
