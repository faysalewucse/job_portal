import {
  HOME_PATH,
  JOBS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "../helper/slugs";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/jobs/AllJobs.jsx";

export const userRouter = [
  {
    path: HOME_PATH,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: JOBS_PATH,
    element: (
      <PrivateRoute>
        <AllJobs />
      </PrivateRoute>
    ),
  },
  {
    path: LOGIN_PATH,
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: REGISTER_PATH,
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
];
