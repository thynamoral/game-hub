import { useQuery } from "@tanstack/react-query";
import Trailer from "entities/Trailer";
import ms from "ms";
import APIClient from "services/api-client";

const useTrailers = (gameId: number | string) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
  });
};

export default useTrailers;
