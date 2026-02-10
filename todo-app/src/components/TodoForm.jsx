import { useState } from "react";
import { Plus } from "lucide-react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        type="submit"
        disabled={!text.trim()}
        className="flex items-center gap-2 px-5 py-3 bg-blue-500 text-white 
        font-semibold rounded-xl hover:bg-blue-600 transition 
        disabled:bg-gray-300"
      >
        <Plus size={18} />
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;