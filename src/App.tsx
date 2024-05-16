import Maze from "./components/Maze";
import { MazeType } from "./components/types";

function App() {
  const maze: MazeType = [
    [
      "Wall",
      "Start",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Wall",
      "Empty",
      "Wall",
      "Empty",
      "Wall",
      "Wall",
    ],
    [
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Empty",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
    ],
    [
      "Wall",
      "Wall",
      "Wall",
      "Empty",
      "Wall",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
    ],
    [
      "Wall",
      "Wall",
      "Empty",
      "Wall",
      "Wall",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Wall",
    ],
    [
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Empty",
      "Wall",
      "Empty",
      "Empty",
      "Exit",
    ],
    [
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
      "Wall",
    ],
  ];

  return (
    <div className="grid place-items-center h-screen">
      <h1>React Maze</h1>
      <Maze maze={maze} />
    </div>
  );
}

export default App;
