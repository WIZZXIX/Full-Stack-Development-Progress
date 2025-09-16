import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  // Delete a todo by index
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-4 py-2 rounded"
      />

      {/* Add Button */}
      <button
        onClick={addTodo}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add Todo
      </button>

      {/* Todo List */}
      <ul className="mt-4 w-64">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-lg bg-gray-100 px-3 py-2 rounded mb-2"
          >
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              className="ml-4 px-2 py-1 text-sm bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
