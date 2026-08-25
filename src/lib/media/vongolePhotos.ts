import p1 from "@/assets/vongole-photo-1.webp.asset.json";
import p2 from "@/assets/vongole-photo-2.webp.asset.json";
import p3 from "@/assets/vongole-photo-3.webp.asset.json";
import p4 from "@/assets/vongole-photo-4.webp.asset.json";
import p5 from "@/assets/vongole-photo-5.webp.asset.json";
import p6 from "@/assets/vongole-photo-6.webp.asset.json";
import p7 from "@/assets/vongole-photo-7.webp.asset.json";
import p8 from "@/assets/vongole-photo-8.webp.asset.json";
import { ScallopPhoto } from "@/lib/media/scallopPhotos";

export type VongolePhoto = ScallopPhoto;

export const vongolePhotos: VongolePhoto[] = [
  {
    url: p1.url,
    altRu: "Свежевыловленные живые вонголе с морской травой крупным планом",
    altEn: "Freshly harvested live vongole clams with sea grass, close-up",
  },
  {
    url: p2.url,
    altRu: "Отсортированные вонголе одного калибра перед упаковкой",
    altEn: "Sorted vongole clams of one grade before packing",
  },
  {
    url: p3.url,
    altRu: "Живые вонголе в промысловом ящике после промывки",
    altEn: "Live vongole clams in a fishing crate after rinsing",
  },
  {
    url: p4.url,
    altRu: "Вонголе на деревянном настиле цеха на Сахалине",
    altEn: "Vongole clams on the wooden deck of our Sakhalin facility",
  },
  {
    url: p5.url,
    altRu: "Калиброванные сахалинские вонголе, вид сверху",
    altEn: "Graded Sakhalin vongole clams, top view",
  },
  {
    url: p6.url,
    altRu: "Мешки с живыми вонголе на мелководье после добычи",
    altEn: "Sacks of live vongole in shallow water right after harvest",
  },
  {
    url: p7.url,
    altRu: "Синий ящик с живыми вонголе на приёмке",
    altEn: "Blue crate with live vongole at the intake point",
  },
  {
    url: p8.url,
    altRu: "Термоконтейнер с живыми вонголе, подготовленный к отправке",
    altEn: "Thermal box packed with live vongole ready for shipment",
  },
];

/** Стабильная выборка нескольких фото со сдвигом (для разнообразия в статьях). */
export function pickVongolePhotos(count: number, offset = 0): VongolePhoto[] {
  return Array.from({ length: Math.min(count, vongolePhotos.length) }, (_, i) =>
    vongolePhotos[(offset + i) % vongolePhotos.length]
  );
}
