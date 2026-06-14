import useCatalogParams from '../../hooks/useCatalogParams';

export default function Header() {
  const { params, actions } = useCatalogParams();
  return (
    <header>
      <input
        type="text"
        placeholder="Search products..."
        value={params.q}
        onChange={(event) => actions.setSearch(event.target.value)}
      />
    </header>
  );
}
