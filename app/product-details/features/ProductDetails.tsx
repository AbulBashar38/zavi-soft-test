"use client";
import type { Product } from "@/types/productsType";
import { motion } from "framer-motion";
import ProductImageContainer from "./ProductImageContainer";
import ProductInfo from "./ProductInfo";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ProductImageContainer
          title={product.title}
          images={product.images ?? []}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <ProductInfo product={product} />
      </motion.div>
    </section>
  );
};

export default ProductDetails;
