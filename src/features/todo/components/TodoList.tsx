import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TodoType } from "../types/TodoType";
import { removeTodo, toggleTodo } from "../reducers/TodoSlice";

const TodoList = () => {
  const todos = useSelector((state: { todos: TodoType[] }) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
