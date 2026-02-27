import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://rakushka65.ru/og-image.jpg",
  noindex = false,
  jsonLd,
}: SEOHeadProps) => {
  useEffect(() => {
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
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:card", "summary_large_image");

    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
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
  }, [title, description, canonical, ogType, ogImage, noindex, jsonLd]);

  return null;
};

export default SEOHead;
