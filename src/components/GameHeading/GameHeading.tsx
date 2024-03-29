import { Heading } from "@chakra-ui/react";
import useGenre from "hooks/useGenre";
import useFindPlatform from "hooks/usePlatform";
import useGameQueryStore from "store";

const GameHeading = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const platform = useFindPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
