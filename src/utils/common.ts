import { GameStatus } from "../types/store";

/**
 * Create a prefixed index to use as a key for React components.
 *
 * @param index
 * @param prefix
 * @returns
 */
const createPrefixedIndex = (index: number, prefix: string): string =>
  `${prefix}-${index}`;

const isGameStatusFinished = (status: GameStatus): status is "finished" =>
  status === "finished";
const isGameStatusStarted = (status: GameStatus): status is "started" =>
  status === "started";
const isGameStatusReady = (status: GameStatus): status is "ready" =>
  status === "ready";

export {
  createPrefixedIndex,
  isGameStatusFinished,
  isGameStatusStarted,
  isGameStatusReady,
};
