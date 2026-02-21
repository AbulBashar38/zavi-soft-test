import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Review } from "@/types/reviewType";
import { Star } from "lucide-react";
import Image from "next/image";

type ReviewCardProps = {
  review: Review;
  className?: string;
};

const ReviewCard = ({ review, className }: ReviewCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden  p-0 shadow-sm ring-1 ring-border bg-white",
        className,
      )}
    >
      <div className="relative  p-5">
        <div className="absolute right-4 top-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-border">
            <Image
              src={review.reviewerAvatar}
              alt={review.reviewerName}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="pr-16">
          <h3 className="mb-2 text-base font-bold text-foreground">
            {review.title}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
            {review.comment}
          </p>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(review.rating)
                      ? "fill-deep-yellow text-deep-yellow"
                      : "fill-muted text-muted",
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              {review.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full aspect-4/2 sm:aspect-4/3">
        <Image
          src={review.productImage}
          alt={`Product reviewed: ${review.title}`}
          fill
          className="object-cover"
        />
      </div>
    </Card>
  );
};

export default ReviewCard;
