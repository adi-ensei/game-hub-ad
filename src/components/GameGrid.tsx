import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Gamecard from "./Gamecard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {games.map((game) => (
          <Gamecard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
