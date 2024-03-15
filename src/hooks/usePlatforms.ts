import apiClient from "services/api-client";
import { FetchResponse } from "./useData";
import { useQuery } from "@tanstack/react-query";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default usePlatforms;
