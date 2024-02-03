import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { GameCardContainer } from "components/GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
      </CardBody>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
