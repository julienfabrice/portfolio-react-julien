import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  if (!todos || todos.length === 0)
    return (
      <div className="text-center mt-6 text-gray-400 animate-fadeIn">
        <p className="text-sm">🎉 Aucune tâche pour le moment</p>
        <p className="text-xs mt-1">Ajoute une nouvelle tâche pour commencer</p>
      </div>
    );

  return (
    <ul className="flex flex-col gap-3 mt-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="transform transition hover:scale-[1.02]"
        >
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;