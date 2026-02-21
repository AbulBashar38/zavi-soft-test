import Review from "@/types/reviewType";

export const menuItems = {
  men: ["Sneakers", "Running", "Lifestyle"],
  women: ["Training", "Running", "Casual"],
};
export const mockReviews: Review[] = [
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
