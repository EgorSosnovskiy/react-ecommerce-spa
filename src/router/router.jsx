import { createBrowserRouter, Navigate } from 'react-router';

import { ROUTES } from '../shared/constants/routes.js';

import LoginPage from '../modules/auth/pages/LoginPage.jsx';
import CatalogLayout from '../modules/products/pages/CatalogLayout/CatalogLayout.jsx';
import CatalogPage from '../modules/products/pages/CatalogPage/CatalogPage.jsx';
import ProductDetailsPage from '../modules/products/pages/ProductDetailsPage/ProductDetailsPage.jsx';
import NotFoundPage from '../shared/components/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Navigate to={ROUTES.CATALOG} replace />,
  },
  {
    path: ROUTES.LOGIN,
    Component: LoginPage,
  },
  {
    path: ROUTES.CATALOG,
    Component: CatalogLayout,
    children: [
      {
        index: true,
        Component: CatalogPage,
      },
      {
        path: ':productId',
        Component: ProductDetailsPage,
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
