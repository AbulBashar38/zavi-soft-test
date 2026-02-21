import type { Product, ProductCategory } from "../types/productsType";
import apiConfig from "./apiConfig";
import { ENDPOINTS } from "./endpoint";

export const productsApi = apiConfig.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => ENDPOINTS.PRODUCTS,
    }),
    getCategories: build.query<ProductCategory[], void>({
      query: () => ENDPOINTS.CATEGORIES,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;

export default productsApi;
