import HeaderSearch from './HeaderSearch.jsx';
import HeaderNavigation from './HeaderNavigation.jsx';
import HeaderActions from './HeaderActions.jsx';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>👌</div>

          <div className={styles.logoText}>
            <p>2ND</p>
            <p>HAND</p>
            <p>MARKET</p>
          </div>
        </div>

        <HeaderSearch />

        <HeaderNavigation />

        <HeaderActions />
      </div>
    </header>
  );
}
