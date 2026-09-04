import PhotoGallery from "@/components/PhotoGallery";
import { pickScallopPhotos } from "@/lib/media/scallopPhotos";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ScallopPhotoStripProps {
  /** Сдвиг выборки, чтобы в разных статьях были разные фото */
  offset?: number;
  count?: number;
  caption?: string;
}

const ScallopPhotoStrip = ({ offset = 0, count = 3, caption }: ScallopPhotoStripProps) => {
  const { lang } = useLanguage();
  const photos = pickScallopPhotos(count, offset);

  return (
    <figure className="my-10">
      <PhotoGallery photos={photos} />
      <figcaption className="mt-3 text-sm text-muted-foreground font-body text-center">
        {caption ||
          (lang === "ru"
            ? "Наш гребешок с Сахалина: приёмка, калибровка и взвешивание живой раковины"
            : "Our Sakhalin scallops: intake, grading and weighing of live shells")}
      </figcaption>
    </figure>
  );
};

export default ScallopPhotoStrip;
