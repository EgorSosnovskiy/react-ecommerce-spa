import PageSizeSelect from '../PageSizeSelect/PageSizeSelect.jsx';

import { getPaginationPages } from '../../utils/getPaginationPages.js';

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
    <div>
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'<'}
      </button>

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`}>...</span>
        ) : (
          <button
            key={page}
            type="button"
            disabled={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'>'}
      </button>

      <PageSizeSelect value={pageSize} onChange={onPageSizeChange} />
    </div>
  );
}
