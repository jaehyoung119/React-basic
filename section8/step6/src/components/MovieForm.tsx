import type { ChangeEvent } from "react";
import { MovieActions } from "../hooks/MovieActions";
import {
  useMovieEditFormAction,
  useMovieEditFormState,
  useMovieFormAction,
  useMovieFormState,
} from "../context/MovieContext";

export function MovieForm() {
  const { onAdd, onUpdate } = MovieActions();
  const setAddForm = useMovieFormAction();
  const addForm = useMovieFormState();
  const editForm = useMovieEditFormState();
  const setEditForm = useMovieEditFormAction();
  const isEditing = editForm.id !== null;

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
            placeholder="후기"
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
            placeholder="후기"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
