import React from "react";
import TodoInput from "../features/todo/components/TodoInput";
import TodoList from "../features/todo/components/TodoList";

function TodoPage() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoPage;