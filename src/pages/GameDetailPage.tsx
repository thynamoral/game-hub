import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "components/ExpandableText";
import { GameAttributes } from "components/GameAttributes";
import { GameScreenshots } from "components/GameScreenshots";
import { GameTrailer } from "components/GameTrailer";
import useGame from "hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;
  if (error) throw new Error();

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      <Box>
        <Heading>{game?.name}</Heading>
        <ExpandableText game={game!} />
        <GameAttributes game={game!} />
      </Box>
      <Box>
        <GameTrailer gameId={id!} />
        <GameScreenshots gameId={id!} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
