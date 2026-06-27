import { changeAppState } from "@/features/change-app-state";

export const maximazeWindow = async () => {
  await changeAppState("full");
};
