import { useParams } from 'react-router';

import {
  BackButton,
  ProductBreadcrumbs,
  ProductGallery,
  ProductInfo,
  ProductPriceCard,
  ProductReviews,
  useGetProductByIdQuery,
} from 'modules/products';

import LoadingState from 'shared/components/LoadingState.jsx';
import ErrorState from 'shared/components/ErrorState.jsx';

import styles from './ProductDetailsPage.module.css';

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const { data: product, isLoading, error } = useGetProductByIdQuery(productId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <main className={styles.page}>
      <div className={styles.navigation}>
        <BackButton />

        <ProductBreadcrumbs product={product} />
      </div>

      <section className={styles.content}>
        <ProductGallery images={product.images} title={product.title} />

        <ProductInfo product={product} />

        <ProductPriceCard product={product} />
      </section>

      <ProductReviews reviews={product.reviews} />
    </main>
  );
}
