"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ProductImageCarouselProps = {
  title: string;
  images: string[];
};

const fallbackImage = "/images/hero-feature1.jpg";

const ProductImageCarousel = ({ title, images }: ProductImageCarouselProps) => {
  const galleryImages = useMemo(() => {
    const safeImages = images.length > 0 ? images : [fallbackImage];

    if (safeImages.length >= 4) {
      return safeImages.slice(0, 4);
    }

    return Array.from({ length: 4 }, (_, index) => {
      return safeImages[index % safeImages.length];
    });
  }, [images]);

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl bg-white/65 p-2 sm:p-3">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent className="-ml-0">
            {galleryImages.map((image, index) => (
              <CarouselItem key={`${image}-${index}`} className="pl-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted/50">
                  <Image
                    src={image || fallbackImage}
                    alt={`${title} image ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-3 flex items-center justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to image ${index + 1}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                index === selectedIndex ? "bg-primary" : "bg-foreground/30",
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {galleryImages.map((image, index) => (
          <button
            key={`${image}-${index}-thumb`}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "relative overflow-hidden rounded-xl border-2 bg-white/65",
              index === selectedIndex
                ? "border-primary/70"
                : "border-transparent",
            )}
            aria-label={`Select image ${index + 1}`}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={image || fallbackImage}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
