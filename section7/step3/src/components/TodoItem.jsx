export default function TodoItem({ todo, dispatch }) {
  return (
    <li onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>
      {todo.isDone ? "✅" : "🔲"} {todo.content}
    </li>
  );
}
