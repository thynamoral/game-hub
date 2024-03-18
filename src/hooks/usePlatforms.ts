import { useQuery } from "@tanstack/react-query";
import APIClient from "services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), // 1 day
  });
};

export default usePlatforms;
