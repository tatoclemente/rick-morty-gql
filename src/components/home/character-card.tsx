
import { AnimatedLink } from '..';
import { ResponseCharactersHome } from '../../interfaces/response.interfaces';


export const CharacterCard = ({ id, name, image }: ResponseCharactersHome) => {

  return (
    // <Link href={`/detail/${ id }`}>
      <AnimatedLink
        to={`/detail/${ id }`}
        className='mx-auto relative rounded-lg overflow-hidden hover:scale-105 transition-all hover:shadow-3xl-dark cursor-pointer hover:border-lime-500 border-transparent border-2'
      >
        <div className='absolute bg-slate-900 px-3 py-1 rounded-full bottom-2 left-[50%] translate-x-[-50%] w-5/6 shadow-3xl-dark'>
          <h3 className='text-lime-500 text-center'>{ name }</h3>
        </div>
        <img
          width="300"
          height="300"
          alt="character-image"
          src={image}
        />
      </AnimatedLink>
    // </Link>
  )
  
}