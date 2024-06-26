import { useRoute } from "wouter";
import { useQuery } from "@apollo/client";
import { CharacterInfo, NotFound, Spinner } from "..";
import { GET_CHARACTER_BY_ID } from "../../gql/graphql-queries";
import bgStars from "../../assets/bg-stars-1x1.webp";

export const Detail = () => {
  const [_, params] = useRoute("/detail/:id");

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id: params?.id,
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <Spinner />
      </div>
    );
  }

  return (
    <main className="bg-slate-950 w-full h-full relative">
      {error ? (
        <div className="flex h-full items-center">
          <NotFound />
        </div>
      ) : (
        <div className="detail-container">
          <div className="absolute z-2 w-[300%] sm:[170%] xl:w-[120%] h-[120%] sm:h-[150%] md:h-[180%] xl:h-[250%]">
            <img
              src={bgStars}
              alt=""
              className="h-full w-full object-cover animate-wiggle"
            />
          </div>

          <div className="detail-content">
            <div className="rounded-lg overflow-hidden border-lime-500 border-2 shadow-2xl-dark animate-ping-pong">
              <img
                width={500}
                height={500}
                className="h-96 w-96 max-w-full max-h-full object-cover"
                src={data.character.image}
                alt=""
              />
            </div>

            <CharacterInfo data={data.character} />
          </div>
        </div>
      )}
    </main>
  );
};
