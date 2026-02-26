import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";
import { ArrowLeft, FileCheck } from "lucide-react";

const Certificate = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <WaveBackground />
      <Header />
      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="w-8 h-8 text-primary" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold">
              Сертификат «Сделано в России»
            </h1>
          </div>

          <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Наша продукция сертифицирована и соответствует стандартам качества Российской Федерации. 
            Ниже представлен сертификат соответствия, подтверждающий происхождение и качество наших морепродуктов.
          </p>

          <div className="bg-sand-glass rounded-2xl p-4 md:p-6">
            <iframe
              src="/documents/certificate.pdf"
              className="w-full rounded-xl border border-border/30"
              style={{ height: "80vh", minHeight: "600px" }}
              title="Сертификат соответствия — Сделано в России"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="/documents/certificate.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Скачать сертификат (PDF)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificate;
