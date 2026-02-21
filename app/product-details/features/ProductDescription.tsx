import type { Product } from "@/types/productsType";

type ProductDescriptionProps = {
  product: Product;
  selectedColor: string;
};

const ProductDescription = ({
  product,
  selectedColor,
}: ProductDescriptionProps) => {
  return (
    <div>
      <div className="space-y-4 pt-1">
        <h2 className="text-lg font-semibold uppercase">About The Product</h2>

        <p className="text-sm text-muted-foreground">
          {selectedColor} / Performance Running Shoe
        </p>

        <p className="text-sm text-muted-foreground">
          {product.description ||
            "This product is excluded from all promotional discounts and offers."}
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Pay over time in interest-free installments with Affirm or Klarna.
          </li>
          <li>
            Join our club to unlock free shipping, returns, and exchanges.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
