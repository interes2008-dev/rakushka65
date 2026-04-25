import { detectProductTag, type ProductTag } from "./productCategories";

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  routePath: string;
  productTag?: ProductTag;
}

export const blogArticles: BlogArticle[] = [
  // === Морской ёж ===
  {
    slug: "morskoj-ezh-sahalin",
    title: "Сахалинский морской ёж — что это за деликатес и почему он так ценится",
    description: "Полный гид по сахалинскому морскому ежу: происхождение, вкус, польза, как добывается и почему считается одним из лучших в мире.",
    date: "2026-04-12",
    image: "/src/assets/blog-urchin-1.jpg",
    routePath: "/blog/morskoj-ezh-sahalin",
  },
  {
    slug: "kak-vybrat-morskogo-ezha",
    title: "Как выбрать свежего морского ежа — советы от поставщика с Сахалина",
    description: "На что обращать внимание при покупке живого морского ежа: признаки свежести, правила хранения, ошибки покупателей.",
    date: "2026-04-12",
    image: "/src/assets/blog-urchin-2.jpg",
    routePath: "/blog/kak-vybrat-morskogo-ezha",
  },
  {
    slug: "polza-morskogo-ezha",
    title: "Польза морского ежа — уникальный состав и свойства для здоровья",
    description: "Научно обоснованный обзор полезных свойств икры морского ежа: витамины, минералы, омега-3, эхинохром А.",
    date: "2026-04-12",
    image: "/src/assets/blog-urchin-3.jpg",
    routePath: "/blog/polza-morskogo-ezha",
  },
  // === Морской гребешок ===
  {
    slug: "morskoj-grebeshok-sahalin",
    title: "Сахалинский морской гребешок — королевский деликатес Дальнего Востока",
    description: "Полный гид по морскому гребешку с Сахалина: происхождение, вкус, текстура, польза и ценообразование.",
    date: "2026-04-12",
    image: "/src/assets/blog-scallop-royal.jpg",
    routePath: "/blog/morskoj-grebeshok-sahalin",
  },
  {
    slug: "kak-prigotovit-grebeshok",
    title: "Как приготовить морской гребешок дома — рецепты от шеф-поваров",
    description: "Пошаговые рецепты приготовления морского гребешка с Сахалина: обжарка, гриль, карпаччо, паста.",
    date: "2026-04-12",
    image: "/src/assets/blog-scallop-card-1.jpg",
    routePath: "/blog/kak-prigotovit-grebeshok",
  },
  {
    slug: "kak-vybrat-grebeshok",
    title: "Как выбрать свежий морской гребешок — советы от поставщика с Сахалина",
    description: "На что обращать внимание при выборе морского гребешка: свежий vs замороженный, признаки качества, правила хранения.",
    date: "2026-04-12",
    image: "/src/assets/blog-scallop-choose.jpg",
    routePath: "/blog/kak-vybrat-grebeshok",
  },
  // === Вонголе ===
  {
    slug: "chto-takoe-vongole",
    title: "Что такое вонголе (морской петушок) — редкий деликатес с Сахалина",
    description: "Подробный гид по вонголе: что это за моллюск, почему его называют морским петушком, где добывается на Сахалине и чем полезен для здоровья.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-1.jpg",
    routePath: "/blog/chto-takoe-vongole",
  },
  {
    slug: "kak-prigotovit-vongole",
    title: "Как приготовить вонголе дома — простые рецепты с Сахалинскими моллюсками",
    description: "Пошаговые рецепты приготовления вонголе дома. Советы по очистке, хранению и подаче свежих сахалинских моллюсков.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-2.jpg",
    routePath: "/blog/kak-prigotovit-vongole",
  },
  {
    slug: "pasta-s-vongole",
    title: "Паста с вонголе — классический рецепт с сахалинскими моллюсками",
    description: "Классический итальянский рецепт Spaghetti alle Vongole из свежих сахалинских моллюсков. Пошаговая инструкция с фото.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-3.jpg",
    routePath: "/blog/pasta-s-vongole",
  },
  {
    slug: "kak-vybrat-vongole",
    title: "Как выбрать свежие вонголе — советы от поставщика с Сахалина",
    description: "На что обращать внимание при покупке живых вонголе, признаки качества и правила хранения.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-4.jpg",
    routePath: "/blog/kak-vybrat-vongole",
  },
  {
    slug: "vongole-kak-v-restorane",
    title: "Вонголе как в ресторане — готовим сахалинский деликатес дома",
    description: "Секреты ресторанного приготовления вонголе в домашних условиях.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-5.jpg",
    routePath: "/blog/vongole-kak-v-restorane",
  },
  {
    slug: "polza-vongole",
    title: "Польза вонголе — состав и полезные свойства сахалинских моллюсков",
    description: "Чем полезны вонголе с Сахалина: витамины B12, железо, омега-3. Научный обзор пищевой ценности морского петушка.",
    date: "2026-04-12",
    image: "/src/assets/blog-vongole-real-6.jpg",
    routePath: "/blog/polza-vongole",
  },
  {
    slug: "kak-hranit-vongole",
    title: "Как хранить вонголе — правила хранения живых моллюсков с Сахалина",
    description: "Подробная инструкция по хранению живых вонголе дома: температура, сроки, подготовка к приготовлению.",
    date: "2026-04-12",
    image: "/src/assets/blog-vongole-storage.jpg",
    routePath: "/blog/kak-hranit-vongole",
  },
  // === Спизула ===
  {
    slug: "spisula-sahalinskaya",
    title: "Спизула сахалинская — что это за моллюск и почему он набирает популярность",
    description: "Полный гид по спизуле сахалинской: происхождение, вкус, текстура, способы приготовления и сравнение с другими моллюсками.",
    date: "2026-04-12",
    image: "/src/assets/blog-spisula-v2.jpg",
    routePath: "/blog/spisula-sahalinskaya",
  },
  {
    slug: "kak-prigotovit-spisulu",
    title: "Как приготовить спизулу сахалинскую — рецепты и техники",
    description: "Пошаговые рецепты приготовления спизулы: сашими, гриль, суп, жарка в воке.",
    date: "2026-04-12",
    image: "/src/assets/blog-spisula-v2.jpg",
    routePath: "/blog/kak-prigotovit-spisulu",
  },
  {
    slug: "spisula-vs-vongole",
    title: "Спизула vs вонголе — чем отличаются сахалинские моллюски",
    description: "Подробное сравнение спизулы и вонголе: вкус, текстура, размер, цена, способы приготовления.",
    date: "2026-04-12",
    image: "/src/assets/blog-spisula-v2.jpg",
    routePath: "/blog/spisula-vs-vongole",
  },
  // === Устрицы ===
  {
    slug: "ustritsy-sahalin",
    title: "Устрицы с Сахалина — что это за деликатес и чем он уникален",
    description: "Всё о сахалинских устрицах: виды, вкус, польза, где добываются и почему считаются одними из лучших в мире.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-1.jpg",
    routePath: "/blog/ustritsy-sahalin",
  },
  {
    slug: "kak-vybrat-ustritsy",
    title: "Как выбрать свежие устрицы — советы от поставщика с Сахалина",
    description: "Как отличить свежую устрицу от несвежей, на что обращать внимание при покупке и как хранить.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-2.jpg",
    routePath: "/blog/kak-vybrat-ustritsy",
  },
  {
    slug: "kak-otkryt-ustritsu",
    title: "Как открыть устрицу дома — пошаговая инструкция",
    description: "Пошаговое руководство, как правильно открыть устрицу в домашних условиях.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-3.jpg",
    routePath: "/blog/kak-otkryt-ustritsu",
  },
  {
    slug: "retsepty-s-ustritsami",
    title: "Рецепты с устрицами — как приготовить сахалинские устрицы дома",
    description: "Лучшие рецепты с устрицами с Сахалина: запечённые, в кляре, суп и классическая подача.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-4.jpg",
    routePath: "/blog/retsepty-s-ustritsami",
  },
  // === Трепанг ===
  {
    slug: "trepang-sahalinskij",
    title: "Трепанг дальневосточный — что это за деликатес и чем он уникален",
    description: "Полный гид по дальневосточному трепангу: что это за животное, где обитает на Сахалине, состав, польза и применение «морского женьшеня».",
    date: "2026-04-24",
    image: "/src/assets/blog-trepang-fresh.jpg",
    routePath: "/blog/trepang-sahalinskij",
  },
  {
    slug: "nastojka-na-trepange-recept",
    title: "Настойка на трепанге — классический рецепт с мёдом и применение",
    description: "Как приготовить настойку на трепанге дома: пропорции, технология, схема приёма. Дальневосточный эликсир молодости из свежего сахалинского трепанга.",
    date: "2026-04-24",
    image: "/src/assets/blog-trepang-tincture-pour.jpg",
    routePath: "/blog/nastojka-na-trepange-recept",
  },
  {
    slug: "trepang-primenenie",
    title: "Применение трепанга — польза, оздоровительные свойства и противопоказания",
    description: "Полезные свойства трепанга и настойки из него: иммунитет, сердце, регенерация. Научный обзор состава, показания, схема приёма и противопоказания.",
    date: "2026-04-24",
    image: "/src/assets/blog-trepang-honey.jpg",
    routePath: "/blog/trepang-primenenie",
  },
].map((a): BlogArticle => ({ ...a, productTag: detectProductTag(a.slug) }));
