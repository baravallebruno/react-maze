import type { CellType } from "./types";

type CellProps = {
  cell: CellType;
};

const Cell = ({ cell }: CellProps) => {
  const cellStyles: Record<CellType, string> = {
    Wall: "bg-amber-600",
    Empty: "bg-white",
    Start: "bg-white",
    Exit: "bg-white",
  };

  return <div className={`w-full h-12 ${cellStyles[cell]}`} />;
};

export default Cell;
