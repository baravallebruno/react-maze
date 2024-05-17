import { SPEED } from "../config/constants";

/**
 * Each cell can be of type:
 * - 0: Empty
 * - 1: Wall
 * - 2: Start
 * - 3: Exit
 *
 */
type CellType = 0 | 1 | 2 | 3;

type Position = {
  row: number;
  col: number;
};

type MazeType = CellType[][];

type Level = "1" | "2";
type LevelConfig = {
  [key in Level]: {
    maze: MazeType;
    name: string;
  };
};

type Character = "RedAlien" | "PurpleAlien";
type Alien = {
  key: Character;
  name: string;
  speed: SPEED;
};

type AlienConfig = {
  [key in Character]: Alien;
};

export type {
  CellType,
  Position,
  MazeType,
  Level,
  LevelConfig,
  Character,
  AlienConfig,
  Alien,
};
