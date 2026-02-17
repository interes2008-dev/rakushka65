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

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
