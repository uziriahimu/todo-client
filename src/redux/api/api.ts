import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        return {
          url: "/tasks",
          method: "GET",
          params: { priority },
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (options) => {
        console.log("inside api==>", options);
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body: options.id,
        };
      },
      // invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } =
  baseApi;
