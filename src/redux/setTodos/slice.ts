import { createSlice } from "@reduxjs/toolkit";

type newTodoType = {
  id: number;
  title: string;
  toggle: boolean;
};

type initialStateType = {
  todos: newTodoType[];
};

export const initialState: initialStateType = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        toggle: false,
      };

      state.todos.push(newTodo);
    },
    toggleTodo(state, action) {
        const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
        toggledTodo ? toggledTodo.toggle = !toggledTodo.toggle : "";
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
