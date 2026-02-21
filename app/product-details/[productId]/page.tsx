import ProductDetailsPage from "../features/ProductDetailsPage";

type Props = {
  params: Promise<{ productId: string }>;
};

const ProductIdPage = async ({ params }: Props) => {
  const { productId } = await params;

  return (
    <main className="container mx-auto px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <ProductDetailsPage productId={productId} />
    </main>
  );
};

export default ProductIdPage;
