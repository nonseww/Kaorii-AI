import { SendMessageBox } from "@/features/send-message";
import { useAppStore } from "@/shared/store/appStore";
import { ChatHeader } from "@/widgets/chat-header";
import { ChatMessages } from "@/widgets/chat-messages";
import Box from "@mui/material/Box";

export const ChatWidget = () => {
  const messages = useAppStore((state) => state.messages);

  return (
    <Box
      sx={{
        width: "450px",
        height: "600px",
        backgroundColor: "#1e1e1e",
        padding: "10px 15px 10px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        color: "#e0e0e0",
        border: "1px solid #3a3a3a",
        justifyContent: "space-between",
      }}
    >
      <ChatHeader />
      <ChatMessages messages={messages} />
      <SendMessageBox />
    </Box>
  );
};
