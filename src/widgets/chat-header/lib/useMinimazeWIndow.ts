import { useChangeAppState } from "@/features/change-app-state";

export const useMinimazeWindow = () => {
  const changeAppState = useChangeAppState();

  return () => changeAppState("small");
};
