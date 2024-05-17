import { CellType, MazeType, Position } from "../types/common";

const isStartPosition = (cell: CellType): cell is 2 => cell === 2;

const findStartPosition = (maze: MazeType): Position | undefined => {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (isStartPosition(maze[row][col])) {
        return { row, col };
      }
    }
  }
  return undefined;
};

/**
 * Check if the position is outside the maze bounds
 *
 * @param maze
 * @param pos
 * @returns True if the position is outside the maze bounds false otherwise
 */
const isPositionInsideBounds = (maze: MazeType, pos: Position): boolean =>
  pos.row < 0 ||
  pos.col < 0 ||
  pos.row >= maze.length ||
  pos.col >= maze[0].length;

type FindMazePathProps = {
  maze: MazeType;
  start?: Position;
};

type Path = Position[];

/**
 * Find the path to the exit of the maze using Depth First Search algorithm.
 *
 * @param param.maze
 * @param param.start
 * @returns The path to the exit of the maze.
 */
const findMazePath = ({ maze, start }: FindMazePathProps): Path | undefined => {
  if (!start) return;

  const directions = [
    { row: 1, col: 0 }, // down
    { row: 0, col: 1 }, // right
    { row: -1, col: 0 }, // up
    { row: 0, col: -1 }, // left
  ];
  const path: Position[] = [];
  const visited: boolean[][] = maze.map((row) => row.map(() => false));

  /**
   * Depth First Search algorithm function
   * to find the path to the exit of the maze.
   */
  const dfs = (position: Position): boolean => {
    if (
      isPositionInsideBounds(maze, position) ||
      maze[position.row][position.col] === 1 ||
      visited[position.row][position.col]
    ) {
      return false;
    }
    visited[position.row][position.col] = true;
    path.push(position);

    if (maze[position.row][position.col] === 3) {
      return true;
    }

    for (const dir of directions) {
      const newPos: Position = {
        row: position.row + dir.row,
        col: position.col + dir.col,
      };
      if (dfs(newPos)) return true;
    }

    path.pop();
    return false;
  };

  dfs(start);
  return path;
};

export { findStartPosition, findMazePath };
