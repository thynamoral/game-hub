import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "components/GameGrid";
import GameHeading from "components/GameHeading/GameHeading";
import { GenreList } from "components/GenreList";
import { Navbar } from "components/Navbar";
import { PlatformSelector } from "components/PlatformSelector";
import { SortSelector } from "components/SortSelector";
import { Platform } from "hooks/useGames";
import { Genre } from "hooks/useGenres";
import { useState } from "react";

export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchQuery: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as gameQuery);

  // on select genre
  const onSelectGenre = (genre: Genre) => setGameQuery({ ...gameQuery, genre });
  // on select platform
  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  // on select sort order
  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };
  // on search game
  const onSearchGame = (searchQuery: string) => {
    setGameQuery({ ...gameQuery, searchQuery });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `240px 1fr`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar onSearchGame={onSearchGame} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={5}>
        <HStack marginBottom="15px">
          <GameHeading gameQuery={gameQuery} />
        </HStack>
        <HStack pb="10px" marginBottom="20px" flexWrap="wrap">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={onSelectPlatform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={onSelectSortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
