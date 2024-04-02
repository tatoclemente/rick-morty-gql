import { Character } from "../../interfaces"
import rickAndMortyLogoText from "../../assets/rick_and_morty-logo-text.webp";

interface Props {
  data: Character
}

export const CharacterInfo = ({ data }: Props) => {
  return (
    <div className="text-lime-500 bg-slate-950 bg-opacity-65 h-auto sm:h-96 w-96 sm:min-w-96 max-w-full p-4 space-y-4 rounded-lg border-2 border-lime-500 animate-ping-pong">
    <h1 className="text-2xl font-bold text-slate-200">{ data.name }</h1>
    <aside className="text-base sm:text-lg">
      <span className="flex">
        <p className="text-slate-200 min-w-[80px]">Status: </p> 
        { data.status }
      </span>
      <span className="flex">
        <span className="text-slate-200 min-w-[80px]">Specie: </span> 
        { data.species }
      </span>
      <span className="flex">
        <p className="text-slate-200 min-w-[80px]">Gender: </p> 
        { data.gender }
        </span>
      <span className="flex">
        <p className="text-slate-200 min-w-[80px]">Type: </p> 
        { data.type ? data.type : "unknown" }
      </span>
      <span className="flex">
        <p className="text-slate-200 min-w-[80px]">Origin: </p> 
        { data.origin!.name }
      </span>
      <span className="flex">
        <p className="text-slate-200 min-w-[80px]">Location: </p> 
        { data.location!.name }
      </span>
      
      <div className="flex items-center justify-center mt-4 px-6">
        <img 
          width={ 250 } 
          height={100} 
          src={ rickAndMortyLogoText } 
          alt="Logo de Rick and Morty texto" 
          className="w-full"
        />
      </div>

    </aside>
  </div>
  )
}