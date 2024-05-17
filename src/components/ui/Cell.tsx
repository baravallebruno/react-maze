import useMazeStore from "../../store";
import { CellType } from "../../types/common";

type CellProps = {
  cell: CellType;
};

const Cell = ({ cell }: CellProps) => {
  const {
    mazeSize: { cellSize },
  } = useMazeStore((state) => ({ mazeSize: state.mazeSize }));

  const isWall = cell === 1;
  const cellBackgroundColor = isWall ? "bg-maze-wall" : "bg-transparent";

  return (
    <div
      className={`${cellBackgroundColor}`}
      style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
    />
  );
};

export default Cell;
