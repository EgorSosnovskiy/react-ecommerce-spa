import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { logout } from '../../../auth/store/authSlice.js';
import { clearAuthData } from '../../../auth/utils/authStorage.js';

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
    dispatch(logout());
    clearAuthData();
  };

  return (
    <div className={styles.actions}>
      <span>💖 0</span>
      <span>👜 0</span>
      {user ? (
        <button
          type="button"
          onClick={handleLogout}
          className={styles.actionButton}
          aria-label="Logout"
        >
          🚪
        </button>
      ) : (
        <button
          type="button"
          onClick={handleLogin}
          className={styles.actionButton}
          aria-label="Login"
        >
          🙎‍♂️
        </button>
      )}
    </div>
  );
}
