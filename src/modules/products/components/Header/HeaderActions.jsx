import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { destroySession } from 'modules/auth';

import { Icons } from '../../../../shared/constants/icons.js';
import { ROUTES } from '../../../../shared/constants/routes.js';
import styles from './HeaderActions.module.css';

export default function HeaderActions() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleLogout = () => {
    destroySession(dispatch);
  };

  return (
    <div className={styles.actions}>
      <span>{Icons.favorites} 0</span>
      <span>{Icons.cart} 0</span>
      {user ? (
        <button
          type="button"
          onClick={handleLogout}
          className={styles.actionButton}
          aria-label="Logout"
        >
          {Icons.door}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleLogin}
          className={styles.actionButton}
          aria-label="Login"
        >
          {Icons.human}
        </button>
      )}
    </div>
  );
}
