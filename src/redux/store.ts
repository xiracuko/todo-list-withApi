import { configureStore } from "@reduxjs/toolkit"
import setTodo from "./setTodos/slice"
import { todosApi } from "./getTodos/api";

export const store = configureStore({
  reducer: {
    setTodo,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;