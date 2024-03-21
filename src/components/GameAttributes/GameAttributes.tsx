import { SimpleGrid, Text } from "@chakra-ui/react";
import { AttributeDetail } from "components/AttributeDetail";
import { CriticScore } from "components/CriticScore";
import Game from "entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={10} marginTop={10}>
      <AttributeDetail heading="Platform">
        {game.parent_platforms?.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </AttributeDetail>
      <AttributeDetail heading="Metascore">
        <CriticScore metacritic={game.metacritic} />
      </AttributeDetail>
      <AttributeDetail heading="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </AttributeDetail>
      <AttributeDetail heading="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </AttributeDetail>
    </SimpleGrid>
  );
};

export default GameAttributes;
