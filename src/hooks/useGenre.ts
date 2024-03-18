import useGenres from "./useGenres";

const useGenre = (genreId: number | null) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === genreId);
};

export default useGenre;
