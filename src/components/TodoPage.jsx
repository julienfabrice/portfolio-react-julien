import TodoApp from "./TodoApp/App";
import "./TodoApp/TodoApp.css";

function TodoPage() {
  return (
    <div className="todo-page">
      <div className="todo-card">
        <a href="/projects" className="back-button">← Back to Projects</a>
        <TodoApp />
      </div>
    </div>
  );
}

export default TodoPage;
