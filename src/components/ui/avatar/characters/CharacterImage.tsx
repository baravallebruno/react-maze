import { Alien } from "../../../../types/common";
import PurpleAlien from "./PurpleAlien";
import RedAlien from "./RedAlien";

type CharacterImageProps = {
  alienKey?: Alien["key"];
};

const CharacterImage = ({
  alienKey,
}: CharacterImageProps): JSX.Element | null => {
  const characterMap = {
    RedAlien: <RedAlien />,
    PurpleAlien: <PurpleAlien />,
  };

  if (!alienKey) {
    return null;
  }

  return characterMap[alienKey];
};

export default CharacterImage;
