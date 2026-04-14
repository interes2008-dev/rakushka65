import blogUrchin1 from "@/assets/blog-urchin-1.jpg";
import blogUrchin2 from "@/assets/blog-urchin-2.jpg";
import blogUrchin3 from "@/assets/blog-urchin-3.jpg";
import blogScallop1 from "@/assets/blog-scallop-1.jpg";
import blogScallop2 from "@/assets/blog-scallop-2.jpg";
import blogScallop3 from "@/assets/blog-scallop-3.jpg";
import blogVongole1 from "@/assets/blog-vongole-1.jpg";
import blogVongole2 from "@/assets/blog-vongole-2.jpg";
import blogVongole3 from "@/assets/blog-vongole-3.jpg";
import blogVongole4 from "@/assets/blog-vongole-4.jpg";
import blogVongole5 from "@/assets/blog-vongole-5.jpg";
import blogVongole6 from "@/assets/blog-vongole-6.jpg";
import blogVongole7 from "@/assets/blog-vongole-7.jpg";
import blogSpisula1 from "@/assets/blog-spisula-1.jpg";
import blogSpisula2 from "@/assets/blog-spisula-2.jpg";
import blogSpisula3 from "@/assets/blog-spisula-3.jpg";
import blogOysters1 from "@/assets/blog-oysters-1.jpg";
import blogOysters2 from "@/assets/blog-oysters-2.jpg";
import blogOysters3 from "@/assets/blog-oysters-3.jpg";
import blogOysters4 from "@/assets/blog-oysters-4.jpg";

export const blogImages: Record<string, string> = {
  "blog-urchin-1": blogUrchin1,
  "blog-urchin-2": blogUrchin2,
  "blog-urchin-3": blogUrchin3,
  "blog-scallop-1": blogScallop1,
  "blog-scallop-2": blogScallop2,
  "blog-scallop-3": blogScallop3,
  "blog-vongole-1": blogVongole1,
  "blog-vongole-2": blogVongole2,
  "blog-vongole-3": blogVongole3,
  "blog-vongole-4": blogVongole4,
  "blog-vongole-5": blogVongole5,
  "blog-vongole-6": blogVongole6,
  "blog-vongole-7": blogVongole7,
  "blog-spisula-1": blogSpisula1,
  "blog-spisula-2": blogSpisula2,
  "blog-spisula-3": blogSpisula3,
  "blog-oysters-1": blogOysters1,
  "blog-oysters-2": blogOysters2,
  "blog-oysters-3": blogOysters3,
  "blog-oysters-4": blogOysters4,
};

export function getBlogImage(key: string): string {
  return blogImages[key] || key;
}
