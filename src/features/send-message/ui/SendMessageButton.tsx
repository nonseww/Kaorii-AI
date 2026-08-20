import Arrow from "../assets/Arrow.svg?react";
import IconButton from "@mui/material/IconButton";

export const SendMessageButton = () => {
  return (
    <IconButton
      onClick={() => {}}
      sx={{ bgcolor: "#424242", p: 0, width: 35, height: 35, borderRadius: 2 }}
    >
      <Arrow width={18} height={18} />
    </IconButton>
  );
};
