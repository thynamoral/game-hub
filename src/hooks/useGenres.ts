import { useQuery } from "@tanstack/react-query";
// import genres from "data/genres";
import apiClient from "services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGenres;
