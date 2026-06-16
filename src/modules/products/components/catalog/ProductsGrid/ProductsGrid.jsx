import ProductCard from '../ProductCard/ProductCard.jsx';
import styles from './ProductsGrid.module.css';

export default function ProductsGrid({ products }) {
  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
