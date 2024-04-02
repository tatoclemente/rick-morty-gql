import { Filter, Options } from "../../interfaces"
import { optionsGender, optionsSpecies, optionsStatus } from "../../utils/filtered-options";


interface Props {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  setCurrentPage: (page: number) => void;
}

export const FilteredSection = ({ filter, setFilter, setCurrentPage }: Props) => {

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, status: event.target.value });
    setCurrentPage(1); 
  };
  
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, gender: event.target.value });
    setCurrentPage(1); 
  };
  
  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, species: event.target.value });
    setCurrentPage(1); 
  };



  return (
    <header className="max-w-full w-[900px] flex flex-col gap-4 sm:flex-row justify-between px-6 mx-auto pt-6">
       
    <aside className="flex flex-col items-center">
      <label htmlFor="">Status</label>
      <select 
        value={ filter.status }
        onChange={ handleStatusChange }
        className="border-2 border-lime-500 max-w-full w-[300px] mx-2 sm:w-40 rounded-md p-1 text-slate-800 bg-lime-300"
      >
        {
          optionsStatus.map(( optionStatus: Options, index: number ) => (
            <option key={ index } value={ optionStatus.value }>{ optionStatus.label }</option>
          ))
        }
      </select>
    </aside>

    <aside className="flex flex-col items-center">
      <label htmlFor="">Gender</label>
      <select 
        value={ filter.gender }
        onChange={ handleGenderChange }
        className="border-2 border-lime-500 max-w-full w-[300px] mx-2 sm:w-40 rounded-md p-1 text-slate-800 bg-lime-300"
      >
        {
          optionsGender.map((optionGender: Options, index: number) => (
            <option key={ index } value={ optionGender.value }>{ optionGender.label }</option>
          ))
        }
      </select>
    </aside>
    <aside className="flex flex-col items-center">
      <label htmlFor="">Species</label>
      <select
        value={ filter.species }
        onChange={ handleSpeciesChange }
        className="border-2 border-lime-500 max-w-full w-[300px] mx-2 sm:w-40 rounded-md p-1 text-slate-800 bg-lime-300"
      >
        {
          optionsSpecies.map((optionSpecies: Options, index: number) => (
            <option key={ index } value={ optionSpecies.value }>{ optionSpecies.label }</option>
          ))
        }
      </select>
    </aside>
  </header>
  )
}