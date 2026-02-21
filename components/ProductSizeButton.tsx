"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductSizeButtonProps = {
  size: number;
  isSelected: boolean;
  onSelect: (size: number) => void;
};

const ProductSizeButton = ({
  size,
  isSelected,
  onSelect,
}: ProductSizeButtonProps) => {
  return (
    <Button
      variant={isSelected ? "secondary" : "outline"}
      onClick={() => onSelect(size)}
      className={cn(
        " rounded-lg! text-sm font-medium border-foreground/30 p-0!",
      )}
    >
      {size}
    </Button>
  );
};

export default ProductSizeButton;
