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
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card
        _hover={{
          transform: "scale(1.03)",
        }}
      >
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
          </HStack>
          <Heading fontSize="2xl">
            <Link to={"/games/" + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />{" "}
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
