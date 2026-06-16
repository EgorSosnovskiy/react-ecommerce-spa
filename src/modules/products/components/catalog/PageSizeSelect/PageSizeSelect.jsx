import styles from './PageSizeSelect.module.css';

export default function PageSizeSelect({ value, onChange }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    >
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="48">48</option>
    </select>
  );
}
