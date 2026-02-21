import type { Product, ProductCategory } from "../types/productsType";
import apiConfig from "./apiConfig";
import { ENDPOINTS } from "./endpoint";

export const productsApi = apiConfig.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => ENDPOINTS.PRODUCTS,
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `${ENDPOINTS.PRODUCTS}/${id}`,
    }),
    getCategories: build.query<ProductCategory[], void>({
      query: () => ENDPOINTS.CATEGORIES,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
} = productsApi;

export default productsApi;
