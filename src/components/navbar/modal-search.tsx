import clsx from "clsx"
import { useRef } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { useClickOutSide } from "../../hooks/use-click-outside"
import { Searchbar } from ".."


export const ModalSearch = () => {

  const ref = useRef<HTMLDivElement>(null)

  const { setShowModal, showModal } = useClickOutSide(ref)

  return (
    <div className="sm:hidden">
      <button 
      onClick={() => setShowModal(!showModal)}
      className='flex sm:hidden justify-center items-center w-8 h-8 rounded-full bg-slate-800 text-lime-500'>
        <IoSearchOutline />
      </button>
      <div ref={ref} className={
        clsx(
          "modal-search",
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