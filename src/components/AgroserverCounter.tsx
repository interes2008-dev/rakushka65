import { useEffect, useState } from "react";

/**
 * Счётчик agroserver.ru (top.agroserver.ru/ct/?uid=20171)
 * Адаптация оригинального сниппета (document.write → React) для SPA.
 * Картинка-пиксель 88×31, отдаёт рейтинг по uid=20171.
 */
const AgroserverCounter = () => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const ref = encodeURIComponent(document.referrer || "");
    const rd = Math.random();
    setSrc(`https://top.agroserver.ru/ct/?uid=20171&ref=${ref}&rd=${rd}`);
  }, []);

  if (!src) return null;

  return (
    <figure className="flex flex-col items-center gap-1.5 m-0">
      <a
        href="https://agroserver.ru/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Перейти на agroserver.ru — отраслевой каталог поставщиков (открывается в новой вкладке)"
        title="agroserver.ru — рейтинг отраслевого каталога"
        className="inline-block rounded-sm opacity-60 hover:opacity-100 transition-opacity outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <img
          src={src}
          alt="Счётчик рейтинга agroserver.ru"
          width={88}
          height={31}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </a>
      <figcaption className="font-body text-[10px] text-muted-foreground/70 tracking-wide uppercase">
        Партнёр: agroserver.ru
      </figcaption>
    </figure>
  );
};

export default AgroserverCounter;
