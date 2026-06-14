export default function SortSelect({ value, onChange }) {
  return (
    <div>
      <span>Sort by:</span>

      <button
        type="button"
        onClick={() => onChange('price-asc')}
        aria-pressed={value === 'price-asc'}
      >
        Ascending price
      </button>

      <button
        type="button"
        onClick={() => onChange('price-desc')}
        aria-pressed={value === 'price-desc'}
      >
        Descending price
      </button>
    </div>
  );
}
