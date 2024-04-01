import { useQuery } from "@apollo/client";
import { useRoute } from "wouter";
import { GET_CHARACTER_BY_ID } from "../../gql/graphql-queries";
import { Spinner } from "..";


export const Detail = () => {

  const [_, params] = useRoute("/detail/:id");

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id: params?.id,
    }
  })
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <Spinner />
      </div>
    );
  }
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  

  return (
    <main className="bg-slate-900 w-full h-full pt-[80px] text-slate-200 flex gap-4 items-center justify-center">
      <div className="rounded-lg overflow-hidden border-slate-950 border-4">
        <img width={500} height={500} className="h-96 w-96" src={ data.character.image } alt="" />
      </div>
      <div className="text-lime-500 bg-slate-950 h-96 w-96 p-4 space-y-10 rounded-lg border-2 border-lime-500">
        <h1 className="text-2xl font-bold text-slate-200">{ data.character.name }</h1>
        <aside>
          <span className="text-lg flex">
            <p className="text-slate-200 min-w-[80px]">Status: </p> 
            { data.character.status }
          </span>
          <span className="text-lg flex">
            <span className="text-slate-200 min-w-[80px]">Specie: </span> 
            { data.character.species }
          </span>
          <span className="text-lg flex">
            <p className="text-slate-200 min-w-[80px]">Gender: </p> 
            { data.character.gender }
            </span>
          <span className="text-lg flex">
            <p className="text-slate-200 min-w-[80px]">Type: </p> 
            { data.character.type ? data.character.type : "unknown" }
          </span>
          <span className="text-lg flex">
            <p className="text-slate-200 min-w-[80px]">Origin: </p> 
            { data.character.origin.name }
          </span>
          <span className="text-lg flex">
            <p className="text-slate-200 min-w-[80px]">Location: </p> 
            { data.character.location.name }
          </span>
        </aside>
      </div>
    </main>
  )
}