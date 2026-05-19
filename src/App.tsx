import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Privacy from "./pages/Privacy";
import Offer from "./pages/Offer";
import Certificate from "./pages/Certificate";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
// Vongole cluster
import VongoleWhatIs from "./pages/articles/VongoleWhatIs";
import VongoleCooking from "./pages/articles/VongoleCooking";
import VongolePasta from "./pages/articles/VongolePasta";
import VongoleChoose from "./pages/articles/VongoleChoose";
import VongoleRestaurant from "./pages/articles/VongoleRestaurant";
import VongoleBenefits from "./pages/articles/VongoleBenefits";
import VongoleStorage from "./pages/articles/VongoleStorage";
// Oysters cluster
import OystersWhatIs from "./pages/articles/OystersWhatIs";
import OystersChoose from "./pages/articles/OystersChoose";
import OystersOpen from "./pages/articles/OystersOpen";
import OystersRecipes from "./pages/articles/OystersRecipes";
// Sea urchin cluster
import SeaUrchinWhat from "./pages/articles/SeaUrchinWhat";
import SeaUrchinChoose from "./pages/articles/SeaUrchinChoose";
import SeaUrchinBenefits from "./pages/articles/SeaUrchinBenefits";
// Scallop cluster
import ScallopWhat from "./pages/articles/ScallopWhat";
import ScallopCooking from "./pages/articles/ScallopCooking";
import ScallopChoose from "./pages/articles/ScallopChoose";
import ScallopLiveSakhalin from "./pages/articles/ScallopLiveSakhalin";
import ScallopLiveStorage from "./pages/articles/ScallopLiveStorage";
import ScallopLiveDelivery from "./pages/articles/ScallopLiveDelivery";
// Spisula cluster
import SpisulaWhat from "./pages/articles/SpisulaWhat";
import SpisulaCooking from "./pages/articles/SpisulaCooking";
import SpisulaCompare from "./pages/articles/SpisulaCompare";
// Trepang cluster
import TrepangWhat from "./pages/articles/TrepangWhat";
import TrepangTinctureRecipe from "./pages/articles/TrepangTinctureRecipe";
import TrepangBenefits from "./pages/articles/TrepangBenefits";
import TrepangHoneyTincture from "./pages/articles/TrepangHoneyTincture";
import DynamicArticle from "./pages/DynamicArticle";
import SeoCheck from "./pages/SeoCheck";
import CategoryLanding from "./pages/CategoryLanding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
