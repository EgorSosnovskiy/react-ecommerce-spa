import { useGetCategoriesQuery } from '../../../api/productsApi.js';

import { formatCategoryName } from '../../../utils/formatCategoryName.js';

import ErrorState from '../../../../../shared/components/states/ErrorState.jsx';
import LoadingState from '../../../../../shared/components/states/LoadingState.jsx';

import styles from './CategoriesSidebar.module.css';
import { useState } from 'react';

export default function CategoriesSidebar({
  selectedCategory,
  onCategorySelect,
}) {
  const { data, isLoading, error } = useGetCategoriesQuery();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  if (isLoading) {
    return (
      <aside className={styles.sidebar}>
        <LoadingState variant="compact" message="⏳ Loading categories..." />
      </aside>
    );
  }

  if (error) {
    return (
      <aside className={styles.sidebar}>
        <ErrorState message="⚠️ Failed to load categories. Please try again later." />
      </aside>
    );
  }

  return (
    <>
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close categories' : 'Open categories'}
      </button>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <h2 className={styles.title}>Categories</h2>

        <nav>
          <ul className={styles.list}>
            <li>
              <button
                type="button"
                className={`${styles.categoryButton} ${
                  !selectedCategory ? styles.active : ''
                }`}
                onClick={() => {
                  onCategorySelect(null);
                  closeSidebar();
                }}
              >
                All Products
              </button>
            </li>

            {data.map((category) => (
              <li key={category.slug}>
                <button
                  type="button"
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.slug ? styles.active : ''
                  }`}
                  onClick={() => {
                    onCategorySelect(category.slug);
                    closeSidebar();
                  }}
                >
                  {formatCategoryName(category.name)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
