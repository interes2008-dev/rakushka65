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
    <a
      href="https://agroserver.ru/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Рейтинг agroserver.ru"
      className="inline-block opacity-60 hover:opacity-100 transition-opacity"
    >
      <img
        src={src}
        alt="agroserver.ru — рейтинг"
        width={88}
        height={31}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </a>
  );
};

export default AgroserverCounter;
