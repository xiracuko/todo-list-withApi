import { configureStore } from "@reduxjs/toolkit"
import setTodo from "./setTodos/slice"

export const store = configureStore({
  reducer: {
    setTodo
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;