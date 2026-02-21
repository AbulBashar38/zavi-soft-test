"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { addToCart } from "@/state-management/features/cartSlice";
import type { Product } from "@/types/productsType";
import { Heart } from "lucide-react";
import { useState } from "react";
import ProductColorContainer from "./ProductColorContainer";
import ProductDescription from "./ProductDescription";
import ProductSizeContainer from "./ProductSizeContainer";

type ProductInfoProps = {
  product: Product;
};

const colorOptions = [
  { name: "Shadow Navy", value: "#1f3046" },
  { name: "Army Green", value: "#8b9a82" },
];

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].name);
  const [selectedSize, setSelectedSize] = useState(38);
  const dispatch = useAppDispatch();

  return (
    <aside className="space-y-6 rounded-3xl bg-transparent p-0 xl:sticky xl:top-24">
      <div className="space-y-4">
        <span className="inline-flex rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
          New Release
        </span>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl">
            {product.title}
          </h1>
          <p className="text-4xl font-bold text-primary">${product.price}</p>
        </div>
      </div>

      <ProductColorContainer
        colorOptions={colorOptions}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ProductSizeContainer
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div className="flex items-center gap-2 w-full">
        <Button
          variant="secondary"
          className="flex-1"
          onClick={() =>
            dispatch(
              addToCart({
                product,
                quantity: 1,
                color: selectedColor,
                size: selectedSize,
              }),
            )
          }
        >
          ADD TO CART
        </Button>
        <Button variant="secondary" size="icon" className="h-12! w-12!">
          <Heart />
        </Button>
      </div>

      <Button className="w-full">BUY IT NOW</Button>

      <ProductDescription product={product} selectedColor={selectedColor} />
    </aside>
  );
};

export default ProductInfo;
