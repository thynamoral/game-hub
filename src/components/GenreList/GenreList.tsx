import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { GenreSkeleton } from "components/GenreSkeleton";
import useGenres from "hooks/useGenres";
import croppedImageUrl from "services/img-url";

const GenreList = () => {
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
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={croppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={"5px"}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
