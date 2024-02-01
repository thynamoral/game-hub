import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "components/GameCard";
import { GameCardSkeleton } from "components/GameCardSkeleton";
import useGames from "hooks/useGames";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12} padding={5}>
        {isLoading &&
          skeletons.map((index) => <GameCardSkeleton key={index} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
