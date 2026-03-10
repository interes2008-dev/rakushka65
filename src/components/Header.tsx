import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WaveLogo from "@/components/WaveLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, lang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/catalog", label: t.nav.catalog },
    { to: "/#about", label: t.nav.about },
    { to: "/#reviews", label: t.nav.reviews },
    { to: "/#contact", label: t.nav.contacts },
  ];

  const handleAnchorClick = (to: string) => {
    if (to.startsWith("/#")) {
      const id = to.substring(2);
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-ocean-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <WaveLogo className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
            {lang === "ru" ? "Ракушка" : "Rakushka"}
            <span className="text-primary">65</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => handleAnchorClick(link.to)}
              className="font-body text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="tel:+79147690097"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{t.nav.ordersLine}</span>
          </a>
          <Link
            to="/#contact"
            onClick={() => handleAnchorClick("/#contact")}
            className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-lg glow-teal glow-teal-hover transition-all duration-300 hover:scale-105"
          >
            {t.nav.order}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ocean-glass overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleAnchorClick(link.to)}
                  className="font-body text-lg text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => handleAnchorClick("/#contact")}
                className="mt-2 inline-flex justify-center px-5 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg"
              >
                {t.nav.order}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
