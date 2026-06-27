import { getCurrentWindow } from "@tauri-apps/api/window";

export const closeWindow = async () => {
  const appWindow = getCurrentWindow();
  await appWindow.close();
};
