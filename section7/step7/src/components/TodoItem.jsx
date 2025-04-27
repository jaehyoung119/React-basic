import { useTodoAction } from "../hooks/useTodoAction";

export function TodoItem({ todo }) {
  const { onDelete, onUpdateStart } = useTodoAction();
  return (
    <li>
      {todo.content}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
      <button onClick={() => onUpdateStart(todo)}>수정</button>
    </li>
  );
}
