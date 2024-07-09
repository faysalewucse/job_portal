import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  EMAIL_VERIFICATION_RESULT,
  VERIFY_PATH,
} from "../helper/slugs";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import Verify from "../pages/common/Verify";
import EmailVerificationResult from "../pages/common/EmailVerificationResult.jsx";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

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
  {
    path: VERIFY_PATH,
    element: <Verify />,
  },
  {
    path: `${EMAIL_VERIFICATION_RESULT}/:token`,
    element: <EmailVerificationResult />,
  },
];
