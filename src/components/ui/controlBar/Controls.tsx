import React from "react";
import {
  isGameStatusFinished,
  isGameStatusReady,
  isGameStatusStarted,
} from "../../../utils/common";
import Button from "../Button";
import useMazeStore from "../../../store";

const Controls = () => {
  const { gameStatus, resetGame, setGameStatus } = useMazeStore((state) => ({
    gameStatus: state.gameStatus,
    resetGame: state.resetGame,
    setGameStatus: state.setGameStatus,
  }));

  const isGameStarted = isGameStatusStarted(gameStatus);
  const isStartButtonDisabled = !isGameStatusReady(gameStatus) || isGameStarted;

  const handleStartGame = () => {
    setGameStatus("started");
    console.log("Starting game");
  };

  const handleRestart = () => {
    resetGame();
  };

  return (
    <section className="flex flex-col gap-4 mt-auto mb-0">
      {isGameStatusFinished(gameStatus) ? (
        <Button
          title="Restart"
          onClick={handleRestart}
          isFullWidth
          variant="secondary"
        />
      ) : null}
      <Button
        title="Escape the maze"
        onClick={handleStartGame}
        isFullWidth
        disabled={isStartButtonDisabled}
      />
    </section>
  );
};

export default Controls;
