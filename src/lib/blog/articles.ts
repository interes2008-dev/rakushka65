export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  routePath: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "chto-takoe-vongole",
    title: "Что такое вонголе (морской петушок) — редкий деликатес с Сахалина",
    description: "Подробный гид по вонголе: что это за моллюск, почему его называют морским петушком, где добывается на Сахалине и чем полезен для здоровья.",
    date: "2026-04-10",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop",
    routePath: "/blog/chto-takoe-vongole",
  },
  {
    slug: "kak-prigotovit-vongole",
    title: "Как приготовить вонголе дома — простые рецепты с Сахалинскими моллюсками",
    description: "Пошаговые рецепты приготовления вонголе дома. Советы по очистке, хранению и подаче свежих сахалинских моллюсков.",
    date: "2026-04-10",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop",
    routePath: "/blog/kak-prigotovit-vongole",
  },
  {
    slug: "pasta-s-vongole",
    title: "Паста с вонголе — классический рецепт с сахалинскими моллюсками",
    description: "Классический итальянский рецепт Spaghetti alle Vongole из свежих сахалинских моллюсков. Пошаговая инструкция с фото.",
    date: "2026-04-10",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop",
    routePath: "/blog/pasta-s-vongole",
  },
  {
    slug: "kak-vybrat-vongole",
    title: "Как выбрать свежие вонголе — советы от поставщика с Сахалина",
    description: "На что обращать внимание при покупке живых вонголе, признаки качества и правила хранения. Советы от прямого поставщика с Сахалина.",
    date: "2026-04-10",
    image: "https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?w=600&h=400&fit=crop",
    routePath: "/blog/kak-vybrat-vongole",
  },
  {
    slug: "vongole-kak-v-restorane",
    title: "Вонголе как в ресторане — готовим сахалинский деликатес дома",
    description: "Секреты ресторанного приготовления вонголе в домашних условиях. Подача, сочетания и профессиональные приёмы шефов.",
    date: "2026-04-10",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&h=400&fit=crop",
    routePath: "/blog/vongole-kak-v-restorane",
  },
];
