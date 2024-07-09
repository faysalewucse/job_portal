import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";

import Error404 from "../pages/common/Error404";
import { userRouter } from "./userRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: userRouter,
  },
]);
