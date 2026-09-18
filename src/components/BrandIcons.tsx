interface BrandIconProps {
  className?: string;
}

/** Telegram: бумажный самолётик на фирменном голубом круге */
export const TelegramIcon = ({ className = "w-5 h-5" }: BrandIconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="tg-brand" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2AABEE" />
        <stop offset="100%" stopColor="#229ED9" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="12" fill="url(#tg-brand)" />
    <path
      fill="#fff"
      d="M5.2 11.8c3.8-1.65 6.33-2.74 7.6-3.27 3.62-1.5 4.37-1.77 4.86-1.78.11 0 .35.03.51.16.13.11.17.26.19.37.02.11.04.35.02.54-.2 2.06-1.05 7.06-1.48 9.37-.18.98-.54 1.3-.89 1.34-.76.07-1.34-.5-2.07-.98-1.15-.75-1.8-1.22-2.91-1.96-1.29-.85-.45-1.31.28-2.08.19-.2 3.5-3.2 3.56-3.48.01-.03.01-.16-.06-.22-.08-.07-.19-.05-.27-.03-.11.03-1.93 1.23-5.44 3.6-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.26-1.45-.4-1.4-.85.03-.23.35-.47.96-.72z"
    />
  </svg>
);

/** MAX: чат-пузырь на фирменном сине-фиолетовом градиенте */
export const MaxIcon = ({ className = "w-5 h-5" }: BrandIconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="max-brand" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="100%" stopColor="#9B59D6" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="24" height="24" rx="7" fill="url(#max-brand)" />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5.6c-3.9 0-7 2.7-7 6.1 0 1.85.93 3.5 2.4 4.63l-.62 2.5 2.72-1.28c.77.2 1.6.31 2.5.31 3.9 0 7-2.7 7-6.16S15.9 5.6 12 5.6z"
    />
  </svg>
);

/** WhatsApp: телефонная трубка в пузыре на фирменном зелёном */
export const WhatsAppIcon = ({ className = "w-5 h-5" }: BrandIconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
    <path
      fill="#25D366"
      d="M12 0C5.4 0 .04 5.36.04 11.96c0 2.1.55 4.16 1.6 5.98L0 24l6.22-1.6a11.9 11.9 0 0 0 5.78 1.48h.01C18.6 23.88 24 18.52 24 11.92 24 5.33 18.6 0 12 0z"
    />
    <path
      fill="#fff"
      d="M9.1 6.9c-.2-.47-.42-.48-.62-.49h-.53c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28s.98 2.64 1.12 2.83c.14.18 1.9 3.04 4.68 4.14 2.31.91 2.78.73 3.29.68.5-.05 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.19-.53-.33-.27-.14-1.62-.8-1.87-.89-.25-.09-.44-.14-.62.14-.18.27-.71.89-.87 1.07-.16.19-.32.21-.6.07-.27-.14-1.16-.43-2.2-1.36-.82-.72-1.37-1.62-1.53-1.89-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.6-1.49-.83-2.03z"
    />
  </svg>
);
