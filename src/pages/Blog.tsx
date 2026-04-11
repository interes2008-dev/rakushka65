import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import { blogArticles } from "@/lib/blog/articles";
import { Calendar } from "lucide-react";

const Blog = () => {
  return (
    <div className="relative min-h-screen">
      <SEOHead
        title="Блог о морепродуктах с Сахалина — рецепты, советы, гиды | Ракушка65"
        description="Блог Ракушка65: статьи о вонголе, устрицах, гребешке и других морепродуктах с Сахалина. Рецепты, советы по выбору и приготовлению деликатесов."
        lang="ru"
      />
      <FloatingParticles />
      <Header />
      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Блог <span className="text-primary">Ракушка65</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Статьи о морепродуктах с Сахалина: рецепты, гиды по выбору и приготовлению редких деликатесов Тихого океана
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={article.routePath}
                  className="group block rounded-xl overflow-hidden border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
