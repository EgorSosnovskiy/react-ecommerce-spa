import { Link } from 'react-router';
import { formatCategoryName } from '../../../utils/formatCategoryName.js';
import { ROUTES } from '../../../../../shared/constants/routes.js';

import styles from './ProductBreadcrumbs.module.css';

export default function ProductBreadcrumbs({ product }) {
  return (
    <nav className={styles.breadcrumbs}>
      <Link to={ROUTES.CATALOG}>Catalog</Link>

      <span>/</span>

      <Link to={`${ROUTES.CATALOG}?category=${product.category}`}>
        {formatCategoryName(product.category)}
      </Link>

      <span>/</span>

      <span className={styles.current}>{product.title}</span>
    </nav>
  );
}
