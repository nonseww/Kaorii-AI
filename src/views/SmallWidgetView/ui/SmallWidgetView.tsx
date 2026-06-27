import { SmallWidget } from "@/widgets/small-widget";
import { changeAppState } from "@/features/change-app-state";

export default function SmallWidgetView() {
  return <SmallWidget onClick={changeAppState} />;
}
