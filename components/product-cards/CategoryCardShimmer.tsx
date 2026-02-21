import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const CategoryCardShimmer = ({ className }: Props) => {
  return (
    <Card
      className={cn(
        "group relative h-80 cursor-pointer overflow-hidden bg-muted p-0 shadow-none ring-0 lg:h-[40em]",
        className,
      )}
    >
      <div className="relative h-full w-full">
        <Skeleton className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 lg:p-8">
        <div className="w-1/2">
          <Skeleton className="h-6 w-3/4 rounded-md lg:h-8" />
        </div>

        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </Card>
  );
};

export default CategoryCardShimmer;
