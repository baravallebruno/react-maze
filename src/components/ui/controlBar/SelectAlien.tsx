import SelectionList from "../SelectionList";
import { alienConfig } from "../../../config";
import Radio from "../Radio";
import { isGameStatusStarted } from "../../../utils/common";
import useMazeStore from "../../../store";
import { Character } from "../../../types/common";

const SelectAlien = () => {
  const { alien, gameConfig, selectGameConfig, gameStatus } = useMazeStore(
    (state) => ({
      alien: state.gameConfig.alien,
      gameConfig: state.gameConfig,
      selectGameConfig: state.selectGameConfig,
      gameStatus: state.gameStatus,
    })
  );

  const handleChangeCharacter = (character: Character) => {
    selectGameConfig({
      ...gameConfig,
      alien: alienConfig[character],
    });
  };

  return (
    <SelectionList title="Select alien">
      {Object.entries(alienConfig).map(([key, value]) => {
        return (
          <Radio
            key={key}
            name="alien"
            value={key as Character}
            label={value.name}
            checked={key === alien?.key}
            disabled={isGameStatusStarted(gameStatus)}
            onChange={handleChangeCharacter}
          />
        );
      })}
    </SelectionList>
  );
};

export default SelectAlien;
