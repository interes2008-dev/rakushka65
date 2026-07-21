import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { hit } from "@/lib/metrika";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPath = useRef<string>(typeof document !== "undefined" ? document.referrer : "");

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // SPA-хит в Метрику при смене пути (без учёта якорей)
  useEffect(() => {
    const url = window.location.origin + pathname;
    hit(url, prevPath.current || undefined);
    prevPath.current = url;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
