import { describe, it, expect } from "vitest";
import { MazeType } from "../../types/common";
import { findMazePath, findStartPosition } from "../path";
describe("findMazePath", () => {
  it("should find the path to the exit in a simple maze", () => {
    const maze: MazeType = [
      [1, 2, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 3],
      [1, 1, 1, 1, 1],
    ];
    const start = findStartPosition(maze);
    const expectedPath = [
      { row: 0, col: 1 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 1, col: 3 },
      { row: 2, col: 3 },
      { row: 3, col: 3 },
      { row: 3, col: 4 },
    ];

    expect(findMazePath({ maze, start })).toEqual(expectedPath);
  });

  it("should return undefined if there is no path to the exit", () => {
    const maze: MazeType = [
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 3, 1],
      [1, 1, 1, 1, 1],
    ];

    const start = findStartPosition(maze);
    expect(findMazePath({ maze, start })).toBeUndefined();
  });

  it("should handle a maze with multiple paths and choose one", () => {
    const maze: MazeType = [
      [1, 2, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1],
      [1, 0, 1, 3, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ];
    const start = findStartPosition(maze);
    const result = findMazePath({ maze, start });

    // Since there are multiple possible correct paths, we just check if the path is valid
    expect(result).not.toBeUndefined();
    if (result) {
      expect(result[0]).toEqual({ row: 0, col: 1 });
      expect(result[result.length - 1]).toEqual({ row: 3, col: 3 });
    }
  });
});
