// components/TodoItem.jsx

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: todo.isDone ? "line-through" : "none",
      }}
    >
      <span
        onClick={() => onToggle(todo.id)}
        style={{ cursor: "pointer", flexGrow: 1 }}
      >
        {todo.content}
      </span>

      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
