import Tabs from "../../core/components/tab";
import { In_TabItem } from "../../core/interfaces";
import AnalyticsOverview from "./analytics-overview";

function Analytics() {
  const tabs: In_TabItem[] = [
    { id: 1, content: <AnalyticsOverview />, title: "Overview" },
    { id: 2, content: "Demographics", title: "Demographics" },
  ];
  return <Tabs tabs={tabs} />;
}

export default Analytics;
