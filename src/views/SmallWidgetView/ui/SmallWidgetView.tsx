import { SmallWidget } from "../../../widgets/small-widget";
import { useChangeAppState } from "../../../features/change-app-state";

export default function SmallWidgetView() {
  const changeAppState = useChangeAppState();

  return <SmallWidget onClick={changeAppState} />;
}
