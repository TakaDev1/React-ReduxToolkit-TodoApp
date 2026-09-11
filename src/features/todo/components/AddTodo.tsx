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
    <div>
      <input type="text" value={text} onChange={() => handleText} />
      <button onClick={handleAddTodo}>追加</button>
    </div>
  );
};

export default AddTodo;
