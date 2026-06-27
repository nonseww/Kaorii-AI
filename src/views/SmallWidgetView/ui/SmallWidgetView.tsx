import { SmallWidget } from "../../../widgets/SmallWidget";
import { useChangeAppState } from "../../../features/change-app-state";

export default function SmallWidgetView() {
  return <SmallWidget onClick={useChangeAppState} />;
}
