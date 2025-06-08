import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="flex mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
        className="border p-4 flex-1"
      />
      <button  onClick={handleAdd} className="bg-blue-500 text-white b-5 space-5 p-10 ml-10">
        Add
      </button>
    </div>
  );
}

export default TodoInput;