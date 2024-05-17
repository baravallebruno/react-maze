import SelectionList from "../SelectionList";
import Radio from "../Radio";
import { levelConfig } from "../../../config";
import { isGameStatusStarted } from "../../../utils/common";
import { Level } from "../../../types/common";
import useMazeStore from "../../../store";

const SelectLevel = () => {
  const { maze, gameConfig, selectGameConfig, gameStatus } = useMazeStore(
    (state) => ({
      maze: state.gameConfig.maze,
      gameConfig: state.gameConfig,
      selectGameConfig: state.selectGameConfig,
      gameStatus: state.gameStatus,
    })
  );

  const handleChangeMazeLevel = (level: Level) => {
    selectGameConfig({
      ...gameConfig,
      maze: levelConfig[level].maze,
      level,
    });
  };

  return (
    <SelectionList title="Select maze level">
      {Object.entries(levelConfig).map(([key, value]) => {
        return (
          <Radio
            key={key}
            name="maze-level"
            value={key as Level}
            label={value.name}
            checked={value.maze === maze}
            onChange={handleChangeMazeLevel}
            disabled={isGameStatusStarted(gameStatus)}
          />
        );
      })}
    </SelectionList>
  );
};

export default SelectLevel;
