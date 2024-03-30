import { gql, useQuery } from "@apollo/client";

const App = () => {

  const GET_CHARACTERS = gql`
      query GetAllCharacters {
        characters {
          results {
            id
            name
            image
          }
        }
      }
    `

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  interface Response {
    id: number;
    name: string;
    image: string;
  }


  return data.characters.results.map(({ id, name, image }: Response) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="character-image" src={image} />
      <br />
      <br />
    </div>
  ));
}

  return (
    <main className="w-full h-screen grid grid-cols-3 justify-center mt-4">
      <h1 className="text-4xl font-semibold">Hola Rick & Morty</h1>
      <DisplayLocations />
    </main>
  )
}

export default App
