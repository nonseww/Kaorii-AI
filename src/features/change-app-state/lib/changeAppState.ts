import { resizeWindow } from "../../../shared/api";
import { useAppStore } from "../../../shared/store/appStore";
import { AppStateTypes } from "../../../shared/store/appStore/types";

export const changeAppState = async (state: AppStateTypes) => {
  await resizeWindow(state);
  useAppStore.getState().setState(state);
};
