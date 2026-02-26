import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";
import FloatingParticles from "@/components/FloatingParticles";
import SEOHead from "@/components/SEOHead";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/seo/schemas";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Index = () => {
  const { lang } = useLanguage();

  const title = lang === "ru"
    ? "Rakushka65 — Премиальные морепродукты Сахалина с доставкой"
    : "Rakushka65 — Premium Sakhalin Seafood with Delivery";

  const description = lang === "ru"
    ? "Купить живые устрицы, морской гребешок, вонголе и другие морепродукты Сахалина с доставкой за 24 часа. Ракушка65 — премиальный поставщик свежих морепродуктов."
    : "Buy live oysters, scallops, vongole and other Sakhalin seafood with 24-hour delivery. Rakushka65 — premium fresh seafood supplier.";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead title={title} description={description} jsonLd={[organizationSchema, websiteSchema, localBusinessSchema]} />
      <WaveBackground />
      <FloatingParticles />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        <AboutSection />
        <ReviewsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
