import { ChangeEvent } from "react";
import { useMovieActions } from "../hooks/useMovieActions";
import {
  useMovieEditFormAction,
  useMovieEditFormState,
  useMovieFormAction,
  useMovieFormState,
} from "../context/MovieContext";

export function MovieForm() {
  const { onAdd, onUpdate } = useMovieActions();
  const setAddForm = useMovieFormAction();
  const addForm = useMovieFormState();
  const editForm = useMovieEditFormState();
  const setEditForm = useMovieEditFormAction();

  const handleFormTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setAddForm({ ...addForm, title: e.target.value });
  };

  const handleFormReview = (e: ChangeEvent<HTMLInputElement>) => {
    setAddForm({ ...addForm, review: e.target.value });
  };

  const handleEditFormTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, title: e.target.value });
  };

  const handleEditFormReview = (e: ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, review: e.target.value });
  };

  const isEditing = editForm.id !== null;

  return (
    <>
      {isEditing ? (
        <>
          <input
            value={editForm.title}
            onChange={handleEditFormTitle}
            placeholder="수정할 제목"
          />
          <input
            value={editForm.review}
            onChange={handleEditFormReview}
            placeholder="수정할 리뷰"
          />
          <button onClick={onUpdate}>수정</button>
        </>
      ) : (
        <>
          <input
            value={addForm.title}
            onChange={handleFormTitle}
            placeholder="제목"
          />
          <input
            value={addForm.review}
            onChange={handleFormReview}
            placeholder="리뷰"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
