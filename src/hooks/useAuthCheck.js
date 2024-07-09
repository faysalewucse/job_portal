import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { authKey } from "../constant";
import { getProfile } from "../controllers/authController";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem(authKey);

    console.log(localAuth);

    const fetchUserProfile = async (token) => {
      const response = await getProfile(token);
      console.log(response);

      if (response) {
        if (response.success && response.payload.user) {
          dispatch(
            userLoggedIn({
              accessToken: response.payload.token,
              user: response.payload.user,
            })
          );
        }
      }
    };

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken) {
        fetchUserProfile(auth.accessToken);
      }
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
}
