import { Heading } from "@chakra-ui/react";
import { gameQuery } from "App";
import useGenre from "hooks/useGenre";
import useFindPlatform from "hooks/usePlatform";

interface Props {
  gameQuery: gameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = useFindPlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
