import CategorySection from "./features/CategorySection";
import Hero from "./features/Hero";
import NewProductSection from "./features/NewProductSection";

const HomePage = () => {
  return (
    <section className="pb-10">
      <Hero />
      <NewProductSection />
      <CategorySection />
      {/* <ReviewSection /> */}
    </section>
  );
};

export default HomePage;
