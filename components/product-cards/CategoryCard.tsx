import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types/productsType";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

type CategoryCardProps = {
  category: ProductCategory;
  className?: string;
};

const CategoryCard = ({ category, className }: CategoryCardProps) => {
  const categoryImage = category.image ?? "/images/hero-feature1.jpg";

  return (
    <Card
      className={cn(
        "group relative h-80 cursor-pointer overflow-hidden bg-muted p-0 shadow-none ring-0 lg:h-[40em]",
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
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 lg:p-8">
        <div className="w-1/2">
          <h3 className="text-2xl font-bold uppercase leading-tight text-white lg:text-3xl">
            {category.name}
          </h3>
        </div>

        <Button size={"icon"} className="bg-black w-10 aspect-square">
          <ArrowUpRight className="h-5 w-5 lg:h-6 lg:w-6" />
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;
