import PageSizeSelect from '../PageSizeSelect/PageSizeSelect.jsx';

import { getPaginationPages } from '../../utils/getPaginationPages.js';

import styles from './Pagination.module.css';

export default function Pagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <button
          type="button"
          className={styles.arrow}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {'<'}
        </button>

        {pages.map((page, index) =>
          page === '...' ? (
            <span key={`dots-${index}`} className={styles.dots}>
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={`${styles.pageButton} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          className={styles.arrow}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {'>'}
        </button>
      </div>

      <PageSizeSelect value={pageSize} onChange={onPageSizeChange} />
    </div>
  );
}
