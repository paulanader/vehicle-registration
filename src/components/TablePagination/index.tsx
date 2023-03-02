import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const pageButtons = [];

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage;
    pageButtons.push(
      <li key={i} className={`page-item${isActive ? " active" : ""}`}>
        <button
          data-testid="button-page-change"
          className="page-link"
          onClick={() => handlePageChange(i)}
          disabled={isActive}
        >
          {i}
        </button>
      </li>
    );
  }

  return (
    <nav data-testid="table-pagination-container">
      <ul className="pagination">
        <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
          <button
            className="page-link"
            onClick={handlePreviousPage}
            data-testid="previous-page-button"
          >
            <AiOutlineArrowLeft color="#000" />
          </button>
        </li>
        {pageButtons}
        <li
          className={`page-item${
            currentPage === totalPages ? " disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={handleNextPage}
            data-testid="next-page-button"
          >
            <AiOutlineArrowRight color="#000" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TablePagination;
