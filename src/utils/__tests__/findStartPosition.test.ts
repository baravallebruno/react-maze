import { describe, it, expect } from "vitest";
import { MazeType, Position } from "../../types/common";
import { findStartPosition } from "../path";
describe("findStartPosition", () => {
  it("should find the start position in the maze", () => {
    const maze: MazeType = [
      [1, 1, 1, 1],
      [1, 0, 2, 0],
      [1, 0, 1, 0],
      [1, 3, 1, 0],
    ];
    const expectedPosition: Position = { row: 1, col: 2 };

    expect(findStartPosition(maze)).toEqual(expectedPosition);
  });

  it("should return undefined if there is no start position in the maze", () => {
    const maze: MazeType = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [1, 3, 1, 0],
    ];

    expect(findStartPosition(maze)).toBeUndefined();
  });

  it("should find the start position when it is at the beginning of the maze", () => {
    const maze: MazeType = [
      [2, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [1, 3, 1, 0],
    ];
    const expectedPosition: Position = { row: 0, col: 0 };

    expect(findStartPosition(maze)).toEqual(expectedPosition);
  });

  it("should find the start position when it is at the end of the maze", () => {
    const maze: MazeType = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [1, 3, 1, 2],
    ];
    const expectedPosition: Position = { row: 3, col: 3 };

    expect(findStartPosition(maze)).toEqual(expectedPosition);
  });
});
