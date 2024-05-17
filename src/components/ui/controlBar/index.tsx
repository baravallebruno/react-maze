import { useEffect } from "react";
import useMazeStore from "../../../store";
import SelectAlien from "./SelectAlien";
import SelectLevel from "./SelectLevel";
import Controls from "./Controls";

const ControlBar = () => {
  const { setGameStatus, gameConfig } = useMazeStore((state) => ({
    gameConfig: state.gameConfig,
    setGameStatus: state.setGameStatus,
  }));

  const { alien, maze } = gameConfig;

  useEffect(() => {
    if (!alien || !maze) return;
    setGameStatus("ready");
  }, [alien, maze]);

  return (
    <section className="p-8 flex flex-col justify-between">
      <h1 className="text-alien-yellow mb-12 font-maze-font text-6xl">
        Alien Maze Escape
      </h1>
      <SelectAlien />
      <SelectLevel />
      <Controls />
    </section>
  );
};

export default ControlBar;
