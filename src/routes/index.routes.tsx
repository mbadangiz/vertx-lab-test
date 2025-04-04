import { createBrowserRouter, RouteObject } from "react-router-dom";
import { panelRoutes } from "./panel/panel.routes";

const routes: RouteObject[] = [...panelRoutes];
export const myRoutes = createBrowserRouter(routes);
