import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const { data, isLoading } = useData<Genre>("/genres");
  return { data, isLoading };
};

export default useGenres;
