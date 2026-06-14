export default function PageSizeSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  );
}
