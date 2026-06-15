import styles from './HeaderNavigation.module.css';

export default function HeaderNavigation() {
  return (
    <nav className={styles.navigation}>
      <a href="#">About us</a>
      <a href="#">All shops</a>
      <a href="#">Become a merchant</a>
    </nav>
  );
}
