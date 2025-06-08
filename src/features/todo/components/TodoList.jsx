import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 border-b"
        >
          <div className="flex items-center w-full">
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border p-1 mr-2 flex-1"
              />
            ) : (
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`cursor-pointer flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}
              >
                {todo.text}
              </span>
            )}

            {editId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="bg-green-500 text-white p-1 px-2 mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="text-blue-500 p-1 px-2 mr-2"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;