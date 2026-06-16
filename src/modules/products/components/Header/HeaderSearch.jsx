import { Icons } from '../../../../shared/constants/icons.js';
import useCatalogParams from '../../hooks/useCatalogParams.js';
import styles from './HeaderSearch.module.css';

export default function HeaderSearch() {
  const { params, actions } = useCatalogParams();

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder={Icons.search}
        value={params.q}
        onChange={(event) => actions.setSearch(event.target.value)}
      />
    </div>
  );
}
