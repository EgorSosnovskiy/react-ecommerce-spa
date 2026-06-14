import { Link } from 'react-router';
import { calculateDiscountPrice } from '../../utils/calculateDiscountPrice.js';

export default function ProductCard({ product }) {
  const discountedPrice = calculateDiscountPrice(
    product.price,
    product.discountPercentage,
  );

  const hasDiscount = product.discountPercentage > 0;

  return (
    <Link to={`/catalog/${product.id}`}>
      <article>
        <img src={product.thumbnail} alt={product.title} width="200" />

        <h3>{product.title}</h3>

        <div>
          <span>${discountedPrice}</span>

          {hasDiscount && <span> ${product.price}</span>}
        </div>

        <p>⭐ {product.rating}</p>
      </article>
    </Link>
  );
}
