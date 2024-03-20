import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import { GameGrid } from "components/GameGrid";
import GameHeading from "components/GameHeading/GameHeading";
import { GenreList } from "components/GenreList";
import { PlatformSelector } from "components/PlatformSelector";
import { SortSelector } from "components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `240px 1fr`,
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} padding={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={5}>
        <HStack marginBottom="15px">
          <GameHeading />
        </HStack>
        <HStack pb="10px" marginBottom="20px" flexWrap="wrap">
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
