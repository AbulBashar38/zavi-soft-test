"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type HeroImage = {
  id: string;
  image: string;
};

const heroImages: HeroImage[] = [
  {
    id: "hero-1",
    image: "/images/hero-feature1.jpg",
  },
  {
    id: "hero-2",
    image: "/images/hero-feature2.jpg",
  },
  {
    id: "hero-3",
    image: "/images/hero-feature3.jpg",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = heroImages[activeIndex]?.image ?? heroImages[0].image;

  return (
    <div className="mt-6">
      <div className="relative overflow-hidden rounded-[2.5rem] w-full">
        <div className="relative h-107.5 sm:h-125 lg:h-140 w-full">
          <Image
            src={activeImage}
            alt="Nike Air Max"
            fill
            className="object-cover object-center transition-all duration-300"
            priority={activeIndex === 0}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-1/2 origin-top-left -rotate-90  ">
          <span className="inline-flex rounded-md bg-black px-3 py-2 text-xs font-semibold text-white sm:text-sm">
            Nike product of the year
          </span>
        </div>

        <div className="absolute bottom-6 left-6 max-w-75 space-y-2 text-white sm:bottom-10 sm:left-10 sm:max-w-md sm:space-y-3">
          <h2 className="text-4xl leading-none font-extrabold sm:text-5xl lg:text-6xl">
            NIKE AIR MAX
          </h2>

          <p className="text-base text-white/90 sm:text-2xl sm:leading-8">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>

          <Button className="h-10 rounded-lg bg-primary px-6 text-xs font-bold tracking-wide text-white hover:bg-primary/90 sm:h-11 sm:px-7 sm:text-sm">
            SHOP NOW
          </Button>
        </div>

        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-2.5 sm:right-5 sm:gap-3">
          {heroImages.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              type="button"
              aria-label={`Show image ${index + 1}`}
              className={cn(
                "relative h-20 w-20 overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
                activeIndex === index
                  ? "border-white ring-2 ring-white/60"
                  : "border-white/60 hover:border-white",
              )}
            >
              <Image
                src={item.image}
                alt={`Nike Air Max thumbnail ${index + 1}`}
                fill
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
