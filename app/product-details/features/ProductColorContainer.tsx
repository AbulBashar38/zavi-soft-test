import ProductColorButton from "@/components/ProductColorButton";
import type { Dispatch, SetStateAction } from "react";

type ColorOption = { name: string; value: string };

type ProductColorContainerProps = {
  colorOptions: ColorOption[];
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
};

const ProductColorContainer = ({
  colorOptions,
  selectedColor,
  setSelectedColor,
}: ProductColorContainerProps) => {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide">Color</h2>
      <div className="flex items-center gap-3">
        {colorOptions.map((color) => (
          <ProductColorButton
            key={color.name}
            colorName={color.name}
            colorValue={color.value}
            isSelected={selectedColor === color.name}
            onSelect={setSelectedColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColorContainer;
