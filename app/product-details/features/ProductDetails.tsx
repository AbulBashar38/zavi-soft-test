import type { Product } from "@/types/productsType";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
      <ProductImages title={product.title} images={product.images ?? []} />
      <ProductInfo product={product} />
    </section>
  );
};

export default ProductDetails;
