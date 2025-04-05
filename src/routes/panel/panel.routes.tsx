import { RouteObject } from "react-router-dom";
import PanelLayout from "../../layouts/panel/panel.layout";
import ProfilePage from "../../pages/profile.page";
import AnalyticsPage from "../../pages/analytics.page";

export const panelRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PanelLayout />,
    children: [
      { index: true, element: <ProfilePage /> },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
    ],
  },
];
