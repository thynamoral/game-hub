import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  return (
    <Badge colorScheme={metacritic >= 75 ? "green" : "yellow"} paddingX={2}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
