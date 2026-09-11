import type { TodoType } from "../types/TodoType";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: TodoType[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<string>) => {
      state.push({
        id: uuidv4(),
        text: actions.payload,
        completed: false,
      });
    },

    toggleTodo: (state, actions: PayloadAction<string>) => {
      state.map((todo) =>
        todo.id === actions.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    },

    removeTodo: (state, actions: PayloadAction<string>) => {
      state.filter((todo) => todo.id !== actions.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
