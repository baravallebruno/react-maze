type CellType = "Start" | "Exit" | "Empty" | "Wall";

type Position = {
  row: number;
  col: number;
};

type MazeType = CellType[][];

export type { CellType, Position, MazeType };
