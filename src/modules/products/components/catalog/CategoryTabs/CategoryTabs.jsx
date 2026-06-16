const TABS = [
  { label: 'Women', value: 'women' },
  { label: 'Men', value: 'men' },
  { label: 'Unisex', value: 'unisex' },
  { label: 'Children', value: 'children' },
  { label: 'New', value: 'new' },
];

import styles from './CategoryTabs.module.css';

export default function CategoryTabs({ value, onChange }) {
  return (
    <nav className={styles.tabs} aria-label="Catalog sections">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={`${styles.tab} ${
            value === tab.value ? styles.active : ''
          }`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
