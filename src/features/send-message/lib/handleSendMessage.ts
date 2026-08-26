import { useAppStore } from "@/shared/store/appStore";
import { sendMessage } from "../api";

export const handleSendMessage = async (content: string) => {
  const addMessage = useAppStore.getState().addMessage;
  const messages = useAppStore.getState().messages;
  const userMessage = {
    role: "user" as const,
    content,
  };
  addMessage(userMessage);
  const udpatedMessages = [...messages, userMessage];
  const answer = await sendMessage(udpatedMessages);
  addMessage({
    role: "assistant" as const,
    content: answer,
  });
};
