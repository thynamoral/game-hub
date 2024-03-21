import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "services/api-client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "store";

export interface Game {
  id: number;
  name: string;
  slug: number | string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery.searchQuery,
          page: pageParam,
        },
      }),
    staleTime: ms("1d"), // 1 day
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
