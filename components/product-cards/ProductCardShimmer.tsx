import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const ProductCardShimmer = ({ className }: Props) => {
  return (
    <Card
      className={cn("gap-3 bg-transparent py-0 shadow-none ring-0", className)}
    >
      <CardContent className="px-0">
        <div className="relative overflow-hidden rounded-4xl border-[6px] border-border bg-muted">
          <Skeleton className="absolute left-4 top-4 h-6 w-12 rounded-sm" />

          <div className="relative w-full box-border aspect-[5/3]">
            <Skeleton className="absolute inset-0 h-full w-full rounded-4xl" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-4 px-0 pt-0">
        <Skeleton className="h-8 w-3/4 rounded-md" />

        <Skeleton className="h-11 w-full rounded-lg" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardShimmer;
