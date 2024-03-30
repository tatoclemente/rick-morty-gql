import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../gql/characters/graphql-queries";
import { ResponseCharactersHome } from "../../interfaces";
import { CharacterCard, Pagination, Spinner } from "..";
import { useState } from "react";

export const CharactersGrid = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      // filter: {
      //   name: "mor",
      // },
    },
  });



  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    )
  };
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="py-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4 max-w-full">
        {data.characters.results.map(
          (character: ResponseCharactersHome) => (
            <CharacterCard key={character.id} { ...character } />
          )
        )}
      </div>
      <Pagination 
        currentPage={currentPage} 
        pages={data.characters.info.pages}
        refetch={refetch}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
