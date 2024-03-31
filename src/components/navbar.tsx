
import { LuFilterX } from 'react-icons/lu'
import rickAndMortyPic from '../assets/rick-and-morty.webp'
import { useContext } from 'react'
import AppContext from '../context/app-context'
import { Searchbar } from '.'

export const Navbar = () => {

  const { resetFilters } = useContext(AppContext)!

  return (
    <nav className="flex justify-between items-center h-20 w-full px-6 border-b-2 bg-lime-500 border-slate-900 fixed">
      <div>
        <img width={60} height={60} src={ rickAndMortyPic } alt="Rick And Morty Logo" />
      </div>

      <Searchbar />

      <div>
        <button onClick={ resetFilters } className='btn-primary gap-2'><LuFilterX /> Reset Filters</button>
      </div>
    </nav>
  )
}