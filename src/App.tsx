import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "components/GameGrid";
import { GenreList } from "components/GenreList";
import { Navbar } from "components/Navbar";
import { PlatformSelector } from "components/PlatformSelector";
import { Genre } from "hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // on select genre
  const onSelectGenre = (genre: Genre) => setSelectedGenre(genre);
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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={5}>
        <HStack py="10px">
          <PlatformSelector />
        </HStack>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
