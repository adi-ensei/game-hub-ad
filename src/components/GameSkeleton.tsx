import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden" marginRight={2}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameSkeleton;
