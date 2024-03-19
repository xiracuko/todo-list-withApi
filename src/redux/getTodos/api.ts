import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: "todos",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/todos"}),
    endpoints: (builder) => ({
        getTodos: builder.query({query: () => ""}),
        removeTodo: builder.mutation({
            query: (id) => ({
                url: id,
                method: "DELETE"
            })
        })
    })
})

export const {useLazyGetTodosQuery, useRemoveTodoMutation} = todosApi;