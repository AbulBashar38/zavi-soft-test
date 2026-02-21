import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section>
      <h1 className="uppercase font-bold w-full text-[13em] leading-[100%] text-center ">
        Do it <span className="text-primary">right</span>
      </h1>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
