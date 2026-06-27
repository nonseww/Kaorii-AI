import { create } from "zustand";
import { AppState, initialState } from "./models/appState";
import { AppSync, createAppSync } from "./models/appSync";

export type AppStore = AppState & AppSync;

export const useAppStore = create<AppStore>()((...a) => ({
  ...initialState,
  ...createAppSync(...a),
}));
