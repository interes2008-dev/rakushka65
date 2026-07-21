// Утилиты для Яндекс.Метрики (счётчик 109518636).
// Счётчик инициализируется в index.html. Здесь только обёртки для целей и SPA-хитов.

export const YM_ID = 109518636;

type YmFn = (id: number, action: string, ...args: unknown[]) => void;

function ym(): YmFn | null {
  const fn = (window as unknown as { ym?: YmFn }).ym;
  return typeof fn === "function" ? fn : null;
}

/** Отправить достижение цели. Второй аргумент params попадёт в отчёты Метрики. */
export function reachGoal(goal: string, params?: Record<string, unknown>) {
  const fn = ym();
  if (!fn) return;
  fn(YM_ID, "reachGoal", goal, params);
}

/** Зафиксировать переход на новый URL в SPA (React Router меняет путь без перезагрузки). */
export function hit(url: string, referrer?: string) {
  const fn = ym();
  if (!fn) return;
  fn(YM_ID, "hit", url, { referer: referrer });
}

// Названия целей в одном месте, чтобы не расходились по проекту.
export const GOALS = {
  FORM_SUBMIT: "form_submit",       // отправка формы заявки
  PHONE_CLICK: "phone_click",       // клик по номеру телефона
  EMAIL_CLICK: "email_click",       // клик по email
  TELEGRAM_CLICK: "telegram_click", // клик по Telegram
  MAX_CLICK: "max_click",           // клик по MAX
  CATALOG_CLICK: "catalog_click",   // переход в каталог из hero
  PRODUCT_VIEW: "product_view",     // просмотр карточки товара
} as const;
