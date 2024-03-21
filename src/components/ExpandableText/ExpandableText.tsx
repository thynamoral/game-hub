import { Box, Text, Button } from "@chakra-ui/react";
import Game from "entities/Game";
import { useState } from "react";

interface Props {
  game: Game;
}

const ExpandableText = ({ game }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const summary = expanded
    ? game.description_raw
    : `${game?.description_raw.slice(0, 300)} ... `;

  return (
    <Box>
      <Text>
        {summary}
        <Button
          colorScheme="yellow"
          size="xs"
          borderRadius="8px"
          onClick={() => setExpanded(!expanded)}
          ms={1}
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </Text>
    </Box>
  );
};

export default ExpandableText;
