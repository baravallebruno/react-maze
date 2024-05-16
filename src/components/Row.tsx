import { createPrefixedIndex } from "../Utils";
import Cell from "./Cell";
import { CellType } from "./types";

type RowProps = {
  row: CellType[];
  rowKey: string;
};

const Row = ({ row, rowKey }: RowProps) => {
  return row.map((cell, index) => (
    <Cell
      key={createPrefixedIndex(index, `${rowKey}-cell`)}
      cell={cell}
    />
  ));
};

export default Row;
