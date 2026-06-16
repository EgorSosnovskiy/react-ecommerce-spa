import { createBrowserRouter, Navigate } from 'react-router';

import { ROUTES } from 'shared/constants/routes.js';

import LoginPage from 'pages/LoginPage/LoginPage.jsx';
import CatalogLayout from 'pages/CatalogLayout/CatalogLayout.jsx';
import CatalogPage from 'pages/CatalogPage/CatalogPage.jsx';
import ProductDetailsPage from 'pages/ProductDetailsPage/ProductDetailsPage.jsx';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage.jsx';

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
