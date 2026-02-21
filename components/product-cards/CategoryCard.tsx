import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types/productsType";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type CategoryCardProps = {
  category: ProductCategory;
  className?: string;
};

const CategoryCard = ({ category, className }: CategoryCardProps) => {
  const categoryImage = category.image ?? "/images/hero-feature1.jpg";

  return (
    <Card
      className={cn(
        "group relative h-80 cursor-pointer overflow-hidden bg-muted p-0 shadow-none ring-0 transition-transform hover:scale-[1.02] lg:h-96",
        className,
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={categoryImage}
          alt={category.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 lg:p-8">
        <h3 className="text-2xl font-bold uppercase leading-tight text-white lg:text-3xl">
          {category.name}
        </h3>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110 lg:h-12 lg:w-12">
          <ArrowUpRight className="h-5 w-5 lg:h-6 lg:w-6" />
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
