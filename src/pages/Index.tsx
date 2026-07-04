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
    ? "Ракушка65 - Живые морепродукты с Сахалина | Вонголе, устрицы, гребешок с доставкой"
    : "Rakushka65 - Live Seafood from Sakhalin | Vongole, Oysters, Scallops Delivery";

  const description = lang === "ru"
    ? "Купить живые морепродукты с Сахалина: вонголе (морской петушок), устрицы, гребешок, спизула, морской ёж. Прямые поставки с Сахалина, доставка за 24 часа по России. Ракушка65 - редкие сахалинские деликатесы."
    : "Buy live seafood from Sakhalin: vongole, oysters, scallops, spizula, sea urchin. Direct supply from Sakhalin, 24-hour delivery across Russia. Rakushka65.";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead title={title} description={description} lang={lang} jsonLd={[organizationSchema, websiteSchema, localBusinessSchema]} />
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
