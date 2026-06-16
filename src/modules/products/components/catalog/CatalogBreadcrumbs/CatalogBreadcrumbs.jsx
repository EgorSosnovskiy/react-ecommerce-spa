import { formatCategoryName } from '../../../utils/formatCategoryName.js';
import styles from './CatalogBreadcrumbs.module.css';

export default function Breadcrumbs({ section, category }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <span>Home</span>

      {section && (
        <>
          <span className={styles.separator}>&gt;</span>

          <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </>
      )}

      {category && (
        <>
          <span className={styles.separator}>&gt;</span>

          <span>{formatCategoryName(category)}</span>
        </>
      )}
    </nav>
  );
}
