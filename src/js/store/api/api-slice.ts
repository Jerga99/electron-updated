import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Local
// "http://localhost:3001"
// Production
//"https://linktothebackend.app"

const LOCAL_ENVIRONMENT = false;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: LOCAL_ENVIRONMENT
      ? "http://localhost:3001"
      : "https://linktothebackend.app",
    // credentials: "include",
  }),
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
