"use client";

import ReviewCard from "@/components/product-cards/ReviewCard";
import { Button } from "@/components/ui/button";
import { useDeviceWidth } from "@/hooks/useDeviceWidth";
import { mockReviews } from "@/lib/constant";

const ReviewSection = () => {
  const width = useDeviceWidth();

  const reviewsToShow =
    width !== null && width < 640 ? mockReviews.slice(0, 1) : mockReviews;

  return (
    <section className="px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Reviews
          </h2>
          <Button>SEE ALL</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsToShow.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
