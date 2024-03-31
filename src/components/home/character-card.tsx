import { ResponseCharactersHome } from '../../interfaces/response.interfaces';


export const CharacterCard = ({ id, name, image }: ResponseCharactersHome) => {
  
  return (
    <div
      className='mx-auto relative rounded-lg overflow-hidden'
      onClick={() => console.log(id)}
    >
      <div className='absolute'>
        <h3 className=''>{ name }</h3>
      </div>
      <img
        width="300"
        height="300"
        alt="character-image"
        src={image}
      />
    </div>
  )
  
}