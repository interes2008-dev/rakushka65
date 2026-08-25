import PhotoGallery from "@/components/PhotoGallery";
import { pickVongolePhotos } from "@/lib/media/vongolePhotos";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface VongolePhotoStripProps {
  /** Сдвиг выборки, чтобы в разных статьях были разные фото */
  offset?: number;
  count?: number;
  caption?: string;
}

const VongolePhotoStrip = ({ offset = 0, count = 3, caption }: VongolePhotoStripProps) => {
  const { lang } = useLanguage();
  const photos = pickVongolePhotos(count, offset);

  return (
    <figure className="my-10">
      <PhotoGallery photos={photos} />
      <figcaption className="mt-3 text-sm text-muted-foreground font-body text-center">
        {caption ||
          (lang === "ru"
            ? "Живые вонголе с Сахалина: добыча, промывка, калибровка и упаковка"
            : "Live Sakhalin vongole: harvest, rinsing, grading and packing")}
      </figcaption>
    </figure>
  );
};

export default VongolePhotoStrip;
