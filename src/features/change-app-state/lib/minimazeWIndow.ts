import { changeAppState } from "@/features/change-app-state";

export const minimazeWindow = async () => {
  await changeAppState("small");
};
