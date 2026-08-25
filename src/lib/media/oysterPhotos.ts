import p1 from "@/assets/oyster-photo-1.webp.asset.json";
import p2 from "@/assets/oyster-photo-2.webp.asset.json";
import p3 from "@/assets/oyster-photo-3.webp.asset.json";
import p4 from "@/assets/oyster-photo-4.webp.asset.json";
import p5 from "@/assets/oyster-photo-5.webp.asset.json";
import p6 from "@/assets/oyster-photo-6.webp.asset.json";
import p7 from "@/assets/oyster-photo-7.webp.asset.json";
import p8 from "@/assets/oyster-photo-8.webp.asset.json";
import p9 from "@/assets/oyster-photo-9.webp.asset.json";
import p10 from "@/assets/oyster-photo-10.webp.asset.json";
import p11 from "@/assets/oyster-photo-11.webp.asset.json";
import p12 from "@/assets/oyster-photo-12.webp.asset.json";
import p13 from "@/assets/oyster-photo-13.webp.asset.json";
import p14 from "@/assets/oyster-photo-14.webp.asset.json";
import p15 from "@/assets/oyster-photo-15.webp.asset.json";
import p16 from "@/assets/oyster-photo-16.webp.asset.json";
import p17 from "@/assets/oyster-photo-17.webp.asset.json";

import { ScallopPhoto } from "@/lib/media/scallopPhotos";

export type OysterPhoto = ScallopPhoto;

export const oysterPhotos: OysterPhoto[] = [
  {
    url: p1.url,
    altRu: "Плантация сахалинских устриц на мелководье в прозрачной воде",
    altEn: "Sakhalin oyster beds in shallow, clear seawater",
  },
  {
    url: p2.url,
    altRu: "Дегустация свежих устриц прямо на устричной банке",
    altEn: "Tasting fresh oysters right on the oyster bed",
  },
  {
    url: p3.url,
    altRu: "Открытые сахалинские устрицы с полным мясом и линейкой для замера",
    altEn: "Opened Sakhalin oysters with full meat and a size gauge",
  },
  {
    url: p4.url,
    altRu: "Живые устрицы на льду после зимней добычи",
    altEn: "Live oysters on ice after a winter harvest",
  },
  {
    url: p5.url,
    altRu: "Сахалинские устрицы на льду в лучах закатного солнца",
    altEn: "Sakhalin oysters on ice in the sunset light",
  },
  {
    url: p6.url,
    altRu: "Партия живых устриц у кромки воды перед сортировкой",
    altEn: "A batch of live oysters at the waterline before sorting",
  },
  {
    url: p7.url,
    altRu: "Крупные устрицы одного калибра на снегу",
    altEn: "Large oysters of the same grade on snow",
  },
  {
    url: p8.url,
    altRu: "Садки с устрицами в море на приливной воде",
    altEn: "Oyster cages in the sea on tidal water",
  },
  {
    url: p9.url,
    altRu: "Сетные мешки с устрицами на выдержке в морской воде",
    altEn: "Mesh sacks of oysters held in seawater",
  },
  {
    url: p10.url,
    altRu: "Свежевыловленные устрицы в промысловом садке",
    altEn: "Freshly harvested oysters in a fishing net bag",
  },
  {
    url: p11.url,
    altRu: "Крупные сахалинские устрицы на песке рядом с зажигалкой для масштаба",
    altEn: "Large Sakhalin oysters on sand next to a lighter for scale",
  },
  {
    url: p12.url,
    altRu: "Живые устрицы разложены на мокром песке во время отлива",
    altEn: "Live oysters laid out on wet sand at low tide",
  },
  {
    url: p13.url,
    altRu: "Устрицы у самой кромки прибоя на сахалинском берегу",
    altEn: "Oysters at the water's edge on a Sakhalin beach",
  },
  {
    url: p14.url,
    altRu: "Партия отобранных устриц одного калибра на берегу",
    altEn: "A batch of selected same-grade oysters on the shore",
  },
  {
    url: p15.url,
    attrPlaceholder: undefined as never,
    altRu: "Живые устрицы в промысловом ящике сразу после подъёма",
    altEn: "Live oysters in a harvest crate right after lifting",
  },
  {
    url: p16.url,
    altRu: "Устрицы уложены в термоящик из пенопласта для отправки",
    altEn: "Oysters packed in a styrofoam thermal box for shipping",
  },
  {
    url: p17.url,
    altRu: "Открытые сахалинские устрицы в котелке на берегу моря",
    altEn: "Shucked Sakhalin oysters in a pot by the seashore",
  },

];

/** Стабильная выборка нескольких фото со сдвигом (для разнообразия в статьях). */
export function pickOysterPhotos(count: number, offset = 0): OysterPhoto[] {
  return Array.from({ length: Math.min(count, oysterPhotos.length) }, (_, i) =>
    oysterPhotos[(offset + i) % oysterPhotos.length]
  );
}
