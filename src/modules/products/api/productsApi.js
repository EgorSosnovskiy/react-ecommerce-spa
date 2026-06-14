import { apiSlice } from '../../../app/api/apiSlice.js';

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ sortBy, order, limit, skip } = {}) => ({
        url: '/products',
        params: {
          sortBy,
          order,
          limit,
          skip,
        },
      }),
    }),

    getCategories: builder.query({
      query: () => '/products/categories',
    }),

    getProductsByCategory: builder.query({
      query: ({ category, sortBy, order, limit, skip }) => ({
        url: `/products/category/${category}`,
        params: {
          sortBy,
          order,
          limit,
          skip,
        },
      }),
    }),

    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
    }),

    searchProducts: builder.query({
      query: ({ searchValue, sortBy, order, limit, skip }) => ({
        url: '/products/search',
        params: {
          q: searchValue,
          sortBy,
          order,
          limit,
          skip,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
} = productsApi;
