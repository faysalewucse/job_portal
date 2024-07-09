import API_ENDPOINTS from "../../config/apiEndpoints";
import { apiSlice } from "../api/apiSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.JOBS,
        method: "POST",
        body: data,
      }),
    }),
    updateJob: builder.mutation({
      query: (data) => ({
        url: `${API_ENDPOINTS.JOBS}/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteJob: builder.mutation({
      query: (data) => ({
        url: `${API_ENDPOINTS.JOBS}/${data.id}`,
        method: "DELETE",
      }),
    }),
    getJobs: builder.query({
      query: () => ({
        url: `${API_ENDPOINTS.JOBS}`,
      }),
    }),
    getJobsByDept: builder.query({
      query: () => ({
        url: `${API_ENDPOINTS.JOBS}/by-dept`,
      }),
    }),
  }),
});

export const {
  useGetJobsQuery,
  useCreateJobMutation,
  useGetJobsByDeptQuery,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApi;
