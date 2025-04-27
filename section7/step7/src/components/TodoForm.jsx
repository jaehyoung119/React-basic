import useTodoContext from "../context/TodoContext";
import { useTodoAction } from "../hooks/useTodoAction";

export function TodoForm() {
  const { addForm, setAddForm, editForm, setEditForm } = useTodoContext();
  const { onAdd, onUpdate } = useTodoAction();

  const isEditing = editForm.id !== null;

  return (
    <>
      {isEditing ? (
        <>
          <input
            value={editForm.text}
            onChange={(e) => setEditForm({ ...editForm, text: e.target.value })}
            placeholder="수정할 할일"
          />
          <button onClick={onUpdate}>수정 완료</button>
        </>
      ) : (
        <>
          <input
            value={addForm.text}
            onChange={(e) => setAddForm({ ...addForm, text: e.target.value })}
            placeholder="할 일 입력"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
