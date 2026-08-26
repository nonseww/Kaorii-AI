import { MessageType } from "@/shared/types/message";
import { invoke } from "@tauri-apps/api/core";

export const sendMessage = async (messages: MessageType[]) => {
  return await invoke<string>("ask_ai", { messages });
};
