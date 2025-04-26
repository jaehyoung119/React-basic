import { useTodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { dispatch, setEditForm } = useTodoContext();

  const handleDelete = () => {
    dispatch({ type: "DELETE", id: todo.id });
  };

  const handleEditStart = () => {
    setEditForm({ id: todo.id, text: todo.content });
  };

  return (
    <li>
      {todo.content}
      <button onClick={handleEditStart}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
