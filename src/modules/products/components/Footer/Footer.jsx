import { Icons } from '../../../../shared/constants/icons.js';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© {currentYear}</span>

        <div className={styles.logo}>{Icons.ok}</div>
      </div>
    </footer>
  );
}
