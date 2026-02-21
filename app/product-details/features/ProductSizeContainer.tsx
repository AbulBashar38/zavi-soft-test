import ProductSizeButton from "@/components/ProductSizeButton";
import { sizeOptions } from "@/lib/constant";
import type { Dispatch, SetStateAction } from "react";

type ProductSizeContainerProps = {
  selectedSize: number;
  setSelectedSize: Dispatch<SetStateAction<number>>;
};

const ProductSizeContainer = ({
  selectedSize,
  setSelectedSize,
}: ProductSizeContainerProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide">Size</h2>
        <button
          type="button"
          className="text-xs font-semibold uppercase text-muted-foreground hover:text-foreground"
        >
          Size Chart
        </button>
      </div>

      <div className="grid grid-cols-8 gap-2">
        {sizeOptions.map((size) => (
          <ProductSizeButton
            key={size}
            size={size}
            isSelected={size === selectedSize}
            onSelect={setSelectedSize}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSizeContainer;
