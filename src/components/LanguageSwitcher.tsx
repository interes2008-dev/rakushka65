import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 text-xs font-body font-medium tracking-wide uppercase"
      aria-label="Switch language"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{lang === "ru" ? "EN" : "RU"}</span>
    </button>
  );
};

export default LanguageSwitcher;
