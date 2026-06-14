import { useSearchParams } from 'react-router';

export default function useCatalogParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    section: searchParams.get('section') || 'women',
    category: searchParams.get('category'),
    q: searchParams.get('q') || '',
    sort: searchParams.get('sort') || '',
    page: Number(searchParams.get('page')) || 1,
    limit: Number(searchParams.get('limit')) || 10,
  };

  const updateParams = (updates) => {
    const next = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        next.delete(key);
      } else {
        next.set(key, String(value));
      }
    });

    setSearchParams(next);
  };

  const setSection = (section) => {
    updateParams({
      section,
      page: 1,
    });
  };

  const setCategory = (category) => {
    updateParams({
      category,
      q: null,
      page: 1,
    });
  };

  const setSearch = (q) => {
    updateParams({
      q,
      category: null,
      page: 1,
    });
  };

  const setSort = (sort) => {
    updateParams({
      sort,
      page: 1,
    });
  };

  const setLimit = (limit) => {
    updateParams({
      limit,
      page: 1,
    });
  };

  const setPage = (page) => {
    updateParams({
      page,
    });
  };

  return {
    params,

    actions: {
      setSection,
      setCategory,
      setSearch,
      setSort,
      setLimit,
      setPage,
    },
  };
}
