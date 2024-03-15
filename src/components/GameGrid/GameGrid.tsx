import { SimpleGrid, Text } from "@chakra-ui/react";
import { gameQuery } from "App";
import { GameCard } from "components/GameCard";
import { GameCardSkeleton } from "components/GameCardSkeleton";
import useGames from "hooks/useGames";

interface Props {
  gameQuery: gameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, isError, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (isError) return <Text>{isError}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={"25px"}>
      {isLoading
        ? skeletons.map((index) => <GameCardSkeleton key={index} />)
        : games?.results.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
