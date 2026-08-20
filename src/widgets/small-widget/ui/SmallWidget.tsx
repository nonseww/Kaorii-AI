import DefaultLogo from "@/shared/assets/Logo.jpg";
import classes from "./SmallWidget.module.scss";
import { useDragWindow } from "@/shared/lib";
//import { convertFileSrc } from "@tauri-apps/api/core";
import { ScreenStateTypes } from "@/shared/store/appStore/types";

interface Props {
  onClick: (state: ScreenStateTypes) => void;
}

export const SmallWidget = ({ onClick }: Props) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDragWindow();
  //const iconPath = useAppStore((s) => s.config.icon_path);
  //const imgSrc = iconPath ? convertFileSrc(iconPath) : DefaultLogo;
  const imgSrc = DefaultLogo;

  return (
    <div
      className={classes.container}
      onDoubleClick={() => onClick("chat")}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img src={imgSrc} className={classes.logo} />
    </div>
  );
};
