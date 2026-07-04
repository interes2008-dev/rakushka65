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
    title: "Сахалинский морской ёж: что это за деликатес и почему он так ценится",
    description: "Разбираемся, чем так хорош сахалинский морской ёж. Рассказываем про вкус, пользу, способы добычи и почему он считается одним из лучших в мире.",
    date: "2026-04-12",
    image: "/src/assets/blog-urchin-1.jpg",
    routePath: "/blog/morskoj-ezh-sahalin",
  },
  {
    slug: "kak-vybrat-morskogo-ezha",
    title: "Как выбрать свежего морского ежа: советы от поставщика с Сахалина",
    description: "На что смотреть при покупке живого морского ежа. Признаки свежести, правила хранения и частые ошибки покупателей.",
    date: "2026-04-12",
    image: "/src/assets/blog-urchin-2.jpg",
    routePath: "/blog/kak-vybrat-morskogo-ezha",
  },
  {
    slug: "polza-morskogo-ezha",
    title: "Польза морского ежа: состав и свойства для здоровья",
    description: "Честный обзор полезных свойств икры морского ежа. Витамины, минералы, омега-3 и легендарный эхинохром А в деталях.",
    date: "2026-04-12",
    image: "/src/assets/blog-urchin-3.jpg",
    routePath: "/blog/polza-morskogo-ezha",
  },
  // === Морской гребешок ===
  {
    slug: "morskoj-grebeshok-sahalin",
    title: "Сахалинский морской гребешок: королевский деликатес Дальнего Востока",
    description: "Всё про морской гребешок с Сахалина: происхождение, вкус, текстура, польза и из чего складывается цена.",
    date: "2026-04-12",
    image: "/src/assets/blog-scallop-royal.jpg",
    routePath: "/blog/morskoj-grebeshok-sahalin",
  },
  {
    slug: "kak-prigotovit-grebeshok",
    title: "Как приготовить морской гребешок дома: рецепты от шеф-поваров",
    description: "Пошаговые способы приготовления сахалинского гребешка. Обжарка, гриль, карпаччо или паста: выбирайте свой вариант.",
    date: "2026-04-12",
    image: "/src/assets/blog-scallop-card-1.jpg",
    routePath: "/blog/kak-prigotovit-grebeshok",
  },
  {
    slug: "kak-vybrat-grebeshok",
    title: "Как выбрать свежий морской гребешок: советы от профи с острова",
    description: "На что обращать внимание: свежий или замороженный, главные признаки качества и правила хранения.",
    date: "2026-04-12",
    image: "/src/assets/blog-scallop-choose.jpg",
    routePath: "/blog/kak-vybrat-grebeshok",
  },
  {
    slug: "zhivoj-morskoj-grebeshok-sahalin",
    title: "Живой морской гребешок с Сахалина: почему это лучший выбор",
    description: "Чем живой сахалинский гребешок отличается от заморозки. Вкус, текстура, польза и детали прямой поставки.",
    date: "2026-04-25",
    image: "/src/assets/blog-scallop-live-hero.jpg",
    routePath: "/blog/zhivoj-morskoj-grebeshok-sahalin",
  },
  {
    slug: "kak-hranit-zhivogo-grebeshka",
    title: "Как хранить живого морского гребешка дома: пошаговый план",
    description: "Сроки и температура хранения, признаки свежести и что делать, если решили заморозить.",
    date: "2026-04-25",
    image: "/src/assets/blog-scallop-live-storage.jpg",
    routePath: "/blog/kak-hranit-zhivogo-grebeshka",
  },
  {
    slug: "dostavka-zhivogo-grebeshka-rossiya",
    title: "Доставка живого морского гребешка с Сахалина по России",
    description: "Как мы привозим живой деликатес в Москву, Петербург и регионы за 24-48 часов. Упаковка, документы и гарантии.",
    date: "2026-04-25",
    image: "/src/assets/blog-scallop-live-delivery.jpg",
    routePath: "/blog/dostavka-zhivogo-grebeshka-rossiya",
  },
  // === Вонголе ===
  {
    slug: "chto-takoe-vongole",
    title: "Что такое вонголе (морской петушок): редкий деликатес с Сахалина",
    description: "Подробно про вонголе: что за моллюск, откуда такое название, где его ловят на Сахалине и чем он полезен.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-1.jpg",
    routePath: "/blog/chto-takoe-vongole",
  },
  {
    slug: "kak-prigotovit-vongole",
    title: "Как приготовить вонголе дома: простые рецепты с сахалинским уловом",
    description: "Готовим вонголе на домашней кухне. Советы по очистке, хранению и красивой подаче.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-2.jpg",
    routePath: "/blog/kak-prigotovit-vongole",
  },
  {
    slug: "pasta-s-vongole",
    title: "Паста с вонголе: классический рецепт с сахалинскими моллюсками",
    description: "Тот самый итальянский Spaghetti alle Vongole из свежего сахалинского улова. Инструкция с фото.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-3.jpg",
    routePath: "/blog/pasta-s-vongole",
  },
  {
    slug: "kak-vybrat-vongole",
    title: "Как выбрать свежие вонголе: советы от команды Ракушка65",
    description: "На что смотреть при покупке живых вонголе, как определить качество и правильно хранить.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-4.jpg",
    routePath: "/blog/kak-vybrat-vongole",
  },
  {
    slug: "vongole-kak-v-restorane",
    title: "Вонголе как в ресторане: готовим сахалинский деликатес дома",
    description: "Секреты ресторанной подачи вонголе в обычных домашних условиях.",
    date: "2026-04-10",
    image: "/src/assets/blog-vongole-real-5.jpg",
    routePath: "/blog/vongole-kak-v-restorane",
  },
  {
    slug: "polza-vongole",
    title: "Польза вонголе: состав и свойства сахалинских моллюсков",
    description: "Чем полезны вонголе: витамины B12, железо, омега-3. Разбираем пищевую ценность морского петушка.",
    date: "2026-04-12",
    image: "/src/assets/blog-vongole-real-6.jpg",
    routePath: "/blog/polza-vongole",
  },
  {
    slug: "kak-hranit-vongole",
    title: "Как хранить вонголе: правила для живых моллюсков с Сахалина",
    description: "Инструкция по хранению живых вонголе дома: температура, время и подготовка к готовке.",
    date: "2026-04-12",
    image: "/src/assets/blog-vongole-storage.jpg",
    routePath: "/blog/kak-hranit-vongole",
  },
  // === Спизула ===
  {
    slug: "spisula-sahalinskaya",
    title: "Спизула сахалинская: что это за моллюск и почему он популярен",
    description: "Гид по сахалинской спизуле: вкус, текстура, способы готовки и чем она отличается от других.",
    date: "2026-04-12",
    image: "/src/assets/blog-spisula-v2.jpg",
    routePath: "/blog/spisula-sahalinskaya",
  },
  {
    slug: "kak-prigotovit-spisulu",
    title: "Как приготовить спизулу сахалинскую: техники и рецепты",
    description: "Пошаговые способы: сашими, гриль, суп или жарка в воке. Раскрываем вкус моллюска.",
    date: "2026-04-12",
    image: "/src/assets/blog-spisula-v2.jpg",
    routePath: "/blog/kak-prigotovit-spisulu",
  },
  {
    slug: "spisula-vs-vongole",
    title: "Спизула против вонголе: чем отличаются сахалинские моллюски",
    description: "Сравниваем вкус, текстуру, размер и способы приготовления двух популярных ракушек.",
    date: "2026-04-12",
    image: "/src/assets/blog-spisula-v2.jpg",
    routePath: "/blog/spisula-vs-vongole",
  },
  // === Устрицы ===
  {
    slug: "ustritsy-sahalin",
    title: "Сахалинские устрицы: вкус, польза и особенности",
    description: "Всё про наши устрицы: виды, вкус, польза и почему сахалинский улов считается эталонным.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-1.jpg",
    routePath: "/blog/ustritsy-sahalin",
  },
  {
    slug: "kak-vybrat-ustritsy",
    title: "Как выбрать свежие устрицы: советы от Ракушка65",
    description: "Как отличить живую устрицу от несвежей, на что смотреть и как правильно хранить покупку.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-2.jpg",
    routePath: "/blog/kak-vybrat-ustritsy",
  },
  {
    slug: "kak-otkryt-ustritsu",
    title: "Как открыть устрицу дома: простая инструкция",
    description: "Пошаговый гид по правильному вскрытию устриц в домашних условиях без лишних усилий.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-3.jpg",
    routePath: "/blog/kak-otkryt-ustritsu",
  },
  {
    slug: "retsepty-s-ustritsami",
    title: "Рецепты с устрицами: готовим сахалинский улов дома",
    description: "Лучшие идеи: запеченные устрицы, в кляре, супы и традиционная подача на льду.",
    date: "2026-04-11",
    image: "/src/assets/blog-oysters-real-4.jpg",
    routePath: "/blog/retsepty-s-ustritsami",
  },
  // === Трепанг ===
  {
    slug: "trepang-sahalinskij",
    title: "Дальневосточный трепанг: что это за морской женьшень",
    description: "Гид по трепангу: где обитает на Сахалине, из чего состоит и чем полезен этот необычный продукт.",
    date: "2026-04-24",
    image: "/src/assets/blog-trepang-fresh.jpg",
    routePath: "/blog/trepang-sahalinskij",
  },
  {
    slug: "nastojka-na-trepange-recept",
    title: "Настойка на трепанге: классический рецепт с мёдом",
    description: "Готовим настойку дома: пропорции, технология и как правильно принимать этот сахалинский эликсир.",
    date: "2026-04-24",
    image: "/src/assets/blog-trepang-tincture-pour.jpg",
    routePath: "/blog/nastojka-na-trepange-recept",
  },
  {
    slug: "trepang-primenenie",
    title: "Применение трепанга: польза и важные противопоказания",
    description: "Влияние трепанга на иммунитет и сердце. Разбираем состав, схемы приема и на что обратить внимание.",
    date: "2026-04-24",
    image: "/src/assets/blog-trepang-honey.jpg",
    routePath: "/blog/trepang-primenenie",
  },
  {
    slug: "medovaya-nastojka-trepanga",
    title: "Медовая настойка с трепангом без спирта: рецепт и польза",
    description: "Безалкогольный вариант эликсира: как приготовить, как пить и чем полезна для иммунитета.",
    date: "2026-04-25",
    image: "/src/assets/blog-trepang-honey-tincture.jpg",
    routePath: "/blog/medovaya-nastojka-trepanga",
    productTag: "trepang-tincture" as ProductTag,
  },
].map((a): BlogArticle => ({ ...a, productTag: a.productTag ?? detectProductTag(a.slug) }));
