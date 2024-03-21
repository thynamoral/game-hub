import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (id: string | number) => {
  return useQuery({
    queryKey: ["games", id],
    queryFn: () => apiClient.get(id),
    staleTime: ms("1d"),
  });
};

export default useGame;
