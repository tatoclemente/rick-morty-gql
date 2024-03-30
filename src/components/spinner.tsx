import rickSanchez from '../assets/rick-sanchez.png'

export const Spinner = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-52 w-52 border-t-4 border-b-4 border-lime-500"></div>
      <img 
        src={rickSanchez} 
        alt='Rick Sanchez'
        className="rounded-full h-48 w-48 object-cover" 
      />
    </div>
  )
}