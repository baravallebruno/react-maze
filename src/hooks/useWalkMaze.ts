import { useEffect } from "react";
import { Position } from "../types/common";
import useMazeStore from "../store";
import { findMazePath, findStartPosition } from "../utils/path";

const useWalkMaze = () => {
  const {
    gameConfig: { maze, alien },
    gameStatus,
    setPosition,
    setGameStatus,
    addMovement,
  } = useMazeStore((state) => ({
    gameConfig: state.gameConfig,
    gameStatus: state.gameStatus,
    setPosition: state.setPosition,
    setGameStatus: state.setGameStatus,
    addMovement: state.addMovement,
  }));

  const walkThroughMaze = async (
    path: Position[] | undefined,
    speed: number = 500
  ): Promise<void> => {
    if (!path) return;

    for (const position of path) {
      const isLastPosition = position === path[path.length - 1];

      await new Promise((resolve) => setTimeout(resolve, speed / 2));

      addMovement(`(${position.row}, ${position.col})`);
      setPosition(position);

      if (isLastPosition) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setGameStatus("finished");
      }
    }
  };

  useEffect(() => {
    const startPosition = findStartPosition(maze);

    if (gameStatus === "started" && startPosition) {
      setPosition(startPosition);

      const path = findMazePath({ maze, start: startPosition });

      walkThroughMaze(path, alien?.speed);
    }
  }, [gameStatus, alien?.speed]);

  return;
};

export default useWalkMaze;
