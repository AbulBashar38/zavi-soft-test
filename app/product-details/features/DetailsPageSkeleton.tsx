import { Skeleton } from "@/components/ui/skeleton";

const DetailsPageSkeleton = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="aspect-4/5 rounded-3xl" />
        ))}
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </section>
  );
};

export default DetailsPageSkeleton;
