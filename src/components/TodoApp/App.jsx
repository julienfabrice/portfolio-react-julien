import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css"; // ton CSS classique

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "All") return true;
    if (filter === "Completed") return t.completed;
    return !t.completed;
  });

  // Formulaire submit pour TodoForm
  const handleSubmit = (text) => addTodo(text);

  return (
    <div>
      <h1 className="todo-title">Todo App</h1>

      {/* Filtres */}
      <div className="todo-filters">
        {["All", "Completed", "Pending"].map((f) => {
          let count = 0;
          if (f === "All") count = todos.length;
          if (f === "Completed") count = todos.filter((t) => t.completed).length;
          if (f === "Pending") count = todos.filter((t) => !t.completed).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`todo-filter-btn ${filter === f ? "active" : ""}`}
            >
              {f} <span>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Formulaire */}
      <TodoForm addTodo={handleSubmit} />

      {/* Liste des tâches */}
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;