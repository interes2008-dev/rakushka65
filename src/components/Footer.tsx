import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import WaveLogo from "@/components/WaveLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-ocean-mid/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <WaveLogo className="w-8 h-8" />
              <span className="font-heading text-2xl font-bold">
                Rakushka<span className="text-primary">65</span>
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Сахалинские морепродукты с доставкой. Свежесть океана прямо к вашему столу.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "Главная" },
                { to: "/catalog", label: "Каталог" },
                { to: "/#about", label: "О компании" },
                { to: "/#reviews", label: "Отзывы" },
                { to: "/#contact", label: "Контакты" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79147690097" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +7 (914) 769-00-97
              </a>
              <a href="mailto:info@rakushka65.ru" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@rakushka65.ru
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>г. Южно-Сахалинск,<br />ул. 4-Железнодорожная, 18, стр. 1<br />Самовывоз<br />Яндекс-доставка</span>
              </div>
              <a href="https://t.me/+79147690097" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary" />
                Telegram
              </a>
              <a href="https://max.ru/+79147690097" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" />
                Max
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rakushka65. Сделано с 💚 к морепродуктам
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/offer" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
