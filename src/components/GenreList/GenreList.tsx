import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { GenreSkeleton } from "components/GenreSkeleton";
import useGenres from "hooks/useGenres";
import croppedImageUrl from "services/img-url";
import useGameQueryStore from "store";

const GenreList = () => {
  const onSelectGenre = useGameQueryStore((store) => store.onSelectGenre);
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const { data: genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return isLoading ? (
    <List spacing={"10px"}>
      {skeletons.map((skeleton) => {
        return <GenreSkeleton key={skeleton} />;
      })}
    </List>
  ) : (
    <List>
      {genres?.results.map((genre) => (
        <ListItem
          key={genre.id}
          p={"6px 10px"}
          bg={selectedGenreId === genre.id ? "blue.300" : ""}
          borderRadius="12px"
        >
          <HStack>
            <Image
              src={croppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={"5px"}
              objectFit="cover"
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              variant="link"
              fontSize={"md"}
              onClick={() => onSelectGenre(genre.id)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
