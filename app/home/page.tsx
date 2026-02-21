import CategorySection from "./features/CategorySection";
import Hero from "./features/Hero";
import NewProductSection from "./features/NewProductSection";
import ReviewSection from "./features/ReviewSection";

const HomePage = () => {
  return (
    <section className="pb-10 sm:pb-16 space-y-10 sm:space-y-16">
      <Hero />
      <NewProductSection />
      <CategorySection />
      <ReviewSection />
    </section>
  );
};

export default HomePage;
