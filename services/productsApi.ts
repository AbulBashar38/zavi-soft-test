import type { Product } from "../types/productsType";
import apiConfig from "./apiConfig";
import { ENDPOINTS } from "./endpoint";

export const productsApi = apiConfig.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => ENDPOINTS.PRODUCTS,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

export default productsApi;
