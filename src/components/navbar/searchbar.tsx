import { useContext } from "react"
import AppContext from "../../context/app-context"
import { IoSearchOutline } from "react-icons/io5"



export const Searchbar = () => {

  const { filter, setFilter, setCurrentPage } = useContext(AppContext)!

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFilter({
      ...filter,
      name: value,
    })
    setCurrentPage(1)
  }

  return (
    <div className="w-[95%] sm:w-[100%] h-10 relative">
      <input 
        value={ filter.name }
        placeholder="¡Find your favorite character!"
        onChange={ handleSearch }
        className="border-slate-900 border-2 rounded-full w-full h-full px-4 bg-lime-50" type="search" 
      />
      <div 
        className="absolute right-0 rounded-e-full top-1/2 -translate-y-1/2 bg-slate-900 h-full w-12 flex items-center justify-center"
      >
        <IoSearchOutline className="text-2xl text-lime-500" />
      </div>
    </div>
  )
}