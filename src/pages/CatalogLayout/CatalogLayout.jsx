import { Outlet } from 'react-router';

import { Header, Footer } from 'modules/products';

import styles from './CatalogLayout.module.css';

export default function CatalogLayout() {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.content}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
