import { useLayoutEffect } from 'react';

import {
  Breadcrumbs,
  CategoriesSidebar,
  CategoryTabs,
  Pagination,
  ProductsGrid,
  SortSelect,
  useCatalogParams,
  useCatalogProducts,
} from 'modules/products/index.js';
import EmptyState from 'shared/components/EmptyState.jsx';
import ErrorState from 'shared/components/ErrorState.jsx';
import LoadingState from 'shared/components/LoadingState.jsx';

import { Icons } from '../../shared/constants/icons.js';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {
  const { params, actions } = useCatalogParams();

  const { products, total, isLoading, error } = useCatalogProducts(params);

  useLayoutEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [params, isLoading]);

  if (isLoading) {
    return <LoadingState message={`${Icons.loading} Loading products..`} />;
  }

  if (error) {
    return (
      <ErrorState
        message="
        Failed to load products.
        Please try again later."
      />
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.tabsSection}>
        <div className={styles.catalogPage}>
          <div className={styles.tabsWrapper}>
            <CategoryTabs
              value={params.section}
              onChange={actions.setSection}
            />
          </div>
        </div>
      </div>

      <div className={styles.catalogSection}>
        <div className={styles.catalogPage}>
          <div className={styles.catalogLayout}>
            <CategoriesSidebar
              selectedCategory={params.category}
              onCategorySelect={actions.setCategory}
            />

            <section className={styles.catalogContent}>
              <Breadcrumbs
                section={params.section}
                category={params.category}
              />
              <SortSelect value={params.sort} onChange={actions.setSort} />

              {products.length === 0 ? (
                <EmptyState
                  message="
                  No products found.
                  Try changing search or filters."
                />
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
        </div>
      </div>
    </main>
  );
}
