import { useAppStore } from "../../shared/store/appStore";
import { ChatView } from "../../views/ChatView";
import { SmallWidgetView } from "../../views/SmallWidgetView";

export const AppController = () => {
  const appState = useAppStore((s) => s.state);

  switch (appState) {
    case "small":
      return <SmallWidgetView />;
    case "chat":
      return <ChatView />;
    case "full":
  }
};
