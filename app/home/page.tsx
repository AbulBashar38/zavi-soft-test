import CategorySection from "./features/CategorySection";
import Hero from "./features/Hero";
import NewProductSection from "./features/NewProductSection";
import ReviewSection from "./features/ReviewSection";

const HomePage = () => {
  return (
    <section className="pb-10">
      <div className="w-full container mx-auto">
        <Hero />
        <NewProductSection />
        <CategorySection />
        <ReviewSection />
      </div>
    </section>
  );
};

export default HomePage;
