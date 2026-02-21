import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/productsType";
import Image from "next/image";

type PrimaryProductCardProps = {
  product: Product;
  className?: string;
};

const PrimaryProductCard = ({
  product,
  className,
}: PrimaryProductCardProps) => {
  const productImage = product.images?.[0] ?? "/images/hero-feature1.jpg";

  return (
    <Card
      className={cn("gap-3 bg-transparent py-0 shadow-none ring-0", className)}
    >
      <CardContent className="px-0">
        <div className="relative overflow-hidden rounded-4xl border-[6px] border-white bg-muted">
          <span className="absolute left-0 top-0 z-10 rounded-br-3xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
            New
          </span>

          <div className="relative w-full box-border aspect-square">
            <Image
              src={productImage}
              alt={product.title}
              className="object-cover object-center w-full h-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-4 px-0 pt-0">
        <h3 className="line-clamp-2 text-2xl  font-semibold uppercase">
          {product.title}
        </h3>

        <Button className="h-11 w-full rounded-lg bg-foreground text-sm font-semibold tracking-wide text-background hover:bg-foreground/90">
          VIEW PRODUCT -{" "}
          <span className="text-deep-yellow">${product.price}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PrimaryProductCard;
