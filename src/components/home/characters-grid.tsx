import { useContext } from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../gql/characters/graphql-queries";
import {
  CharacterCard,
  FilteredSection,
  NotFound,
  Pagination,
  Spinner,
} from "..";

import type { ResponseCharactersHome } from "../../interfaces";
import AppContext from "../../context/app-context";

export const CharactersGrid = () => {
  const { currentPage, setCurrentPage, filter, setFilter } =
    useContext(AppContext)!;
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      filter: filter,
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <Spinner />
      </div>
    );
  }
  if (error) return <p>Error : {error.message}</p>;

  return (
    <section className="py-10 pt-[80px] bg-slate-800 text-white min-h-screen">
      <h1 className="text-xl text-center font-semibold mt-6  italic">
        <span className="text-4xl">Welcome</span> to the universe of{" "}
        <span className="text-4xl text-lime-500">Rick & Morty</span>
      </h1>

      <FilteredSection
        filter={filter}
        setFilter={setFilter}
      />

      {data.characters.results.length === 0 && <NotFound />}
      <div className="flex w-full">
        {data.characters.results.length > 0 && (
          <Pagination
            currentPage={currentPage}
            pages={data.characters.info.pages}
            refetch={refetch}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4 max-w-[1400px] mx-auto px-4">
        {data.characters.results.map((character: ResponseCharactersHome) => (
          <CharacterCard
            key={character.id}
            {...character}
          />
        ))}
      </div>
      {data.characters.results.length > 0 && (
        <Pagination
          currentPage={currentPage}
          pages={data.characters.info.pages}
          refetch={refetch}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
};
