import useMazeStore from "../store";

const End = () => {
  const { movements } = useMazeStore((state) => ({
    movements: state.movements,
  }));

  return (
    <section>
      <p className="text-alien-yellow font-maze-font text-6xl">
        Alien escaped!
      </p>
      <div className="w-maze-size mt-4">
        <h3 className="text-white font-maze-font text-4xl mb-4">Stats</h3>
        <ul>
          <li className="text-white font-maze-font text-2xl">
            Movements: {movements.length}
          </li>
          <li className="text-white font-maze-font text-2xl">
            Path:
            <span className="text-alien-yellow text-lg">
              {movements.join(" -> ")}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default End;
