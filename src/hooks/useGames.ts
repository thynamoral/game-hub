import { gameQuery } from "App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (gameQuery: gameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery?.sortOrder,
      },
    },
    [gameQuery]
  );
  return { data, error, isLoading };
};

export default useGames;
