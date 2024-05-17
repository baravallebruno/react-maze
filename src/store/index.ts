import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveMovements } from "../api/movements";
import { Alien, Level, MazeType, Position } from "../types/common";

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

type Actions = {
  setActiveStage: (stage: StageKey) => void;
  setMazeSize: (size: { col: number; row: number; cellSize: number }) => void;
  setGameStatus: (gameStatus: GameStatus) => void;
  setPosition: (position: Position) => void;
  addMovement: (movement: string) => void;
  sendMovements: () => Promise<void>;
  selectGameConfig: (config: GameConfig) => void;
  resetGame: () => void;
};

type Store = State & Actions;

const initialState: State = {
  movements: [],
  position: undefined,
  gameStatus: "initial",
  gameConfig: {
    level: undefined,
    maze: [],
    alien: undefined,
  },
  mazeSize: { col: 0, row: 0, cellSize: 0 },
  activeStage: "welcome",
};

const useMazeStore = create<Store>()(
  devtools((set) => ({
    ...initialState,
    selectGameConfig: (config) => set({ gameConfig: config }),
    setActiveStage: (stage) => set({ activeStage: stage }),
    setMazeSize: (size) => set({ mazeSize: size }),
    setGameStatus: (gameStatus: GameStatus) => set({ gameStatus }),
    setPosition: (position) => set({ position }),
    addMovement: (movement) =>
      set((state) => ({ movements: [...state.movements, movement] })),
    sendMovements: async () => {
      const response = await saveMovements(useMazeStore.getState().movements);

      if (response.success) {
        set({
          ...initialState,
          gameStatus: "finished",
          gameConfig: useMazeStore.getState().gameConfig,
          movements: response.movements,
          activeStage: "end",
        });
      }
    },
    resetGame: () => set({ ...initialState, activeStage: "game" }),
  }))
);

export default useMazeStore;
export { initialState };
