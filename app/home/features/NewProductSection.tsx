"use client";
import PrimaryProductCard from "@/components/product-cards/PrimaryProductCard";
import ProductCardShimmer from "@/components/product-cards/ProductCardShimmer";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/services/productsApi";

const NewProductSection = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const displayProducts = products?.slice(0, 4) ?? [];

  return (
    <section className="mt-16 space-y-8 lg:mt-20">
      <div className="flex items-end justify-between gap-4">
        <div className="w-[40%]">
          <h2 className="text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Don&apos;t miss out new drops
          </h2>
        </div>

        <Button>SHOP NEW DROPS</Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <ProductCardShimmer key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayProducts.map((product) => (
            <PrimaryProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewProductSection;
