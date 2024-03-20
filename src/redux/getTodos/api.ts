import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { newTodoType } from "../../types";

export const todosApi = createApi({
    reducerPath: "todos",
    tagTypes: ["todos"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/todos"}),
    endpoints: (builder) => ({
        getTodos: builder.query<newTodoType[], string>({
            query: () => "",
            providesTags: ["todos"]
        })
    })
})

export const {useLazyGetTodosQuery} = todosApi;