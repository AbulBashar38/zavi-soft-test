import type { Product } from "@/types/productsType";
import ProductImageContainer from "./ProductImageContainer";
import ProductInfo from "./ProductInfo";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
      <ProductImageContainer title={product.title} images={product.images ?? []} />
      <ProductInfo product={product} />
    </section>
  );
};

export default ProductDetails;
