import type { TodoType } from "../types/TodoType";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// 初期状態
const initialState: TodoType[] = [];

// スライスの作成
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
      return state.map((todo) =>
        todo.id === actions.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    },

    removeTodo: (state, actions: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== actions.payload);
    },
  },
});

// 作成されたアクション
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

// 作成されたリデューサー
export default todosSlice.reducer;
