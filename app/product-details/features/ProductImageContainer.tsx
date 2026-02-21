"use client";

import { useDeviceWidth } from "@/hooks/useDeviceWidth";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductImages from "./ProductImages";

type ProductImageContainerProps = {
  title: string;
  images: string[];
};

const ProductImageContainer = ({
  title,
  images,
}: ProductImageContainerProps) => {
  const width = useDeviceWidth();
  const isMobile = width !== null && width < 768;

  if (isMobile) {
    return <ProductImageCarousel title={title} images={images} />;
  }

  return <ProductImages title={title} images={images} />;
};

export default ProductImageContainer;
