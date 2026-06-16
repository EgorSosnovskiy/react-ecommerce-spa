import useDebounce from '../../../shared/hooks/useDebounce.js';
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
  useSearchProductsQuery,
} from '../api/productsApi.js';

export default function useCatalogProducts({ q, category, sort, page, limit }) {
  const skip = (page - 1) * limit;

  const sortBy =
    sort === 'price-asc' || sort === 'price-desc' ? 'price' : undefined;

  const order =
    sort === 'price-asc' ? 'asc' : sort === 'price-desc' ? 'desc' : undefined;

  const debouncedSearch = useDebounce(q, 500);

  const searchQuery = useSearchProductsQuery(
    {
      searchValue: debouncedSearch,
      sortBy,
      order,
      limit,
      skip,
    },
    {
      skip: !debouncedSearch,
    },
  );

  const categoryQuery = useGetProductsByCategoryQuery(
    {
      category,
      sortBy,
      order,
      limit,
      skip,
    },
    {
      skip: !category,
    },
  );

  const productsQuery = useGetProductsQuery({
    sortBy,
    order,
    limit,
    skip,
  });

  let activeQuery;

  if (debouncedSearch) {
    activeQuery = searchQuery;
  } else if (category) {
    activeQuery = categoryQuery;
  } else {
    activeQuery = productsQuery;
  }

  return {
    products: activeQuery.data?.products ?? [],
    total: activeQuery.data?.total ?? 0,
    isLoading: activeQuery.isLoading,
    error: activeQuery.error,
  };
}
