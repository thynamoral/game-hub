import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { CriticScore } from "components/CriticScore";
import { PlatformIconList } from "components/PlatformIconList";
import { Game } from "hooks/useGames";
import croppedImageUrl from "services/img-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const { colorMode } = useColorMode();
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      bg={colorMode === "light" ? "gray.400" : ""}
    >
      <Image src={croppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
