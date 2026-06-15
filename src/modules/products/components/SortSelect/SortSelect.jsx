import styles from './SortSelect.module.css';

export default function SortSelect({ value, onChange }) {
  return (
    <div className={styles.sort}>
      <span className={styles.label}>Sort by:</span>

      <button
        type="button"
        className={`${styles.option} ${
          value === 'price-asc' ? styles.active : ''
        }`}
        onClick={() => onChange('price-asc')}
      >
        Ascending price
      </button>

      <button
        type="button"
        className={`${styles.option} ${
          value === 'price-desc' ? styles.active : ''
        }`}
        onClick={() => onChange('price-desc')}
      >
        Descending price
      </button>
    </div>
  );
}
