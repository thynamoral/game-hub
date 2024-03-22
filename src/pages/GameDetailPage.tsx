import { Heading, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "components/ExpandableText";
import { GameAttributes } from "components/GameAttributes";
import { GameTrailer } from "components/GameTrailer";
import useGame from "hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;
  if (error) throw new Error();

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText game={game!} />
      <GameAttributes game={game!} />
      <GameTrailer gameId={id!} />
    </>
  );
};

export default GameDetailPage;
