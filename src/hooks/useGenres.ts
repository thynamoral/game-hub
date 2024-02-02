import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const { data } = useData<Genre>("/genres");
  return { data };
};

export default useGenres;
