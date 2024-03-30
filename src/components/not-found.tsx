import notFoundImg from '../assets/rick-and-morty-not-found.webp'

export const NotFound = () => {
  return (
    <section className='w-full max-w-[900px] flex flex-col sm:flex-row items-center justify-center mx-auto mt-10'>
      <div className='w-full sm:w-1/2'>
        <p className='text-4xl sm:text-4xl md:text-6xl text-lime-500 text-center'>
          No characters found
        </p>
      </div>
      <img src={ notFoundImg } alt="Rick and Morty saliendo del portal" className='w-3/4 sm:w-1/2' />
    </section>
  )
}