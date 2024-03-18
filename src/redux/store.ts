import { configureStore } from "@reduxjs/toolkit"
import setTodo from "./setTodos/slice"

export const store = configureStore({
  reducer: {
    setTodo
  }
})