import { useState } from "react";
import { Check, Pencil, Trash2, Save } from "lucide-react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && text.trim() !== "") {
      editTodo(todo.id, text.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEdit();
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">

      {/* Checkbox */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-6 h-6 flex items-center justify-center rounded-full border transition ${
          todo.completed
            ? "bg-green-500 border-green-500 text-white"
            : "border-gray-300 hover:border-green-400"
        }`}
      >
        {todo.completed && <Check size={14} />}
      </button>

      {/* Texte / Input */}
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 transition ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Actions */}
      <div className="flex gap-2">

        <button
          onClick={handleEdit}
          className={`p-2 rounded-lg transition ${
            isEditing
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-yellow-400 text-white hover:bg-yellow-500"
          }`}
        >
          {isEditing ? <Save size={16} /> : <Pencil size={16} />}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <Trash2 size={16} />
        </button>

      </div>
    </div>
  );
}

export default TodoItem;