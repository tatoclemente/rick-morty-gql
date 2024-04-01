import { useContext } from 'react'
import { useLocation } from 'wouter'
import clsx from 'clsx'
import { LuFilterX } from 'react-icons/lu'
import { IoArrowBack, IoHomeOutline } from 'react-icons/io5'

import { AnimatedLink, ModalSearch, Searchbar } from '..'
import AppContext from '../../context/app-context'
import rickAndMortyPic from '../../assets/rick-and-morty.webp'


export const Navbar = () => {

  const { resetFilters } = useContext(AppContext)!

  const [location] = useLocation()

  
  const detailPage = location.includes('/detail/')

  return (
    <nav className={
      clsx(
        "flex justify-between items-center h-20 w-full px-6 border-b-2 bg-lime-500 border-slate-900 fixed z-50",
        {
          'flex-row-reverse': detailPage
        }
      )
    }>
      <AnimatedLink className='cursor-pointer' to='/'>
        <img width={60} height={60} src={ rickAndMortyPic } alt="Rick And Morty Logo" />
      </AnimatedLink>

      {
        !detailPage && (
          <div className='hidden sm:block sm:w-[50%] max-w-[600px]'>
            <Searchbar />
          </div>
        )
      }

      {
        !detailPage && (
          <ModalSearch />
        )
      }

      {
        !detailPage 
          ? (
            <div>
              <button onClick={ resetFilters } className='btn-primary gap-2'><LuFilterX /> Reset Filters</button>
            </div>
          ) : (
            <AnimatedLink className='cursor-pointer' to='/'>
              <span className='btn-primary gap-2'><IoArrowBack /><IoHomeOutline /> Volver</span>
            </AnimatedLink>
          )
      }
    </nav>
  )
}