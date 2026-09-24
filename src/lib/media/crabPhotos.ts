import type { ScallopPhoto } from "@/lib/media/scallopPhotos";
import videoPoster from "@/assets/crab-video-poster.webp";
import c1 from "@/assets/crab-photo-1.webp";
import c2 from "@/assets/crab-photo-2.webp";
import c3 from "@/assets/crab-photo-3.webp";
import c4 from "@/assets/crab-photo-4.webp";
import c5 from "@/assets/crab-photo-5.webp";
import c6 from "@/assets/crab-photo-6.webp";
import c7 from "@/assets/crab-photo-7.webp";
import c8 from "@/assets/crab-photo-8.webp";
import c9 from "@/assets/crab-photo-9.webp";

export type CrabPhoto = ScallopPhoto;

export const crabPhotos: CrabPhoto[] = [
  {
    url: videoPoster,
    video: "/video/crab-live.mp4",
    altRu: "Видео: живой мохнаторукий краб в бассейне передержки",
    altEn: "Video: live hairy crab in the holding tank",
  },
  { url: c1, altRu: "Живой мохнаторукий краб целиком, вид сверху", altEn: "Live hairy crab, full top-down view" },
  { url: c2, altRu: "Клешни мохнаторукого краба крупным планом, тёмные «варежки» из ворса", altEn: "Hairy crab claws close-up with dark furry mittens" },
  { url: c3, altRu: "Мохнаторукий краб крупным планом на площадке весов", altEn: "Hairy crab close-up on the scale platform" },
  { url: c4, altRu: "Взвешивание мохнаторукого краба, 160 граммов", altEn: "Weighing a hairy crab at 160 grams" },
  { url: c5, altRu: "Взвешивание мохнаторукого краба, 180 граммов на приёмке", altEn: "Weighing a hairy crab at 180 grams during intake" },
  { url: c6, altRu: "Панцирь и ходильные ноги мохнаторукого краба вблизи", altEn: "Shell and walking legs of a hairy crab up close" },
  { url: c7, altRu: "Живой мохнаторукий краб в ванне с водой на передержке", altEn: "Live hairy crab in a water tank during holding" },
  { url: c8, altRu: "Партия живого мохнаторукого краба в бассейне цеха", altEn: "A batch of live hairy crab in the facility tank" },
  { url: c9, altRu: "Живой краб в бассейне перед калибровкой и отгрузкой", altEn: "Live crab in the tank before grading and shipping" },
];
