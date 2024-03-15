import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "App";
import apiClient, { FetchResponse } from "services/api-client";
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
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery.searchQuery,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
