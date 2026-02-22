"use client";

import PrimaryProductCard from "@/components/product-cards/PrimaryProductCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useDeviceWidth } from "@/hooks/useDeviceWidth";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/productsType";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type SuggestionProductsProps = {
  products: Product[];
};

const SuggestionProducts = ({ products }: SuggestionProductsProps) => {
  const width = useDeviceWidth();
  const isMediumDevice = width !== null && width < 1024;
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const mobileSlides = useMemo(() => {
    const chunkSize = 4;
    const chunks: Product[][] = [];

    for (let index = 0; index < products.length; index += chunkSize) {
      chunks.push(products.slice(index, index + chunkSize));
    }

    return chunks;
  }, [products]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (products.length === 0) {
    return null;
  }

  const displaySlides = isMediumDevice ? mobileSlides : [products];

  return (
    <section className="space-y-6 pb-10 sm:pb-16">
      <motion.div
        className="flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold leading-tight sm:text-4xl">
          You may also like
        </h2>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-10! w-10! rounded-xl "
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10! w-10! rounded-xl "
            onClick={() => api?.scrollNext()}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </motion.div>

      <Carousel setApi={setApi} opts={{ align: "start" }}>
        <CarouselContent className={isMediumDevice ? "ml-0" : undefined}>
          {isMediumDevice
            ? displaySlides.map((slideProducts, slideIndex) => (
                <CarouselItem key={slideIndex} className="basis-full pl-0">
                  <div className="grid grid-cols-2 gap-4">
                    {slideProducts.map((product, i) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: i * 0.08,
                        }}
                      >
                        <PrimaryProductCard
                          product={product}
                          className="h-full [&_h3]:text-2xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CarouselItem>
              ))
            : products.map((product, i) => (
                <CarouselItem
                  key={product.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: i * 0.07,
                    }}
                    className="h-full"
                  >
                    <PrimaryProductCard
                      product={product}
                      className="h-full [&_h3]:text-3xl sm:[&_h3]:text-xl"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>

      {snapCount > 1 && (
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to suggestion slide ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-6 bg-foreground/25",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SuggestionProducts;
