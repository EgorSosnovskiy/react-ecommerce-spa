import { createBrowserRouter } from 'react-router';

import { ROUTES } from '../shared/constants/routes.js';

import LoginPage from '../modules/auth/pages/LoginPage.jsx';

import CatalogLayout from '../modules/products/pages/CatalogLayout.jsx';
import CatalogPage from '../modules/products/pages/CatalogPage.jsx';
import ProductDetailsPage from '../modules/products/pages/ProductDetailsPage.jsx';
import NotFoundPage from '../modules/common/pages/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: CatalogPage,
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
