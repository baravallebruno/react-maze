import { SPEED } from "../config/constants";
import useMazeStore from "../store";
import { Alien, Level } from "../types/common";
import CharacterImage from "./ui/avatar/characters/CharacterImage";

type ScenarioProps = {
  content: React.ReactNode;
  leftContent: React.ReactNode;
};

type LevelInfoProps = {
  level?: Level;
};

type AlienInfoProps = {
  alien?: Alien;
};

const EmptySelection = ({ message }: { message: string }) => {
  return <p className="text-white font-maze-font text-xl">{message}</p>;
};

const LevelInfo = ({ level }: LevelInfoProps) => {
  return (
    <div className="flex items-center flex-col gap-2 col-span-3">
      <p className="text-white font-maze-font text-4xl font-bold">Level</p>
      {level ? (
        <p className="text-alien-yellow font-maze-font text-4xl">{level}</p>
      ) : (
        <EmptySelection message="Select a level" />
      )}
    </div>
  );
};

const AlienInfo = ({ alien }: AlienInfoProps) => {
  const speedMap = {
    [SPEED.SLOW]: "Slow",
    [SPEED.FAST]: "Fast",
  };

  return (
    <div className="flex items-center flex-col gap-2 col-span-6">
      <p className="text-white font-maze-font text-4xl font-bold">Character</p>
      {alien ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12">
              <CharacterImage alienKey={alien?.key} />
            </div>
            <p className="text-alien-dark-blue bg-alien-yellow px-2 font-maze-font text-2xl">
              {alien?.name}
            </p>
          </div>
          <p className="text-white font-maze-font text-2xl">
            Speed: {`${speedMap[alien?.speed]}`}
          </p>
        </div>
      ) : (
        <EmptySelection message="Select an alien" />
      )}
    </div>
  );
};

const UserSelection = () => {
  const {
    gameConfig: { level, alien },
  } = useMazeStore((state) => ({
    gameConfig: state.gameConfig,
  }));

  return (
    <section className="grid grid-cols-9 w-maze-size gap-2 p-2 h-40 place-content-center mb-6 border-white border-4">
      <LevelInfo level={level} />
      <AlienInfo alien={alien} />
    </section>
  );
};

const Scenario = ({ content, leftContent }: ScenarioProps) => {
  return (
    <div className=" bg-alien-blue grid grid-cols-8">
      <nav className="grid col-span-2 h-screen">{leftContent}</nav>
      <section className="bg-[url('./assets/background.svg')] bg-repeat-x bg-bottom bg-alien-dark-blue grid h-screen col-span-6 content-center">
        <div className="grid place-items-center">
          <UserSelection />
          {content}
        </div>
      </section>
    </div>
  );
};

export default Scenario;
