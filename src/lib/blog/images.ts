import blogUrchin1 from "@/assets/blog-urchin-1.jpg";
import blogUrchin2 from "@/assets/blog-urchin-2.jpg";
import blogUrchin3 from "@/assets/blog-urchin-3.jpg";
import blogScallop from "@/assets/blog-scallop-v2.jpg";
import blogVongole from "@/assets/blog-vongole-v2.jpg";
import blogSpisula from "@/assets/blog-spisula-v2.jpg";
import blogOysters from "@/assets/blog-oysters-new.jpg";
import blogOystersReal from "@/assets/blog-oysters-real.png";

export const blogImages: Record<string, string> = {
  "/src/assets/blog-urchin-1.jpg": blogUrchin1,
  "/src/assets/blog-urchin-2.jpg": blogUrchin2,
  "/src/assets/blog-urchin-3.jpg": blogUrchin3,
  "/src/assets/blog-scallop-v2.jpg": blogScallop,
  "/src/assets/blog-vongole-v2.jpg": blogVongole,
  "/src/assets/blog-spisula-v2.jpg": blogSpisula,
  "/src/assets/blog-oysters-new.jpg": blogOysters,
};

export function getBlogImage(path: string): string {
  return blogImages[path] || path;
}
