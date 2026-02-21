export type ProductCategory = {
  id: number;
  name: string;
  slug?: string;
  image?: string;
  creationAt?: string;
  updatedAt?: string;
};

export type Product = {
  id: number;
  title: string;
  slug?: string;
  price: number;
  description?: string;
  images?: string[];
  category?: ProductCategory;
  creationAt?: string;
  updatedAt?: string;
};

export default Product;
