import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "components/GameCard";
import { GameCardSkeleton } from "components/GameCardSkeleton";
import useGames from "hooks/useGames";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const GameGrid = () => {
  const { ref, inView } = useInView();
  const {
    data: games,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  if (isError) return <Text>{isError}</Text>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={"25px"}>
        {isLoading
          ? skeletons.map((index) => <GameCardSkeleton key={index} />)
          : games.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <Link key={game.id} to={`/games/${game.slug}`}>
                    <GameCard game={game} />
                  </Link>
                ))}
              </React.Fragment>
            ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button ref={ref} my="10px" onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
