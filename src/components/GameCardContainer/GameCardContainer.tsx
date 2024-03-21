import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card
      borderRadius={"10px"}
      overflow={"hidden"}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.025)",
        transition: "all .2s",
      }}
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
