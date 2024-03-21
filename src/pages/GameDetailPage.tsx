import { Heading, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "components/ExpandableText";
import { GameAttributes } from "components/GameAttributes";
import useGame from "hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;
  if (error) throw new Error();

  console.log(game);

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText game={game!} />
      <GameAttributes game={game!} />
    </>
  );
};

export default GameDetailPage;
