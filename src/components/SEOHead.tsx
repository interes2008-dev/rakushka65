import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  /** Альт-текст для OG/Twitter изображения — повышает доступность превью при шаринге */
  ogImageAlt?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  lang?: string;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://rakushka65.ru/og-image.jpg",
  ogImageAlt,
  noindex = false,
  jsonLd,
  lang = "ru",
}: SEOHeadProps) => {
  useEffect(() => {
    // Set html lang attribute
    document.documentElement.lang = lang;

    // Title
    document.title = title;

    // Helper to set/create meta
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:site_name", "Ракушка65");
    setMeta("property", "og:locale", lang === "ru" ? "ru_RU" : "en_US");
    setMeta("property", "og:locale:alternate", lang === "ru" ? "en_US" : "ru_RU");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:image:width", "1200");
    setMeta("name", "twitter:image:height", "630");
    setMeta("name", "twitter:card", "summary_large_image");

    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      // Set proper robots directives for indexed pages
      setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalUrl = canonical || `https://rakushka65.ru${window.location.pathname}`;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // OG URL
    setMeta("property", "og:url", canonicalUrl);

    // hreflang - update dynamically
    const updateHreflang = (hreflang: string, href: string) => {
      let el = document.querySelector(`link[hreflang="${hreflang}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };
    updateHreflang("ru", canonicalUrl);
    updateHreflang("en", canonicalUrl);
    updateHreflang("x-default", canonicalUrl);

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, ogType, ogImage, noindex, jsonLd, lang]);

  return null;
};

export default SEOHead;
