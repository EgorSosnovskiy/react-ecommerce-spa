import { formatCategoryName } from '../../../utils/formatCategoryName.js';
import { renderRatingStars } from '../../../../../shared/utils/renderRatingStars.js';

import styles from './ProductInfo.module.css';

export default function ProductInfo({ product }) {
  return (
    <section className={styles.info}>
      <h1 className={styles.title}>{product.title}</h1>

      <div className={styles.rating}>
        <span>{renderRatingStars(product.rating)}</span>

        <span>({product.rating})</span>

        <span className={styles.separator}>•</span>

        <span>{product.reviews.length} reviews</span>
      </div>

      <div className={styles.meta}>
        {product.brand && (
          <div className={styles.metaRow}>
            <span className={styles.label}>Brand</span>

            <span className={styles.dots}></span>

            <span className={styles.metaValue}>{product.brand}</span>
          </div>
        )}

        <div className={styles.metaRow}>
          <span className={styles.label}>Category</span>

          <span className={styles.dots}></span>

          <span className={styles.metaValue}>
            {formatCategoryName(product.category)}
          </span>
        </div>

        <div className={styles.metaRow}>
          <span className={styles.label}>Stock</span>

          <span className={styles.dots}></span>

          <span className={styles.metaValue}>{product.stock}</span>
        </div>
      </div>

      <div className={styles.description}>
        <h2>Description</h2>

        <p>{product.description}</p>
      </div>
    </section>
  );
}
