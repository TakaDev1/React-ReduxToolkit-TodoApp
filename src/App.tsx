import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import TodoList from "./features/todo/components/TodoList";
import AddTodo from "./features/todo/components/AddTodo";
import store from "./app/Store";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
        <h1>React-ReduxToolkit-TodoApp</h1>
        <Provider store={store}>
          <div className="w-1/3 mx-auto">
            <TodoList />
            <AddTodo />
          </div>
        </Provider>
      </div>
    </>
  );
}

export default App;
