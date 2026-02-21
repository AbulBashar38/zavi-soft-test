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
  const [activeImageId, setActiveImageId] = useState("hero-1");
  const activeImage =
    heroImages.find((item) => item.id === activeImageId)?.image ??
    heroImages[0].image;
  const previewImages = heroImages
    .filter((item) => item.id !== activeImageId)
    .slice(0, 2);
  return (
    <div className="relative overflow-hidden rounded-[3em] w-full mt-6">
      <div className="h-107.5 sm:h-125 lg:h-140 w-full">
        <Image
          src={activeImage}
          alt="Nike Air Max"
          fill
          className="object-cover object-center transition-all duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="absolute top-1/2 origin-top-left -rotate-90">
        <span className="inline-flex rounded-b-2xl bg-black px-6 py-5 font-semibold text-white text-base">
          Nike product of the year
        </span>
      </div>

      <div className="absolute bottom-6 left-6 max-w-75 space-y-2 text-white sm:bottom-10 sm:left-10 sm:max-w-md sm:space-y-3">
        <h2 className="text-4xl leading-none font-extrabold sm:text-5xl lg:text-6xl">
          NIKE AIR MAX
        </h2>

        <p className="text-base text-accent sm:text-2xl sm:leading-8">
          Nike introducing the new air max for everyone&apos;s comfort
        </p>

        <Button>SHOP NOW</Button>
      </div>

      <div className="absolute right-3 bottom-10 flex  flex-col gap-2.5 sm:right-5 sm:gap-3 ">
        {previewImages.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setActiveImageId(item.id)}
              type="button"
              aria-label={`Show image ${item.id}`}
              className={cn(
                "relative h-20 w-20 overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:h-24 sm:w-24 lg:h-28 lg:w-28 cursor-pointer",
                activeImageId === item.id
                  ? "border-white ring-2 ring-white/60"
                  : "border-white/60 hover:border-white",
              )}
            >
              <Image
                src={item.image}
                alt={`Nike Air Max thumbnail ${item.id}`}
                fill
                className="object-cover object-center"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCarousel;
