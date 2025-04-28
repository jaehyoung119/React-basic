import { useActionMovie, useStateMovie } from "../context/MovieContext";
import { useMovieActions } from "../hooks/useMovieActions";

export function MovieForm() {
  const { addForm, editForm } = useStateMovie();
  const { setAddForm, setEditForm } = useActionMovie();
  const { onAdd, onUpdate } = useMovieActions();
  const isEditing = editForm.id !== null;

  return (
    <>
      {isEditing ? (
        <>
          <input
            value={editForm.title || ""}
            onChange={(e) =>
              setEditForm({ ...editForm, title: e.target.value })
            }
            placeholder="영화 수정"
          />
          <input
            value={editForm.review || ""}
            onChange={(e) =>
              setEditForm({ ...editForm, review: e.target.value })
            }
            placeholder="리뷰 수정"
          />
          <button onClick={onUpdate}>수정</button>
        </>
      ) : (
        <>
          <input
            value={addForm.title || ""}
            onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
            placeholder="영화"
          />
          <input
            value={addForm.review || ""}
            onChange={(e) => setAddForm({ ...addForm, review: e.target.value })}
            placeholder="리뷰"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
