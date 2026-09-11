import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TodoType } from "../types/TodoType";
import { removeTodo, toggleTodo } from "../reducers/TodoSlice";

const TodoList = () => {
  const todos = useSelector((state: { todos: TodoType[] }) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="my-10">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="bg-gray-500 text-white rounded py-1 flex justify-around ">
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-800 w-15 rounded cursor-pointer hover:opacity-80 "
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
