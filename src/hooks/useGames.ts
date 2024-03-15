import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "App";
import APIClient from "services/api-client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: gameQuery) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery.searchQuery,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
