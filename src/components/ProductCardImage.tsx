import type { ImgHTMLAttributes } from "react";

interface ProductCardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Целевой путь карточки, оставлен для совместимости API */
  to?: string;
}

const ProductCardImage = ({ to: _to, ...imgProps }: ProductCardImageProps) => {
  return <img {...imgProps} />;
};

export default ProductCardImage;
