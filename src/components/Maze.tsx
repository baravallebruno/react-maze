import React from "react";
import { MazeType } from "./types";
import Row from "./Row";
import { createPrefixedIndex } from "../Utils";

interface MazeProps {
  maze: MazeType;
}

const Maze: React.FC<MazeProps> = ({ maze }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 md:w-1/2">
      {maze.map((row, index) => {
        const rowKey = createPrefixedIndex(index, "row");
        return (
          <Row
            key={rowKey}
            rowKey={rowKey}
            row={row}
          />
        );
      })}
    </div>
  );
};

export default Maze;
