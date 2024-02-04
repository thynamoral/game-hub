import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "components/GameCard";
import { GameCardSkeleton } from "components/GameCardSkeleton";
import useGames, { Platform } from "hooks/useGames";
import { Genre } from "hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={"25px"}>
        {isLoading
          ? skeletons.map((index) => <GameCardSkeleton key={index} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
