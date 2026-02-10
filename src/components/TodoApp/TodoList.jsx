import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  if (!todos || todos.length === 0)
    return <p style={{ textAlign: "center", color: "#9ca3af" }}>Aucune tâche à afficher</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;