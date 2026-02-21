"use client";

import SuggestionProducts from "@/components/SuggestionProducts";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "@/services/productsApi";
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

  const { data: products } = useGetProductsQuery(undefined, {
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

  const suggestionProducts =
    products?.filter((item) => item.id !== product.id).slice(0, 8) ?? [];

  return (
    <section className="space-y-12 sm:space-y-16">
      <ProductDetails product={product} />
      <SuggestionProducts products={suggestionProducts} />
    </section>
  );
};

export default ProductDetailsPage;
