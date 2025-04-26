import { useTodoContext } from "../context/TodoContext";

export default function TodoForm() {
  const { addForm, setAddForm, onAdd, editForm, setEditForm, onUpdate } =
    useTodoContext();

  const isEditing = editForm.id !== null;

  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={editForm.text}
            onChange={(e) => setEditForm({ ...editForm, text: e.target.value })}
            placeholder="수정할 내용"
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
    </div>
  );
}
