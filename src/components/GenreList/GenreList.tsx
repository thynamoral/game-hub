import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "hooks/useGenres";
import croppedImageUrl from "services/img-url";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
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
