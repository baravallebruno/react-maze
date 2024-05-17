import End from "./components/End";
import Game from "./components/Game";
import Scenario from "./components/Scenario";
import Welcome from "./components/Welcome";
import ControlBar from "./components/ui/controlBar";
import useMazeStore, { StageKey } from "./store";

function App() {
  const { activeStage } = useMazeStore((state) => ({
    activeStage: state.activeStage,
  }));

  const switchContentByStage = (stage: Exclude<StageKey, "welcome">) => {
    const gameStagesMap: Record<Exclude<StageKey, "welcome">, JSX.Element> = {
      game: <Game />,
      end: <End />,
    };

    return gameStagesMap[stage];
  };

  const isWelcomeStage = activeStage === "welcome";

  if (isWelcomeStage) {
    return <Welcome />;
  }

  return (
    <Scenario
      content={switchContentByStage(activeStage)}
      leftContent={<ControlBar />}
    />
  );
}

export default App;
