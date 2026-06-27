import { AppStateTypes } from "../../store/appStore/types";
import { invoke } from "@tauri-apps/api/core";

export const resizeWindow = (state: AppStateTypes) => {
  return invoke("resize_window", { state });
};
