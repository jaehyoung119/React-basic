import { ChangeEvent } from "react";
import {
  useEditFormAction,
  useEditFormState,
  useFormAction,
  useFormState,
} from "../context/MemoContext";
import { useMemoActions } from "../hooks/useMemoActions";

export function MemoForm() {
  const { onAdd, onUpdate } = useMemoActions();
  const setAddForm = useFormAction();
  const addForm = useFormState();
  const setEditForm = useEditFormAction();
  const editForm = useEditFormState();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddForm({ ...addForm, title: e.target.value });
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddForm({ ...addForm, text: e.target.value });
  };

  const handleEditTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, title: e.target.value });
  };

  const handleEditTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, text: e.target.value });
  };

  const isEditing = editForm.id !== null;

  return (
    <>
      {isEditing ? (
        <>
          <input
            value={editForm.title}
            onChange={handleEditTitleChange}
            placeholder="수정할 제목"
          />
          <input
            value={editForm.text}
            onChange={handleEditTextChange}
            placeholder="수정할 메모입력"
          />
          <button onClick={onUpdate}>수정</button>
        </>
      ) : (
        <>
          <input
            value={addForm.title}
            onChange={handleTitleChange}
            placeholder="제목"
          />
          <input
            value={addForm.text}
            onChange={handleTextChange}
            placeholder="메모입력"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
