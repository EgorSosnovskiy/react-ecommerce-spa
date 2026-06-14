import { Outlet } from 'react-router';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function CatalogLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
