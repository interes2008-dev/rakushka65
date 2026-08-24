import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ScallopPhoto } from "@/lib/media/scallopPhotos";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PhotoGalleryProps {
  photos: ScallopPhoto[];
  title?: string;
  className?: string;
}

const PhotoGallery = ({ photos, title, className = "" }: PhotoGalleryProps) => {
  const { lang } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  if (!photos.length) return null;

  const alt = (p: ScallopPhoto) => (lang === "ru" ? p.altRu : p.altEn);

  return (
    <section className={`not-prose ${className}`}>
      {title && (
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.url}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-border/20 bg-sand-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={p.url}
              alt={alt(p)}
              loading="lazy"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label={lang === "ru" ? "Закрыть" : "Close"}
              className="absolute top-5 right-5 p-2 rounded-full bg-sand-glass border border-border/30 text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={photos[active].url}
              alt={alt(photos[active])}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
