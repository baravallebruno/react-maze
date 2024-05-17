import { CellType } from "../../types/common";
import { createPrefixedIndex } from "../../utils/common";
import Cell from "./Cell";

type RowProps = {
  row: CellType[];
  rowKey: string;
};

const Row = ({ row, rowKey }: RowProps): JSX.Element => {
  return (
    <>
      {row.map((cell, index) => (
        <Cell
          key={createPrefixedIndex(index, `${rowKey}-cell`)}
          cell={cell}
        />
      ))}
    </>
  );
};

export default Row;
