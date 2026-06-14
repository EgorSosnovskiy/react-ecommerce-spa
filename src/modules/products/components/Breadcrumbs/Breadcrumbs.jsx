function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function Breadcrumbs({ section, category }) {
  return (
    <nav aria-label="Breadcrumb">
      <span>Home</span>

      {section && (
        <>
          {' / '}
          <span>{capitalize(section)}</span>
        </>
      )}

      {category && (
        <>
          {' / '}
          <span>{capitalize(category)}</span>
        </>
      )}
    </nav>
  );
}
