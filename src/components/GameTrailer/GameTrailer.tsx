import { Spinner } from "@chakra-ui/react";
import useTrailers from "hooks/useTrailers";

interface Props {
  gameId: number | string;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useTrailers(gameId);
  const targetTrailer = trailer?.results[0];

  if (isLoading) return <Spinner />;
  if (error) throw new Error();

  return !targetTrailer ? null : (
    <video
      src={targetTrailer?.data[480]}
      poster={targetTrailer?.preview}
      controls
    />
  );
};

export default GameTrailer;
