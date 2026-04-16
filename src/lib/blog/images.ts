import blogUrchin1 from "@/assets/blog-urchin-1.jpg";
import blogUrchin2 from "@/assets/blog-urchin-2.jpg";
import blogUrchin3 from "@/assets/blog-urchin-3.jpg";
import blogScallopCard1 from "@/assets/blog-scallop-card-1.jpg";
import blogScallopCard3 from "@/assets/blog-scallop-card-3.jpg";
import blogVongoleReal1 from "@/assets/blog-vongole-real-1.jpg";
import blogVongoleReal2 from "@/assets/blog-vongole-real-2.jpg";
import blogVongoleReal3 from "@/assets/blog-vongole-real-3.jpg";
import blogVongoleReal4 from "@/assets/blog-vongole-real-4.jpg";
import blogVongoleReal5 from "@/assets/blog-vongole-real-5.jpg";
import blogVongoleReal6 from "@/assets/blog-vongole-real-6.jpg";
import blogSpisula from "@/assets/blog-spisula-v2.jpg";
import blogOysters from "@/assets/blog-oysters-new.jpg";

export const blogImages: Record<string, string> = {
  "/src/assets/blog-urchin-1.jpg": blogUrchin1,
  "/src/assets/blog-urchin-2.jpg": blogUrchin2,
  "/src/assets/blog-urchin-3.jpg": blogUrchin3,
  "/src/assets/blog-scallop-card-1.jpg": blogScallopCard1,
  "/src/assets/blog-scallop-card-3.jpg": blogScallopCard3,
  "/src/assets/blog-vongole-real-1.jpg": blogVongoleReal1,
  "/src/assets/blog-vongole-real-2.jpg": blogVongoleReal2,
  "/src/assets/blog-vongole-real-3.jpg": blogVongoleReal3,
  "/src/assets/blog-vongole-real-4.jpg": blogVongoleReal4,
  "/src/assets/blog-vongole-real-5.jpg": blogVongoleReal5,
  "/src/assets/blog-vongole-real-6.jpg": blogVongoleReal6,
  "/src/assets/blog-spisula-v2.jpg": blogSpisula,
  "/src/assets/blog-oysters-new.jpg": blogOysters,
};

export function getBlogImage(path: string): string {
  return blogImages[path] || path;
}
