import { useLayoutEffect } from 'react';

import useCatalogParams from '../../hooks/useCatalogParams.js';
import useCatalogProducts from '../../hooks/useCatalogProducts.js';

import ProductsGrid from '../../components/ProductsGrid/ProductsGrid.jsx';
import ErrorState from '../../../../shared/components/states/ErrorState.jsx';
import EmptyState from '../../../../shared/components/states/EmptyState.jsx';
import SortSelect from '../../components/SortSelect/SortSelect.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import LoadingState from '../../../../shared/components/states/LoadingState.jsx';
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs.jsx';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import CategoriesSidebar from '../../components/CategoriesSidebar/CategoriesSidebar.jsx';

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
    return <LoadingState message="⏳ Loading products..." />;
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
