import ReviewCard from "@/components/product-cards/ReviewCard";
import { Button } from "@/components/ui/button";
import type { Review } from "@/types/reviewType";

// Mock review data
const mockReviews: Review[] = [
  {
    id: 1,
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    reviewerName: "John Doe",
    reviewerAvatar: "https://i.pravatar.cc/150?img=12",
    productImage:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
  },
  {
    id: 2,
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    reviewerName: "Jane Smith",
    reviewerAvatar: "https://i.pravatar.cc/150?img=45",
    productImage:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
  },
  {
    id: 3,
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    reviewerName: "Mike Johnson",
    reviewerAvatar: "https://i.pravatar.cc/150?img=33",
    productImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
];

const ReviewSection = () => {
  return (
    <section className="mt-16 lg:mt-20">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Reviews
          </h2>

          <Button>SEE ALL</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
