const TABS = [
  {
    label: 'Women',
    value: 'women',
  },
  {
    label: 'Men',
    value: 'men',
  },
  {
    label: 'Unisex',
    value: 'unisex',
  },
  {
    label: 'Children',
    value: 'children',
  },
  {
    label: 'New',
    value: 'new',
  },
];

export default function CategoryTabs({ value, onChange }) {
  return (
    <nav aria-label="Catalog sections">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          aria-pressed={value === tab.value}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
