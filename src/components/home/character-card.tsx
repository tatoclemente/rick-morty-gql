import { ResponseCharactersHome } from '../../interfaces/response.interfaces';


export const CharacterCard = ({ id, name, image }: ResponseCharactersHome) => {
  
  return (
    <div
    className='mx-auto'
      onClick={() => console.log(id)}
    >
      <h3>{name}</h3>
      <img
        width="300"
        height="300"
        alt="character-image"
        src={image}
      />
    </div>
  )
  
}