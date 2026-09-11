import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/TodoSlice";

const AddTodo = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddTodo = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="flex justify-around">
      <input
        type="text"
        value={text}
        onChange={handleText}
        className="border rounded-lg mr-5 text-white"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white w-1/5 rounded-full hover:opacity-80 cursor-pointer"
      >
        追加
      </button>
    </div>
  );
};

export default AddTodo;
