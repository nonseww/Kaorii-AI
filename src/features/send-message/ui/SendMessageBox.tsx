import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { SendMessageButton } from "./SendMessageButton";

export const SendMessageBox = () => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <TextField
        multiline
        minRows={1}
        maxRows={6}
        placeholder="Enter your message..."
        sx={{
          width: "100%",
          bgcolor: "#2b2b2b",
          mt: 1,
          borderRadius: 3,
          boxShadow: "4px 4px 5px rgba(15, 15, 15, 0.3)",
          "& .MuiInputBase-input": {
            color: "white",
            height: "100% !important",
            boxSizing: "border-box",
            overflow: "auto !important",
          },

          "& .MuiInputBase-root": {
            height: 100,
            alignItems: "flex-start",
          },

          "& .MuiInputBase-input::placeholder": {
            color: "#aaa",
            opacity: 1,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
      <Box sx={{ position: "absolute", zIndex: 999, right: 10, bottom: 10 }}>
        <SendMessageButton />
      </Box>
    </Box>
  );
};
