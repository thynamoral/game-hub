import { useQuery } from "@tanstack/react-query";
import APIClient from "services/api-client";
import ms from "ms";
import Genre from "entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), // 1 day
  });
};

export default useGenres;
