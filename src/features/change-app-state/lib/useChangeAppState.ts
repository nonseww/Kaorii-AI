import { resizeWindow } from "../../../shared/api";
import { useAppStore } from "../../../shared/store/appStore";
import { AppStateTypes } from "../../../shared/store/appStore/types";

export const useChangeAppState = () => {
  const setState = useAppStore((s) => s.setState);

  return async (state: AppStateTypes) => {
    await resizeWindow(state);
    setState(state);
  };
};
