import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LOGIN_PATH } from "../helper/slugs";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();

  return isLoggedIn ? children : <Navigate to={LOGIN_PATH} />;
}
