import { resizeWindow } from "@/shared/api";
import { useAppStore } from "@/shared/store/appStore";
import { ScreenStateTypes } from "@/shared/store/appStore/types";

export const changeAppState = async (state: ScreenStateTypes) => {
  await resizeWindow(state);
  useAppStore.getState().setScreenState(state);
};
