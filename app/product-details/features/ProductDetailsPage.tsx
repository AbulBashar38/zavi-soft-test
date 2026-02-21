"use client";

import { useGetProductQuery } from "@/services/productsApi";
import DetailsPageSkeleton from "./DetailsPageSkeleton";
import ProductDetails from "./ProductDetails";

type ProductDetailsPageProps = {
  productId: string;
};

const ProductDetailsPage = ({ productId }: ProductDetailsPageProps) => {
  const parsedProductId = Number(productId);
  const shouldSkip = Number.isNaN(parsedProductId);

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductQuery(parsedProductId, {
    skip: shouldSkip,
  });

  if (shouldSkip || isError) {
    return (
      <p className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
        Product details are unavailable right now.
      </p>
    );
  }

  if (isLoading || !product) {
    return <DetailsPageSkeleton />;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
