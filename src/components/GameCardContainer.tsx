import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="300px"
      borderRadius="lg"
      overflow="hidden"
      padding={{ base: 3, md: 5 }}
      margin={{ base: 2, md: 4 }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
