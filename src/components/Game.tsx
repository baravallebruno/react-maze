import Row from "./ui/Row";
import { createPrefixedIndex } from "../utils/common";
import { useEffect, useRef } from "react";
import Avatar from "./ui/avatar/Avatar";
import useMovementStore from "../store";
import useCellSize from "../hooks/useCellSize";
import useWalkMaze from "../hooks/useWalkMaze";

const Game = (): JSX.Element => {
  const {
    gameConfig: { maze },
    position,
    gameStatus,
    setMazeSize,
    sendMovements,
  } = useMovementStore((state) => ({
    gameConfig: state.gameConfig,
    position: state.position,
    gameStatus: state.gameStatus,
    setMazeSize: state.setMazeSize,
    sendMovements: state.sendMovements,
  }));

  const mazeRef = useRef<HTMLDivElement>(null);
  const mazeColumns = maze[0]?.length;
  const mazeRows = maze.length;
  const { cellSize } = useCellSize({ ref: mazeRef, base: mazeColumns });

  useEffect(() => {
    setMazeSize({ col: mazeColumns, row: mazeRows, cellSize });
  }, [mazeColumns, mazeRows, cellSize]);

  useWalkMaze();

  useEffect(() => {
    if (gameStatus === "finished") {
      sendMovements();
    }
  }, [gameStatus]);

  return (
    <div
      ref={mazeRef}
      className={`grid gap-0 relative bg-transparent w-maze-size h-maze-size`}
      style={{
        gridTemplateColumns: `repeat(${mazeColumns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${mazeRows}, minmax(0, 1fr))}}`,
      }}
    >
      {maze.map((row, index) => {
        const rowKey = createPrefixedIndex(index, "row");
        return (
          <Row
            key={rowKey}
            rowKey={rowKey}
            row={row}
          />
        );
      })}
      {position ? (
        <Avatar
          size={cellSize}
          position={position}
        />
      ) : null}
    </div>
  );
};

export default Game;
