import {
  CardBody,
  HStack,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { CriticScore } from "components/CriticScore";
import { GameCardContainer } from "components/GameCardContainer";
import { PlatformIconList } from "components/PlatformIconList";
import Game from "entities/Game";
import croppedImageUrl from "services/img-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const { colorMode } = useColorMode();
  return (
    <GameCardContainer>
      <Image src={croppedImageUrl(game.background_image)} />
      <CardBody bg={colorMode === "light" ? "gray.800" : ""}>
        <HStack justifyContent="space-between" marginBottom="10px">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading color={colorMode === "light" ? "white" : ""} size="md">
          {game.name}
        </Heading>
      </CardBody>
    </GameCardContainer>
  );
};

export default GameCard;
