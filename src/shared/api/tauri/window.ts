import { ScreenStateTypes } from "@/shared/store/appStore/types";
import { invoke } from "@tauri-apps/api/core";

export const resizeWindow = (state: ScreenStateTypes) => {
  return invoke("resize_window", { state });
};
