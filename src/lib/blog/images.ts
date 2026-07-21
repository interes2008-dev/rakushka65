import blogUrchin1 from "@/assets/blog-urchin-1.webp";
import blogUrchin2 from "@/assets/blog-urchin-2.webp";
import blogUrchin3 from "@/assets/blog-urchin-3.webp";
import blogScallopCard1 from "@/assets/blog-scallop-card-1.webp";
import blogScallopChoose from "@/assets/blog-scallop-choose.webp";
import blogScallopCard3 from "@/assets/blog-scallop-card-3.webp";
import blogScallopRoyal from "@/assets/blog-scallop-royal.webp";
import blogScallopLiveHero from "@/assets/blog-scallop-live-hero.webp";
import blogScallopLiveStorage from "@/assets/blog-scallop-live-storage.webp";
import blogScallopLiveDelivery from "@/assets/blog-scallop-live-delivery.webp";
import blogVongoleReal1 from "@/assets/blog-vongole-real-1.webp";
import blogVongoleReal2 from "@/assets/blog-vongole-real-2.webp";
import blogVongoleReal3 from "@/assets/blog-vongole-real-3.webp";
import blogVongoleReal4 from "@/assets/blog-vongole-real-4.webp";
import blogVongoleReal5 from "@/assets/blog-vongole-real-5.webp";
import blogVongoleReal6 from "@/assets/blog-vongole-real-6.webp";
import blogVongoleStorage from "@/assets/blog-vongole-storage.webp";
import blogSpisula from "@/assets/blog-spisula-v2.webp";
import blogOysters from "@/assets/blog-oysters-new.webp";
import blogOystersReal1 from "@/assets/blog-oysters-real-1.webp";
import blogOystersReal2 from "@/assets/blog-oysters-real-2.webp";
import blogOystersReal3 from "@/assets/blog-oysters-real-3.webp";
import blogOystersReal4 from "@/assets/blog-oysters-real-4.webp";
import blogOystersReal5 from "@/assets/blog-oysters-real-5.webp";
import blogTrepangFresh from "@/assets/blog-trepang-fresh.webp";
import blogTrepangTincturePour from "@/assets/blog-trepang-tincture-pour.webp";
import blogTrepangHoney from "@/assets/blog-trepang-honey.webp";
import blogTrepangHoneyTincture from "@/assets/blog-trepang-honey-tincture.webp";

export const blogImages: Record<string, string> = {
  "/src/assets/blog-urchin-1.jpg": blogUrchin1,
  "/src/assets/blog-urchin-2.jpg": blogUrchin2,
  "/src/assets/blog-urchin-3.jpg": blogUrchin3,
  "/src/assets/blog-scallop-card-1.jpg": blogScallopCard1,
  "/src/assets/blog-scallop-choose.jpg": blogScallopChoose,
  "/src/assets/blog-scallop-card-3.jpg": blogScallopCard3,
  "/src/assets/blog-scallop-royal.jpg": blogScallopRoyal,
  "/src/assets/blog-scallop-live-hero.jpg": blogScallopLiveHero,
  "/src/assets/blog-scallop-live-storage.jpg": blogScallopLiveStorage,
  "/src/assets/blog-scallop-live-delivery.jpg": blogScallopLiveDelivery,
  "/src/assets/blog-vongole-real-1.jpg": blogVongoleReal1,
  "/src/assets/blog-vongole-real-2.jpg": blogVongoleReal2,
  "/src/assets/blog-vongole-real-3.jpg": blogVongoleReal3,
  "/src/assets/blog-vongole-real-4.jpg": blogVongoleReal4,
  "/src/assets/blog-vongole-real-5.jpg": blogVongoleReal5,
  "/src/assets/blog-vongole-real-6.jpg": blogVongoleReal6,
  "/src/assets/blog-vongole-storage.jpg": blogVongoleStorage,
  "/src/assets/blog-spisula-v2.jpg": blogSpisula,
  "/src/assets/blog-oysters-new.jpg": blogOysters,
  "/src/assets/blog-oysters-real-1.jpg": blogOystersReal1,
  "/src/assets/blog-oysters-real-2.jpg": blogOystersReal2,
  "/src/assets/blog-oysters-real-3.jpg": blogOystersReal3,
  "/src/assets/blog-oysters-real-4.jpg": blogOystersReal4,
  "/src/assets/blog-oysters-real-5.jpg": blogOystersReal5,
  "/src/assets/blog-trepang-fresh.jpg": blogTrepangFresh,
  "/src/assets/blog-trepang-tincture-pour.jpg": blogTrepangTincturePour,
  "/src/assets/blog-trepang-honey.jpg": blogTrepangHoney,
  "/src/assets/blog-trepang-honey-tincture.jpg": blogTrepangHoneyTincture,
};

export function getBlogImage(path: string): string {
  return blogImages[path] || path;
}
