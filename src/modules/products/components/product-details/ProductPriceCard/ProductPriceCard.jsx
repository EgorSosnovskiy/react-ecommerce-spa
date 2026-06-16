import { calculateOriginalPrice } from '../../../utils/calculateOriginalPrice.js';

import styles from './ProductPriceCard.module.css';

export default function ProductPriceCard({ product }) {
  const originalPrice = calculateOriginalPrice(
    product.price,
    product.discountPercentage,
  );

  return (
    <aside className={styles.card}>
      <div className={styles.priceBlock}>
        <div className={styles.priceRow}>
          <h2 className={styles.price}>${product.price}</h2>

          <span className={styles.oldPrice}>${originalPrice}</span>
        </div>
        <span className={styles.discount}>-{product.discountPercentage}%</span>
      </div>

      <div className={styles.buttons}>
        <button className={styles.addToCart}>Add to Cart</button>

        <button className={styles.buyNow}>Buy Now</button>
      </div>
    </aside>
  );
}
