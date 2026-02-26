import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";
import { ArrowLeft, FileCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";

const Certificate = () => {
  const { t, lang } = useLanguage();

  const title = lang === "ru"
    ? "Сертификат «Сделано в России» — Rakushka65"
    : "'Made in Russia' Certificate — Rakushka65";

  const description = lang === "ru"
    ? "Сертификат качества «Сделано в России» подтверждает премиальное качество морепродуктов Rakushka65 с Сахалина."
    : "The 'Made in Russia' quality certificate confirms premium quality of Rakushka65 Sakhalin seafood.";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead title={title} description={description} />
      <WaveBackground />
      <Header />
      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />{t.certificate.backHome}
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="w-8 h-8 text-primary" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold">{t.certificate.title}</h1>
          </div>
          <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-2xl">{t.certificate.description}</p>
          <div className="bg-sand-glass rounded-2xl p-4 md:p-8">
            <img src="/documents/certificate-page1.jpg" alt={`${t.certificate.title} — Rakushka65`} className="w-full rounded-xl border border-border/30" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificate;
