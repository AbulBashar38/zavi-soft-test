"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductColorButtonProps = {
  colorName: string;
  colorValue: string;
  isSelected: boolean;
  onSelect: (colorName: string) => void;
};

const ProductColorButton = ({
  colorName,
  colorValue,
  isSelected,
  onSelect,
}: ProductColorButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => onSelect(colorName)}
      className={cn(
        "grid size-10 place-items-center rounded-full border bg-white p-0! hover:bg-white aspect-square  ",
        isSelected ? "border-foreground" : "border-border",
      )}
      aria-label={`Select ${colorName}`}
    >
      <span
        className="size-7 rounded-full border border-black/10"
        style={{ backgroundColor: colorValue }}
      />
    </Button>
  );
};

export default ProductColorButton;
