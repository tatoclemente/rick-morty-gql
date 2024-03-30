
import { scrollToTop } from "../utils/scroll-to-top";


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
    scrollToTop({ smooth: true })
  }
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    refetch({ page: currentPage })
    scrollToTop({ smooth: true })
  }
  return (
    <div className="flex w-full justify-center items-center gap-2 mx-auto">
      <button className="btn-primary text-xl" onClick={handlePrevPage}>Prev</button>
      <p>Page {currentPage} of { pages} </p>
      <button className="btn-primary text-xl" onClick={handleNextPage}>Next</button>
    </div>
  )
}