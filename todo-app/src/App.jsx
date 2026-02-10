import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CRUD todos
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));
  const toggleTodo = (id) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  const editTodo = (id, newText) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));

  // Filtrage
  const filteredTodos = todos.filter((t) => {
    if (filter === "All") return true;
    if (filter === "Completed") return t.completed;
    return !t.completed;
  });

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      
      {/* Carte principale */}
      <div className="w-full max-w-5xl min-w-[360px] sm:max-w-xl md:max-w-3xl lg:max-w-5xl bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/30">

        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8 drop-shadow-lg">
          Todo App
        </h1>

        {/* Formulaire */}
        <TodoForm addTodo={addTodo} />

        {/* Filtres avec compteur */}
        <div className="flex justify-center gap-4 mt-6 mb-8 flex-wrap">
          {["All", "Completed", "Pending"].map((f) => {
            let count = 0;
            if (f === "All") count = todos.length;
            if (f === "Completed") count = todos.filter((t) => t.completed).length;
            if (f === "Pending") count = todos.filter((t) => !t.completed).length;

            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
                  filter === f
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {f}
                <span className="inline-block bg-white/20 px-2 py-0.5 text-xs font-medium rounded-full animate-fadeIn">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Liste des todos */}
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />

      </div>
    </div>
  );
}

export default App;