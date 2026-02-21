import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="mx-auto container px-4  sm:px-6 lg:px-8">
      <h1 className="uppercase font-bold w-full text-[4rem] sm:text-[6.2rem] md:text-[7.5rem] lg:text-[10em] xl:text-[12.7em] leading-[100%] text-center">
        Do it <span className="text-primary">right</span>
      </h1>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
