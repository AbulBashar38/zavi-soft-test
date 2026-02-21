"use client";
import CategoryCard from "@/components/product-cards/CategoryCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useGetCategoriesQuery } from "@/services/productsApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const CategorySection = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="mt-16 bg-secondary w-screen ">
      <div className="container mx-auto pt-[3em]">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl text-white">
            categories
          </h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
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
          <div className="pl-20">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full "
            >
              <CarouselContent className="ml-0!">
                {categories?.slice(0, 5)?.map((category, index) => (
                  <CarouselItem key={category.id} className="pl-0 basis-1/2">
                    <CategoryCard
                      category={category}
                      className={`rounded-none w-full ${index === current ? "rounded-tl-[4em]" : ""}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
