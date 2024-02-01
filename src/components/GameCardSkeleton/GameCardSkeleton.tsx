import {
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"320px"} borderRadius={10} overflow="hidden">
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
