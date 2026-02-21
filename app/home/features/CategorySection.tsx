"use client";
import CategoryCard from "@/components/product-cards/CategoryCard";
import CategoryCardShimmer from "@/components/product-cards/CategoryCardShimmer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import { useGetCategoriesQuery } from "@/services/productsApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const CategorySection = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const groupedCategories = chunkArray(categories?.slice(0, 4) || [], 2);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className=" bg-secondary w-screen pl-4 sm:px-8">
      <div className="container mx-auto pt-10 sm:pt-[3em]">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl text-white">
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
              <CategoryCardShimmer key={i} className="rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="sm:pl-20">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0!">
                {groupedCategories.map((group, slideIndex) => (
                  <CarouselItem
                    key={slideIndex}
                    className="pl-0 basis-full flex"
                  >
                    <div className="flex flex-col sm:flex-row w-full h-full">
                      {group.map((category, index) => (
                        <CategoryCard
                          key={category.id}
                          category={category}
                          className={`w-full rounded-none ${
                            slideIndex === current && index === 0
                              ? "rounded-tl-[2em] sm:rounded-tl-[4em]"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
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
