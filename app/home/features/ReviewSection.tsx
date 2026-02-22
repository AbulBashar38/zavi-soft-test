"use client";

import ReviewCard from "@/components/product-cards/ReviewCard";
import { Button } from "@/components/ui/button";
import { useDeviceWidth } from "@/hooks/useDeviceWidth";
import { mockReviews } from "@/lib/constant";
import { motion, type Variants } from "framer-motion";

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ReviewSection = () => {
  const width = useDeviceWidth();

  const reviewsToShow =
    width !== null && width < 640 ? mockReviews.slice(0, 1) : mockReviews;

  return (
    <section className="px-4 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Reviews
          </h2>
          <Button>SEE ALL</Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviewsToShow.map((review) => (
            <motion.div key={review.id} variants={cardItemVariants}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
