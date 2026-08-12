import Box from "@mui/material/Box";
import { MessageType } from "@/shared/types/message";
import { MessageContent } from "./MessageContent";

export const Message = ({ content, role }: MessageType) => {
  const isUser = role === "user";

  return (
    <Box
      sx={{
        backgroundColor: isUser ? "#3b82f6" : "#2c2c2c",
        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        borderRadius: 3,
        px: 1.75,
        py: 1,
        color: "#ececec",
        fontSize: 14,
        lineHeight: 1.5,
        width: "fit-content",
        maxWidth: "90%",
        overflowWrap: "break-word",
        alignSelf: isUser ? "flex-end" : "flex-start",

        "& p:first-of-type": {
          mt: 0,
        },

        "& p:last-child": {
          mb: 0,
        },

        "& p": {
          my: 1,
        },

        "& ul, & ol": {
          my: 1,
          pl: 2.5,
        },

        "& h1, & h2, & h3": {
          my: 1,
          fontSize: "1.1em",
        },

        "& code:not([class])": {
          backgroundColor: "#444",
          px: 0.5,
          py: 0.25,
          borderRadius: 1,
          fontFamily: "monospace",
        },
      }}
    >
      <MessageContent content={content} />
    </Box>
  );
};
