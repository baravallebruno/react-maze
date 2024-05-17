import { Alien, Level, MazeType, Position } from "./common";

type GameStatus = "initial" | "ready" | "started" | "finished";
type StageStatus = "initial" | "active" | "finished";
export type StageKey = "welcome" | "game" | "end";

export type Stage = {
  [key in StageKey]: StageStatus;
};

type GameConfig = {
  level: Level | undefined;
  maze: MazeType;
  alien: Alien | undefined;
};

type State = {
  gameConfig: GameConfig;
  mazeSize: { col: number; row: number; cellSize: number };
  position: Position | undefined;
  movements: string[];
  gameStatus: GameStatus;
  activeStage: StageKey;
};

export type { State, GameConfig, GameStatus, StageStatus };
