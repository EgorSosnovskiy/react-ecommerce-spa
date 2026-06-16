import { useState } from 'react';
import { Link } from 'react-router';

import { Icons } from '../../../../../shared/constants/icons.js';
import { renderRatingStars } from '../../../../../shared/utils/renderRatingStars.js';
import { calculateOriginalPrice } from '../../../utils/calculateOriginalPrice.js';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);

  const originalPrice = calculateOriginalPrice(
    product.price,
    product.discountPercentage,
  );

  const hasDiscount = product.discountPercentage > 0;

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsAdded(true);
  };

  return (
    <Link to={`/catalog/${product.id}`} className={styles.card}>
      <article className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <button type="button" className={styles.favoriteButton}>
            {Icons.heart}
          </button>

          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.image}
          />

          <div className={styles.ratingBadge}>
            {renderRatingStars(product.rating)}
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{product.title}</h3>

          <div className={styles.bottomRow}>
            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>${product.price}</span>

              {hasDiscount && (
                <span className={styles.oldPrice}>${originalPrice}</span>
              )}
            </div>

            <button
              type="button"
              className={`${styles.cartButton} ${isAdded ? styles.added : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? 'Added' : Icons.cart}
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
