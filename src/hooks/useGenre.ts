import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === genreId);
};

export default useGenre;
