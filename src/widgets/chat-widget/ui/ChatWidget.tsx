import { ChatHeader } from "@/widgets/chat-header";
import Box from "@mui/material/Box";

export const ChatWidget = () => {
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
      }}
    >
      <ChatHeader />
    </Box>
  );
};
