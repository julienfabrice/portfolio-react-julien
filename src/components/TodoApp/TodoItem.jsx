import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && text.trim() !== "") editTodo(todo.id, text.trim());
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => e.key === "Enter" && handleEdit();

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      )}

      <div>
        <button
          onClick={handleEdit}
          className={isEditing ? "save" : "edit"}
        >
          {isEditing ? "Valider" : "Éditer"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete">
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default TodoItem;