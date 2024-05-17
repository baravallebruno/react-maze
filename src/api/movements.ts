import { MOVEMENTS_API } from "../config/constants";
import useMazeStore from "../store";

type SaveMovementsResponse = {
  success: boolean;
  message: string;
  movements: string[];
};

const saveMovements = async (
  movements: string[]
): Promise<SaveMovementsResponse> => {
  const response = await fetch(MOVEMENTS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movements }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: SaveMovementsResponse = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Error sending movements");
  }

  return { ...data, movements: useMazeStore.getState().movements };
};

export { saveMovements };
