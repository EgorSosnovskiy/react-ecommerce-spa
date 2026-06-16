export {
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
  useSearchProductsQuery,
} from './api/productsApi.js';
export { default as Breadcrumbs } from './components/catalog/CatalogBreadcrumbs/CatalogBreadcrumbs.jsx';
export { default as CategoriesSidebar } from './components/catalog/CategoriesSidebar/CategoriesSidebar.jsx';
export { default as CategoryTabs } from './components/catalog/CategoryTabs/CategoryTabs.jsx';
export { default as Pagination } from './components/catalog/Pagination/Pagination.jsx';
export { default as ProductsGrid } from './components/catalog/ProductsGrid/ProductsGrid.jsx';
export { default as SortSelect } from './components/catalog/SortSelect/SortSelect.jsx';
export { default as Footer } from './components/Footer/Footer.jsx';
export { default as Header } from './components/Header/Header.jsx';
export { default as BackButton } from './components/product-details/BackButton/BackButton.jsx';
export { default as ProductBreadcrumbs } from './components/product-details/ProductBreadcrumbs/ProductBreadcrumbs.jsx';
export { default as ProductGallery } from './components/product-details/ProductGallery/ProductGallery.jsx';
export { default as ProductInfo } from './components/product-details/ProductInfo/ProductInfo.jsx';
export { default as ProductPriceCard } from './components/product-details/ProductPriceCard/ProductPriceCard.jsx';
export { default as ProductReviews } from './components/product-details/ProductReviews/ProductReviews.jsx';
export { default as useCatalogParams } from './hooks/useCatalogParams.js';
export { default as useCatalogProducts } from './hooks/useCatalogProducts.js';
