import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateType, TodoRemoveType, TodoTitleType, TodoToggleType } from "../../types";

export const initialState: initialStateType = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoTitleType>) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        toggle: false,
      };

      state.todos.push(newTodo)
    },
    toggleTodo(state, action: PayloadAction<TodoToggleType>) {
        const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
        toggledTodo ? toggledTodo.toggle = !toggledTodo.toggle : "";
    },
    removeTodo(state, action: PayloadAction<TodoRemoveType>) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    deleteTodos(state) {
      state.todos = [];
    }
  },
});

export const {addTodo, toggleTodo, removeTodo, deleteTodos} = todoSlice.actions;
export default todoSlice.reducer;
