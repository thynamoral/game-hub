import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Card>
  );
};

export default GameCardContainer;
