import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "hooks/useGameScreenshots";

interface Props {
  gameId: string;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw new Error();
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} marginTop={5}>
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
