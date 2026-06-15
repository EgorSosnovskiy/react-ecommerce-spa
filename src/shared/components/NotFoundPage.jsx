import { Link } from 'react-router';

import stateStyles from './states/State.module.css';

export default function NotFoundPage() {
  return (
    <main className={stateStyles.state}>
      <h1 className={stateStyles.code}>404</h1>

      <h2 className={stateStyles.title}>Page not found</h2>

      <p className={stateStyles.message}>
        The page you are looking for does not exist.
      </p>

      <Link to="/catalog" className={stateStyles.button}>
        Back to catalog
      </Link>
    </main>
  );
}
