import { useViewTransitionState } from "react-router-dom";
import type { ImgHTMLAttributes } from "react";

interface ProductCardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Целевой путь карточки, например /catalog/scallop */
  to: string;
}

/**
 * Картинка товара в каталоге. Во время перехода на страницу этого товара
 * получает общий view-transition-name, чтобы браузер плавно "перелетел"
 * картинкой из карточки в hero страницы товара (нативный View Transitions API).
 * Имя вешается только на кликнутую карточку, поэтому уникальность в кадре сохраняется.
 */
const ProductCardImage = ({ to, style, ...imgProps }: ProductCardImageProps) => {
  const isTransitioning = useViewTransitionState(to);
  return (
    <img
      {...imgProps}
      style={isTransitioning ? { ...style, viewTransitionName: "product-hero" } : style}
    />
  );
};

export default ProductCardImage;
