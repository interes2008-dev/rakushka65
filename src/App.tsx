import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import MobileContactBar from "./components/MobileContactBar";
// Главная грузится сразу (первый экран), остальное - лениво
import Index from "./pages/Index";

const Catalog = lazy(() => import("./pages/Catalog"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Offer = lazy(() => import("./pages/Offer"));
const Certificate = lazy(() => import("./pages/Certificate"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
// Vongole cluster
const VongoleWhatIs = lazy(() => import("./pages/articles/VongoleWhatIs"));
const VongoleCooking = lazy(() => import("./pages/articles/VongoleCooking"));
const VongolePasta = lazy(() => import("./pages/articles/VongolePasta"));
const VongoleChoose = lazy(() => import("./pages/articles/VongoleChoose"));
const VongoleRestaurant = lazy(() => import("./pages/articles/VongoleRestaurant"));
const VongoleBenefits = lazy(() => import("./pages/articles/VongoleBenefits"));
const VongoleStorage = lazy(() => import("./pages/articles/VongoleStorage"));
// Oysters cluster
const OystersWhatIs = lazy(() => import("./pages/articles/OystersWhatIs"));
const OystersChoose = lazy(() => import("./pages/articles/OystersChoose"));
const OystersOpen = lazy(() => import("./pages/articles/OystersOpen"));
const OystersRecipes = lazy(() => import("./pages/articles/OystersRecipes"));
// Sea urchin cluster
const SeaUrchinWhat = lazy(() => import("./pages/articles/SeaUrchinWhat"));
const SeaUrchinChoose = lazy(() => import("./pages/articles/SeaUrchinChoose"));
const SeaUrchinBenefits = lazy(() => import("./pages/articles/SeaUrchinBenefits"));
// Scallop cluster
const ScallopWhat = lazy(() => import("./pages/articles/ScallopWhat"));
const ScallopCooking = lazy(() => import("./pages/articles/ScallopCooking"));
const ScallopChoose = lazy(() => import("./pages/articles/ScallopChoose"));
const ScallopLiveSakhalin = lazy(() => import("./pages/articles/ScallopLiveSakhalin"));
const ScallopLiveStorage = lazy(() => import("./pages/articles/ScallopLiveStorage"));
const ScallopLiveDelivery = lazy(() => import("./pages/articles/ScallopLiveDelivery"));
// Spisula cluster
const SpisulaWhat = lazy(() => import("./pages/articles/SpisulaWhat"));
const SpisulaCooking = lazy(() => import("./pages/articles/SpisulaCooking"));
const SpisulaCompare = lazy(() => import("./pages/articles/SpisulaCompare"));
// Trepang cluster
const TrepangWhat = lazy(() => import("./pages/articles/TrepangWhat"));
const TrepangTinctureRecipe = lazy(() => import("./pages/articles/TrepangTinctureRecipe"));
const TrepangBenefits = lazy(() => import("./pages/articles/TrepangBenefits"));
const TrepangHoneyTincture = lazy(() => import("./pages/articles/TrepangHoneyTincture"));
const DynamicArticle = lazy(() => import("./pages/DynamicArticle"));
const SeoCheck = lazy(() => import("./pages/SeoCheck"));
const CategoryLanding = lazy(() => import("./pages/CategoryLanding"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" aria-label="Загрузка" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:id" element={<ProductDetail />} />
              <Route path="/category/:slug" element={<CategoryLanding />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/seo-check" element={<SeoCheck />} />
              {/* Sea urchin */}
              <Route path="/blog/morskoj-ezh-sahalin" element={<SeaUrchinWhat />} />
              <Route path="/blog/kak-vybrat-morskogo-ezha" element={<SeaUrchinChoose />} />
              <Route path="/blog/polza-morskogo-ezha" element={<SeaUrchinBenefits />} />
              {/* Scallop */}
              <Route path="/blog/morskoj-grebeshok-sahalin" element={<ScallopWhat />} />
              <Route path="/blog/kak-prigotovit-grebeshok" element={<ScallopCooking />} />
              <Route path="/blog/kak-vybrat-grebeshok" element={<ScallopChoose />} />
              <Route path="/blog/zhivoj-morskoj-grebeshok-sahalin" element={<ScallopLiveSakhalin />} />
              <Route path="/blog/kak-hranit-zhivogo-grebeshka" element={<ScallopLiveStorage />} />
              <Route path="/blog/dostavka-zhivogo-grebeshka-rossiya" element={<ScallopLiveDelivery />} />
              {/* Vongole */}
              <Route path="/blog/chto-takoe-vongole" element={<VongoleWhatIs />} />
              <Route path="/blog/kak-prigotovit-vongole" element={<VongoleCooking />} />
              <Route path="/blog/pasta-s-vongole" element={<VongolePasta />} />
              <Route path="/blog/kak-vybrat-vongole" element={<VongoleChoose />} />
              <Route path="/blog/vongole-kak-v-restorane" element={<VongoleRestaurant />} />
              <Route path="/blog/polza-vongole" element={<VongoleBenefits />} />
              <Route path="/blog/kak-hranit-vongole" element={<VongoleStorage />} />
              {/* Spisula */}
              <Route path="/blog/spisula-sahalinskaya" element={<SpisulaWhat />} />
              <Route path="/blog/kak-prigotovit-spisulu" element={<SpisulaCooking />} />
              <Route path="/blog/spisula-vs-vongole" element={<SpisulaCompare />} />
              {/* Oysters */}
              <Route path="/blog/ustritsy-sahalin" element={<OystersWhatIs />} />
              <Route path="/blog/kak-vybrat-ustritsy" element={<OystersChoose />} />
              <Route path="/blog/kak-otkryt-ustritsu" element={<OystersOpen />} />
              <Route path="/blog/retsepty-s-ustritsami" element={<OystersRecipes />} />
              {/* Trepang */}
              <Route path="/blog/trepang-sahalinskij" element={<TrepangWhat />} />
              <Route path="/blog/nastojka-na-trepange-recept" element={<TrepangTinctureRecipe />} />
              <Route path="/blog/trepang-primenenie" element={<TrepangBenefits />} />
              <Route path="/blog/medovaya-nastojka-trepanga" element={<TrepangHoneyTincture />} />
              {/* Legacy redirects */}
              <Route path="/articles/chto-takoe-vongole" element={<VongoleWhatIs />} />
              <Route path="/articles/kak-prigotovit-vongole" element={<VongoleCooking />} />
              <Route path="/articles/pasta-s-vongole" element={<VongolePasta />} />
              <Route path="/articles/kak-vybrat-vongole" element={<VongoleChoose />} />
              <Route path="/articles/vongole-kak-v-restorane" element={<VongoleRestaurant />} />
              {/* Auto-generated articles (fallback for any /blog/:slug not matched above) */}
              <Route path="/blog/:slug" element={<DynamicArticle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <MobileContactBar />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
