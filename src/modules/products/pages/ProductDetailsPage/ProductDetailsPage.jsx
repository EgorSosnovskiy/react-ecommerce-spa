import { useParams } from 'react-router';

import { useGetProductByIdQuery } from '../../api/productsApi.js';

import ProductBreadcrumbs from '../../components/product-details/ProductBreadcrumbs/ProductBreadcrumbs.jsx';
import BackButton from '../../components/product-details/BackButton/BackButton.jsx';
import ProductGallery from '../../components/product-details/ProductGallery/ProductGallery.jsx';
import ProductInfo from '../../components/product-details/ProductInfo/ProductInfo.jsx';
import ProductPriceCard from '../../components/product-details/ProductPriceCard/ProductPriceCard.jsx';
import ProductReviews from '../../components/product-details/ProductReviews/ProductReviews.jsx';

import LoadingState from '../../../../shared/components/states/LoadingState.jsx';
import ErrorState from '../../../../shared/components/states/ErrorState.jsx';

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
