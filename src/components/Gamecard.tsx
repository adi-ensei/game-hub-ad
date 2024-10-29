import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image.url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          fallback={<Skeleton height="200px" />}
          borderRadius={10}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic ?? "N/A"} />{" "}
            {/* Handle potential null */}
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
