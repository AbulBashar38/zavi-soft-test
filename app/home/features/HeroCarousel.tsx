"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
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
    <div className="relative overflow-hidden rounded-4xl lg:rounded-[2em] xl:rounded-[3em] w-full mt-6">
      <div className="md:h-full w-full aspect-auto h-96  md:aspect-4/2">
        <Image
          src={activeImage}
          alt="Nike Air Max"
          fill
          className="object-cover object-center transition-all duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className=" absolute top-1/2 origin-top-left -rotate-90">
        <span className="inline-flex rounded-b-2xl bg-black px-3 py-2 lg:px-4 lg:py-3 xl:px-6 xl:py-5 font-semibold text-white text-xs lg:text-base">
          Nike product of the year
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeImageId}
          className="absolute bottom-6 left-3 max-w-75 md:max-w-96 space-y-2 text-white lg:bottom-10 lg:left-10 lg:max-w-md lg:space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h2 className="text-2xl leading-none font-extrabold md:text-5xl xl:text-6xl">
            NIKE AIR MAX
          </h2>

          <div className="w-[70%] md:w-full">
            <p className="text-base text-accent lg:text-2xl xl:leading-8">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
          </div>

          <Button>SHOP NOW</Button>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-3 bottom-6 flex flex-col gap-2 sm:right-5 sm:bottom-10 sm:gap-3">
        {previewImages.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setActiveImageId(item.id)}
              type="button"
              aria-label={`Show image ${item.id}`}
              className={cn(
                "relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all duration-200 sm:h-20 sm:w-20 sm:rounded-2xl lg:h-28 lg:w-28 cursor-pointer",
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
