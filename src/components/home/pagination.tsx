import { scrollToTop } from "../../utils/scroll-to-top";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import { useEffect } from "react";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  refetch: any;
  pages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  refetch,
  pages,
}: Props) => {
  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
    refetch({ page: currentPage });
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    refetch({ page: currentPage });
  };

  useEffect(() => {
    scrollToTop({ smooth: true });
  }, [currentPage]);

  const renderPageButtons = () => {
    const maxVisiblePages = 3;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(startPage + maxVisiblePages - 1, pages);

    if (currentPage <= halfMaxVisiblePages) {
      endPage = Math.min(maxVisiblePages, pages);
    } else if (currentPage >= pages - halfMaxVisiblePages) {
      startPage = Math.max(1, pages - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => index + startPage
    ).map((page: number) => (
      <button
        key={page}
        className={clsx("px-[11px] sm:px-3 py-1 rounded-full transition-all", {
          "bg-lime-300 text-slate-900": page === currentPage,
          "text-slate-200 hover:sm:text-lime-500 hover:sm:scale-[1.05]":
            page !== currentPage,
        })}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex w-full justify-center items-center gap-1 sm:gap-4 mx-auto my-10 text-sm sm:text-base">
      <button
        disabled={currentPage === 1}
        className={clsx("text-2xl", {
          "btn-primary": currentPage > 1,
          "btn-disabled": currentPage <= 1,
        })}
        onClick={handlePrevPage}
      >
        <IoIosArrowBack />
      </button>

      {currentPage > 2 && (
        <>
          <button
            onClick={() => setCurrentPage(1)}
            className={clsx(
              "px-3 py-1 rounded-full text-slate-200 transition-al",
              {
                "bg-lime-300 text-slate-900": 1 === currentPage,
                "hover:sm:text-lime-500 hover:sm:scale-[1.05]":
                  1 !== currentPage,
              }
            )}
          >
            1
          </button>
          ...
        </>
      )}
      {renderPageButtons()}
      {pages > 4 && currentPage < pages - 1 && (
        <>
          ...
          <button
            onClick={() => setCurrentPage(pages)}
            className={clsx("px-3 py-1 rounded-full transition-all", {
              "bg-lime-300 text-slate-900": pages === currentPage,
              "text-slate-200 hover:sm:text-lime-500 hover:sm:scale-[1.05]":
                pages !== currentPage,
            })}
          >
            {pages}
          </button>
        </>
      )}

      <button
        disabled={currentPage === pages}
        className={clsx("text-2xl", {
          "btn-primary": currentPage < pages,
          "btn-disabled": currentPage === pages,
        })}
        onClick={handleNextPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
