import { Message } from "@/entities/message";
import { MessageType } from "@/shared/types/message";
import Stack from "@mui/material/Stack";

export const ChatMessages = ({ messages }: { messages: MessageType[] }) => {
  return (
    <Stack sx={{ flexDirection: "column", gap: 1, overflowY: "auto" }}>
      {messages
        .filter((m) => m.role !== "system" && m.content)
        .map((m, index) => (
          <Message key={index} {...m} />
        ))}
    </Stack>
  );
};
