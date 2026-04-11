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
import VongoleWhatIs from "./pages/articles/VongoleWhatIs";
import VongoleCooking from "./pages/articles/VongoleCooking";
import VongolePasta from "./pages/articles/VongolePasta";
import VongoleChoose from "./pages/articles/VongoleChoose";
import VongoleRestaurant from "./pages/articles/VongoleRestaurant";

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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/chto-takoe-vongole" element={<VongoleWhatIs />} />
            <Route path="/blog/kak-prigotovit-vongole" element={<VongoleCooking />} />
            <Route path="/blog/pasta-s-vongole" element={<VongolePasta />} />
            <Route path="/blog/kak-vybrat-vongole" element={<VongoleChoose />} />
            <Route path="/blog/vongole-kak-v-restorane" element={<VongoleRestaurant />} />
            {/* Redirect old article URLs */}
            <Route path="/articles/chto-takoe-vongole" element={<VongoleWhatIs />} />
            <Route path="/articles/kak-prigotovit-vongole" element={<VongoleCooking />} />
            <Route path="/articles/pasta-s-vongole" element={<VongolePasta />} />
            <Route path="/articles/kak-vybrat-vongole" element={<VongoleChoose />} />
            <Route path="/articles/vongole-kak-v-restorane" element={<VongoleRestaurant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
