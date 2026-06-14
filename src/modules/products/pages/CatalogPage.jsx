import { useLayoutEffect } from 'react';

import useCatalogParams from '../hooks/useCatalogParams.js';
import useCatalogProducts from '../hooks/useCatalogProducts.js';

import ProductsGrid from '../components/ProductsGrid/ProductsGrid.jsx';
import ErrorState from '../components/ErrorState/ErrorState.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';
import SortSelect from '../components/SortSelect/SortSelect.jsx';
import Pagination from '../components/Pagination/Pagination.jsx';
import LoadingState from '../components/LoadingState/LoadingState.jsx';
import CategoryTabs from '../components/CategoryTabs/CategoryTabs.jsx';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.jsx';
import CategoriesSidebar from '../components/CategoriesSidebar/CategoriesSidebar.jsx';

export default function CatalogPage() {
  const { params, actions } = useCatalogParams();

  const { products, total, isLoading, error } = useCatalogProducts(params);

  useLayoutEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [params.page, params.limit, isLoading]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <main>
      <CategoryTabs value={params.section} onChange={actions.setSection} />

      <Breadcrumbs section={params.section} category={params.category} />

      <div>
        <CategoriesSidebar
          selectedCategory={params.category}
          onCategorySelect={actions.setCategory}
        />

        <section>
          <SortSelect value={params.sort} onChange={actions.setSort} />

          {products.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <ProductsGrid products={products} />

              <Pagination
                currentPage={params.page}
                totalItems={total}
                pageSize={params.limit}
                onPageChange={actions.setPage}
                onPageSizeChange={actions.setLimit}
              />
            </>
          )}
        </section>
      </div>
    </main>
  );
}
