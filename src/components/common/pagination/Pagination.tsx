import { Text } from "@components/typography/Text";
import { HalfArrowBoldIcon, HalfDoubleArrowBoldIcon } from "@svgs/index";
import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_VISIBLE_PAGES = 5;

  const visiblePages = useMemo(() => {
    const startPage = Math.max(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), 1);
    const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Start */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={`rounded-md ${
          currentPage === 1 ? "text-gray-200" : "text-gray-400 hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <HalfDoubleArrowBoldIcon width={24} height={24} />
      </button>

      {/* Previous */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-md ${
          currentPage === 1 ? "text-gray-200" : "text-gray-400 hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <HalfArrowBoldIcon width={24} height={24} />
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`flex justify-center items-center w-6 h-6 rounded-md cursor-pointer ${
            page === currentPage ? "bg-gray-100 text-base-black" : "text-gray-400 hover:bg-gray-50"
          }`}
        >
          <Text variant="sub_heading3">{page}</Text>
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`rounded-md ${
          currentPage === totalPages ? "text-gray-200" : "text-gray-400 hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <HalfArrowBoldIcon width={24} height={24} className="rotate-180" />
      </button>

      {/* End */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`rounded-md ${
          currentPage === totalPages ? "text-gray-200" : "text-gray-400 hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <HalfDoubleArrowBoldIcon width={24} height={24} className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
