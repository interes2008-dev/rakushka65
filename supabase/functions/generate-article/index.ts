import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PRODUCTS = [
  { name: "вонголе (Ruditapes philippinarum)", category: "vongole" },
  { name: "морской гребешок с Сахалина", category: "scallop" },
  { name: "тихоокеанские устрицы с Сахалина", category: "oysters" },
  { name: "спизула (Spisula sachalinensis)", category: "spisula" },
  { name: "морской ёж с Сахалина", category: "urchin" },
];

const ANGLES = [
  "польза и состав", "как выбрать свежие", "история и традиции",
  "сезонность и регионы добычи", "сравнение с аналогами",
  "рецепт ресторанного блюда", "пищевая ценность и БЖУ",
  "правила хранения и транспортировки", "мифы и факты",
  "как подавать к столу и винные пары", "детокс и диета",
  "лайфхаки от шеф-повара", "опыт ракушка65 при добыче и поставке",
];

function slugify(s: string): string {
  const map: Record<string, string> = {
    а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",
    к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",
    х:"h",ц:"c",ч:"ch",ш:"sh",щ:"sch",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya"
  };
  return s.toLowerCase().split("").map(c => map[c] ?? c).join("")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    const angle = ANGLES[Math.floor(Math.random() * ANGLES.length)];

    const systemPrompt = `Ты — главный редактор блога компании "Ракушка65" — прямого поставщика живых морепродуктов с Сахалина. Пишешь экспертные SEO-статьи на русском языке, демонстрируя E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Тон — профессиональный, тёплый, с конкретикой (цифры, регионы, виды). В тексте упоминай "Ракушка65" 1-2 раза органично. Структура: H2/H3 подзаголовки, списки, 800-1200 слов. Возвращай результат строго через tool call.`;

    const userPrompt = `Напиши уникальную статью для блога. Продукт: ${product.name}. Угол подачи: ${angle}. Сгенерируй заголовок, мета-описание (до 160 символов), краткое описание (1-2 предложения для карточки) и HTML-контент статьи (только теги h2, h3, p, ul, ol, li, strong — без img, без html/body/head). Сегодняшняя дата: ${new Date().toISOString().slice(0,10)}.`;

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [{
          type: "function",
          function: {
            name: "publish_article",
            description: "Опубликовать статью",
            parameters: {
              type: "object",
              properties: {
                title: { type: "string", description: "Заголовок 50-80 символов" },
                seo_title: { type: "string", description: "SEO title до 60 символов" },
                seo_description: { type: "string", description: "Meta description до 160 символов" },
                description: { type: "string", description: "Короткое описание для карточки (1-2 предложения)" },
                content_html: { type: "string", description: "HTML контент статьи" },
              },
              required: ["title", "seo_title", "seo_description", "description", "content_html"],
              additionalProperties: false,
            },
          },
        }],
        tool_choice: { type: "function", function: { name: "publish_article" } },
      }),
    });

    if (!aiResp.ok) {
      const t = await aiResp.text();
      console.error("AI error:", aiResp.status, t);
      if (aiResp.status === 429) return new Response(JSON.stringify({ error: "rate_limit" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (aiResp.status === 402) return new Response(JSON.stringify({ error: "credits_exhausted" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      throw new Error(`AI gateway error ${aiResp.status}`);
    }

    const data = await aiResp.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in response");
    const args = JSON.parse(toolCall.function.arguments);

    const date = new Date().toISOString().slice(0, 10);
    const baseSlug = slugify(args.title);
    const slug = `${baseSlug}-${date}`;

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
    const { data: inserted, error } = await supabase.from("articles").insert({
      slug,
      title: args.title,
      description: args.description,
      content_html: args.content_html,
      category: product.category,
      seo_title: args.seo_title,
      seo_description: args.seo_description,
    }).select().single();

    if (error) throw error;

    console.log("Published article:", slug);
    return new Response(JSON.stringify({ success: true, article: inserted }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-article error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
