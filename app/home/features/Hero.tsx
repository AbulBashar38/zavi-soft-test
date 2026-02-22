"use client";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="mx-auto container px-4  sm:px-6 lg:px-8">
      <motion.h1
        className="uppercase font-bold w-full text-[4rem] sm:text-[6.2rem] md:text-[7.5rem] lg:text-[10em] xl:text-[12.7em] leading-[100%] text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Do it <span className="text-primary">right</span>
      </motion.h1>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
