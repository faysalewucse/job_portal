import API_ENDPOINTS from "../../config/apiEndpoints";
import { authKey } from "../../constant";
import showSuccessMessage from "../../utils/successHandler";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.AUTH.REGISTER,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;

        localStorage.setItem(
          authKey,
          JSON.stringify({
            accessToken: result.data.payload.accessToken,
            user: result.data.payload.user,
          })
        );

        dispatch(
          userLoggedIn({
            accessToken: result.data.payload.accessToken,
            user: result.data.payload.user,
          })
        );
        showSuccessMessage("User logged in successfully");
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyQuery } =
  authApi;
