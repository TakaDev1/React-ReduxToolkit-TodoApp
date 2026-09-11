import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/reducers/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
