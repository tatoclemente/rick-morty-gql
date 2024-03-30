import React, { createContext, useState } from "react";
import { Filter } from "../interfaces";

interface AppContextType {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>
    resetFilters: () => void;
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: { children: React.ReactNode}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<Filter>({
    status: '',
    species: '',
    gender: '',
  })

  const resetFilters = () => {
    setFilter({
      status: '',
      species: '',
      gender: '',
    })
  }

  return (
    <AppContext.Provider value={{ 
        currentPage, 
        setCurrentPage,
        filter,
        setFilter,
        resetFilters,
      }}
    >
      { children }
    </AppContext.Provider>
  )

}

export default AppContext;