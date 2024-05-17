import { motion } from "framer-motion";
import useMazeStore from "../../../store";
import { CharacterImage } from "./characters";
import { Position } from "../../../types/common";

type AvatarProps = {
  size: number;
  position: Position;
};

const Avatar = ({ size, position }: AvatarProps): JSX.Element => {
  const {
    gameConfig: { alien },
  } = useMazeStore((state) => ({
    gameConfig: state.gameConfig,
  }));

  return (
    <motion.div
      className="absolute h-12"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={false}
      animate={{
        top: position.row * size,
        left: position.col * size,
      }}
      transition={{ type: "just", stiffness: 300 }}
    >
      <CharacterImage alienKey={alien?.key} />
    </motion.div>
  );
};

export default Avatar;
