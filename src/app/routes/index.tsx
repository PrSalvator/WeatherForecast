import { ERoutes } from "@/shared/enums/routes";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() => import("@/pages/main"));

export const router = createBrowserRouter([
  {
    path: ERoutes.MAIN,
    element: <MainPage />,
  },
]);
