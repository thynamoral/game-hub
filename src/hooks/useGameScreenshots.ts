import { useQuery } from "@tanstack/react-query";
import GameScreenshot from "entities/GameScreenshots";
import ms from "ms";
import APIClient from "services/api-client";

const useGameScreenshots = (gameId: string) => {
  const apiClient = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
  });
};

export default useGameScreenshots;
