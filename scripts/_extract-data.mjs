// Извлекаем чистые данные (blogArticles, categoryLandings) через esbuild -> JSON,
// чтобы прогонять их в Node без React/ассетов.
import { build } from "esbuild";
import { writeFileSync } from "fs";

const result = await build({
  stdin: {
    contents: `
      export { blogArticles } from "./src/lib/blog/articles.ts";
      export { categoryLandings } from "./src/lib/seo/categoryLandings.ts";
      export { productFaq } from "./src/lib/seo/productFaq.ts";
    `,
    resolveDir: process.cwd(),
    loader: "ts",
  },
  bundle: true,
  format: "esm",
  platform: "node",
  write: false,
  loader: { ".webp": "text", ".png": "text", ".jpg": "text", ".jpeg": "text", ".svg": "text", ".gif": "text" },
  logLevel: "silent",
});

const code = result.outputFiles[0].text;
const dataUrl = "data:text/javascript;base64," + Buffer.from(code).toString("base64");
const mod = await import(dataUrl);
writeFileSync("scripts/_data.json", JSON.stringify({
  blogArticles: mod.blogArticles,
  categoryLandings: mod.categoryLandings,
  productFaq: mod.productFaq,
}, null, 0));
console.log("blogArticles:", mod.blogArticles.length, "| categoryLandings:", mod.categoryLandings.length, "| productFaq:", Object.keys(mod.productFaq).length);
