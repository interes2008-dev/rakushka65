import { Phone, Send, MessageCircle } from "lucide-react";
import { reachGoal, GOALS } from "@/lib/metrika";

/**
 * Липкая панель быстрой связи внизу экрана на мобильных.
 * Живой продукт заказывают звонком или в мессенджере, поэтому доступ к контактам
 * должен быть в один тап с любой страницы. На десктопе скрыта (есть шапка и секция контактов).
 */
const MobileContactBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-border/50 bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <a
        href="tel:+79147690097"
        onClick={() => reachGoal(GOALS.PHONE_CLICK, { source: "mobile_bar" })}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-foreground active:bg-primary/10 transition-colors"
        aria-label="Позвонить"
      >
        <Phone className="w-5 h-5 text-primary" />
        <span className="font-body text-[11px]">Позвонить</span>
      </a>
      <a
        href="https://t.me/+79147690097"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal(GOALS.TELEGRAM_CLICK, { source: "mobile_bar" })}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-foreground active:bg-primary/10 transition-colors border-x border-border/40"
        aria-label="Написать в Telegram"
      >
        <Send className="w-5 h-5 text-primary" />
        <span className="font-body text-[11px]">Telegram</span>
      </a>
      <a
        href="https://max.ru/+79147690097"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal(GOALS.MAX_CLICK, { source: "mobile_bar" })}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-foreground active:bg-primary/10 transition-colors"
        aria-label="Написать в MAX"
      >
        <MessageCircle className="w-5 h-5 text-primary" />
        <span className="font-body text-[11px]">MAX</span>
      </a>
    </div>
  );
};

export default MobileContactBar;
