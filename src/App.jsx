import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { router } from './router/router.jsx';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}
