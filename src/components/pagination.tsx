
import { scrollToTop } from "../utils/scroll-to-top";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import { useEffect } from "react";


interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  refetch: any;
  pages: number;
}

export const Pagination = ({ currentPage, setCurrentPage, refetch, pages  }: Props) => {

  const handleNextPage = () => {
    if (currentPage < pages) { 
      setCurrentPage(currentPage + 1);
    }
    refetch({ page: currentPage })
  }
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    refetch({ page: currentPage })
  }

  useEffect(() => {
    scrollToTop({ smooth: true });
  }, [currentPage]);

  return (
    <div className="flex w-full justify-center items-center gap-4 mx-auto my-10">
      <button
        disabled={ currentPage === 1 } 
        className={
          clsx(
            "text-2xl",
            {
              "btn-primary": currentPage > 1,
              "btn-disabled": currentPage <= 1,
            }
          )
        }
        onClick={handlePrevPage}
      >
        <IoIosArrowBack />
      </button>

      <p>Page {currentPage} of { pages} </p>
      
      <button 
        disabled={ currentPage === pages }
        className={
          clsx(
            "text-2xl",
            {
              "btn-primary": currentPage < pages,
              "btn-disabled": currentPage === pages,
            }
          )
        } 
        onClick={handleNextPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  )
}