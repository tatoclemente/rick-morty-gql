import clsx from "clsx"
import { useRef } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { useClickOutSide } from "../hooks/use-click-outside"
import { Searchbar } from "."


export const ModalSearch = () => {

  const ref = useRef<HTMLDivElement>(null)

  const { setShowModal, showModal } = useClickOutSide(ref)

  return (
    <div className="sm:hidden">
      <button 
      onClick={() => setShowModal(!showModal)}
      className='flex sm:hidden justify-center items-center w-8 h-8 rounded-full bg-slate-900 text-lime-500'>
        <IoSearchOutline />
      </button>
      <div ref={ref} className={
        clsx(
          "absolute z-50 rounded-full top-[90px] left-[50%] translate-x-[-50%] w-[90vw] py-2 flex items-center justify-center bg-lime-500 shadow-3xl-dark transition-transform",
          {
            'scale-0': !showModal,
            'scale-100': showModal,
          }
        )
      }>
        <Searchbar />

      </div>
    </div>  
  )
}