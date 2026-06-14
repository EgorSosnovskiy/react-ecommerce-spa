import { useGetCategoriesQuery } from '../../api/productsApi.js';

import styles from './CategoriesSidebar.module.css';

export default function CategoriesSidebar({
  selectedCategory,
  onCategorySelect,
}) {
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
    return <aside>Loading categories...</aside>;
  }

  if (error) {
    return <aside>Failed to load categories.</aside>;
  }

  return (
    <aside>
      <h2>Categories</h2>

      <ul>
        <li>
          <button
            className={selectedCategory === null ? styles.active : ''}
            onClick={() => onCategorySelect(null)}
          >
            All
          </button>
        </li>

        {data.map((category) => (
          <li key={category.slug}>
            <button
              className={
                selectedCategory === category.slug ? styles.active : ''
              }
              onClick={() => onCategorySelect(category.slug)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
