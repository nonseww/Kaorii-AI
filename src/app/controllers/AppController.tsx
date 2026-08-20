import { useAppStore } from "../../shared/store/appStore";
import { ChatView } from "../../views/ChatView";
import { SmallWidgetView } from "../../views/SmallWidgetView";

export const AppController = () => {
  const screenState = useAppStore((s) => s.screenState);

  switch (screenState) {
    case "small":
      return <SmallWidgetView />;
    case "chat":
      return <ChatView />;
    case "full":
  }
};
