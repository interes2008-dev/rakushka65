import blogUrchinReal from "@/assets/blog-urchin-real.png";
import blogScallop from "@/assets/blog-scallop-v2.jpg";
import blogVongole from "@/assets/blog-vongole-v2.jpg";
import blogSpisula from "@/assets/blog-spisula-v2.jpg";
import blogOysters from "@/assets/blog-oysters-new.jpg";

export const blogImages: Record<string, string> = {
  "/src/assets/blog-urchin-1.jpg": blogUrchinReal,
  "/src/assets/blog-urchin-2.jpg": blogUrchinReal,
  "/src/assets/blog-urchin-3.jpg": blogUrchinReal,
  "/src/assets/blog-scallop-v2.jpg": blogScallop,
  "/src/assets/blog-vongole-v2.jpg": blogVongole,
  "/src/assets/blog-spisula-v2.jpg": blogSpisula,
  "/src/assets/blog-oysters-new.jpg": blogOysters,
};

export function getBlogImage(path: string): string {
  return blogImages[path] || path;
}
