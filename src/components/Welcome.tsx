import useMazeStore from "../store";

const Welcome = () => {
  const { setActiveStage } = useMazeStore((state) => ({
    setActiveStage: state.setActiveStage,
  }));

  const handleStartGame = () => {
    setActiveStage("game");
  };

  return (
    <section className="grid w-full h-screen bg-alien-dark-blue place-content-center">
      <h2 className="m-auto text-white font-maze-font text-6xl">
        Welcome Alien!
      </h2>
      <p className="m-auto mt-4 text-amber-300 font-maze-font text-2xl">
        Are you ready to escape the maze?
      </p>
      <p className="m-auto mt-4 text-white font-maze-font text-xl w-3/4 text-center">
        Prevent the alien from getting lost in the maze. You can choose an alien
        and a maze to start the game, and then watch the alien find its way out
        of the maze.
      </p>
      <button
        onClick={handleStartGame}
        className="m-auto mt-8 border-4 border-amber-300 text-amber-300 font-maze-font text-xl px-4 py-2"
      >
        Let's Start
      </button>
    </section>
  );
};

export default Welcome;
