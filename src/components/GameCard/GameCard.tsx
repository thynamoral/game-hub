import { CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { CriticScore } from "components/CriticScore";
import { GameCardContainer } from "components/GameCardContainer";
import { PlatformIconList } from "components/PlatformIconList";
import { Game } from "hooks/useGames";
import croppedImageUrl from "services/img-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  // const { colorMode } = useColorMode();
  return (
    <GameCardContainer>
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
    </GameCardContainer>
  );
};

export default GameCard;
