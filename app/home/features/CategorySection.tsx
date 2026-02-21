"use client";
import CategoryCard from "@/components/product-cards/CategoryCard";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetCategoriesQuery } from "@/services/productsApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CategorySection = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="-mx-4 mt-16 w-screen bg-secondary px-4 py-12 lg:mt-20 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">
            Categories
          </h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="h-10 w-10 rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white lg:h-12 lg:w-12"
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="h-10 w-10 rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white lg:h-12 lg:w-12"
            >
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-3xl bg-muted/20 lg:h-96"
              />
            ))}
          </div>
        ) : (
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {categories?.slice(0, 3)?.map((category) => (
                <CarouselItem key={category.id} className="pl-4 sm:basis-1/2">
                  <CategoryCard category={category} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
