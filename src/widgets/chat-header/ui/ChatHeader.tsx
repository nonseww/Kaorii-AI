import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ToolIcon from "@/shared/assets/icons/Tool.svg?react";
import MinimazeIcon from "@/shared/assets/icons/Minimaze.svg?react";
import MaximazeIcon from "@/shared/assets/icons/Maximaze.svg?react";
import CloseIcon from "@/shared/assets/icons/Close.svg?react";
import Stack from "@mui/material/Stack";
import { useMinimazeWindow } from "../lib/useMinimazeWIndow";

export const ChatHeader = () => {
  const minimazeWindow = useMinimazeWindow();

  return (
    <Box
      data-tauri-drag-region
      sx={{
        width: "100%",
        height: 30,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Tooltip title="settings">
        <IconButton size="small" data-tauri-drag-region={false}>
          <ToolIcon width={18} height={18} />
        </IconButton>
      </Tooltip>

      <Stack sx={{ flexDirection: "row", gap: 1 }}>
        <Tooltip title="minimaze">
          <IconButton
            size="small"
            data-tauri-drag-region={false}
            onClick={minimazeWindow}
          >
            <MinimazeIcon width={18} height={18} />
          </IconButton>
        </Tooltip>

        <Tooltip title="maximaze">
          <IconButton size="small" data-tauri-drag-region={false}>
            <MaximazeIcon width={18} height={18} />
          </IconButton>
        </Tooltip>

        <Tooltip title="close">
          <IconButton size="small" data-tauri-drag-region={false}>
            <CloseIcon width={18} height={18} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};
