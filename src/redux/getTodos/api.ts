import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: "todos",
    tagTypes: ["todos"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/todos"}),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "",
            providesTags: ["todos"]
        })
    })
})

export const {useLazyGetTodosQuery} = todosApi;