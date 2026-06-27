import { SmallWidget } from "../../../widgets/SmallWidget";
import { useChangeAppState } from "../../../features/change-app-state";

export default function SmallWidgetView() {
  const changeAppState = useChangeAppState();

  return <SmallWidget onClick={changeAppState} />;
}
