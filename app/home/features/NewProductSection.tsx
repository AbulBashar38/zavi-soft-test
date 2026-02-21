"use client";
import PrimaryProductCard from "@/components/shared/product-cards/PrimaryProductCard";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/services/productsApi";

const NewProductSection = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const displayProducts = products?.slice(0, 4) ?? [];

  return (
    <section className="mt-16 space-y-8 lg:mt-20">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
          DON&apos;T MISS OUT
          <br />
          NEW DROPS
        </h2>

        <Button className="h-11 shrink-0 rounded-lg bg-primary px-6 text-sm font-semibold tracking-wide text-primary-foreground hover:bg-primary/90 lg:h-12 lg:px-8">
          SHOP NEW DROPS
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-96 animate-pulse rounded-3xl bg-muted" />
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
