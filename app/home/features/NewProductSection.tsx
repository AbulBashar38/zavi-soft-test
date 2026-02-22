"use client";
import PrimaryProductCard from "@/components/product-cards/PrimaryProductCard";
import ProductCardShimmer from "@/components/product-cards/ProductCardShimmer";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/services/productsApi";
import { motion } from "framer-motion";

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NewProductSection = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const displayProducts = products?.slice(0, 4) ?? [];

  return (
    <section id="new-product" className="w-full px-4 lg:px-8">
      <div className="space-y-8 mx-auto container">
        <motion.div
          className="flex items-end justify-between gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="lg:w-[40%] w-full">
            <h2 className="text-2xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Don&apos;t miss out new drops
            </h2>
          </div>

          <Button>SHOP NEW DROPS</Button>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <ProductCardShimmer key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {displayProducts.map((product) => (
              <motion.div key={product.id} variants={cardItemVariants}>
                <PrimaryProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewProductSection;
