import { ERoutes } from "@/shared/enum/routes";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 5000)).then(
    () => import("@/pages/main")
  )
);

export const router = createBrowserRouter([
  {
    path: ERoutes.MAIN,
    element: <MainPage />,
  },
]);
