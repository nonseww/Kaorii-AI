import { useAppStore } from "../../shared/store/appStore";
import { SmallWidgetView } from "../../views/SmallWidgetView";

export const AppController = () => {
  const appState = useAppStore((s) => s.state);

  switch (appState) {
    case "widget":
      return <SmallWidgetView />;
    case "chat":
    case "full":
  }
};
