import { useAppStore } from "../../../shared/store/appStore";
import { AppStateTypes } from "../../../shared/store/appStore/types";

export const useChangeAppState = () => {
  const setState = useAppStore((s) => s.setState);

  return (state: AppStateTypes) => {
    setState(state);
  };
};
