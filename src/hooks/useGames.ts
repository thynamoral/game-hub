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

const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
  return { data, error, isLoading };
};

export default useGames;
