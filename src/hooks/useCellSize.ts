import { useLayoutEffect, useState } from "react";

type UseCellSizeProps = {
  ref: React.RefObject<HTMLDivElement>;
  base: number;
};

type UseCellSize = {
  cellSize: number;
};

const useCellSize = ({ ref, base }: UseCellSizeProps): UseCellSize => {
  const [cellSize, setCellSize] = useState<number>(0);

  useLayoutEffect(() => {
    const updateCellSize = () => {
      if (ref.current) {
        const { width } = ref.current.getBoundingClientRect();
        setCellSize(width / base);
      }
    };

    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, [base, ref]);

  return { cellSize };
};

export default useCellSize;
