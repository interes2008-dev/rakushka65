import blogUrchin1 from "@/assets/blog-urchin-1.jpg";
import blogUrchin2 from "@/assets/blog-urchin-2.jpg";
import blogUrchin3 from "@/assets/blog-urchin-3.jpg";
import blogScallopCard1 from "@/assets/blog-scallop-card-1.jpg";
import blogScallopChoose from "@/assets/blog-scallop-choose.jpg";
import blogScallopCard3 from "@/assets/blog-scallop-card-3.jpg";
import blogScallopRoyal from "@/assets/blog-scallop-royal.jpg";
import blogVongoleReal1 from "@/assets/blog-vongole-real-1.jpg";
import blogVongoleReal2 from "@/assets/blog-vongole-real-2.jpg";
import blogVongoleReal3 from "@/assets/blog-vongole-real-3.jpg";
import blogVongoleReal4 from "@/assets/blog-vongole-real-4.jpg";
import blogVongoleReal5 from "@/assets/blog-vongole-real-5.jpg";
import blogVongoleReal6 from "@/assets/blog-vongole-real-6.jpg";
import blogVongoleStorage from "@/assets/blog-vongole-storage.jpg";
import blogSpisula from "@/assets/blog-spisula-v2.jpg";
import blogOysters from "@/assets/blog-oysters-new.jpg";
import blogOystersReal1 from "@/assets/blog-oysters-real-1.jpg";
import blogOystersReal2 from "@/assets/blog-oysters-real-2.jpg";
import blogOystersReal3 from "@/assets/blog-oysters-real-3.jpg";
import blogOystersReal4 from "@/assets/blog-oysters-real-4.jpg";
import blogOystersReal5 from "@/assets/blog-oysters-real-5.jpg";
import blogTrepangFresh from "@/assets/blog-trepang-fresh.jpg";
import blogTrepangTincturePour from "@/assets/blog-trepang-tincture-pour.jpg";
import blogTrepangHoney from "@/assets/blog-trepang-honey.jpg";
import blogTrepangHoneyTincture from "@/assets/blog-trepang-honey-tincture.jpg";

export const blogImages: Record<string, string> = {
  "/src/assets/blog-urchin-1.jpg": blogUrchin1,
  "/src/assets/blog-urchin-2.jpg": blogUrchin2,
  "/src/assets/blog-urchin-3.jpg": blogUrchin3,
  "/src/assets/blog-scallop-card-1.jpg": blogScallopCard1,
  "/src/assets/blog-scallop-choose.jpg": blogScallopChoose,
  "/src/assets/blog-scallop-card-3.jpg": blogScallopCard3,
  "/src/assets/blog-scallop-royal.jpg": blogScallopRoyal,
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
};

export function getBlogImage(path: string): string {
  return blogImages[path] || path;
}
