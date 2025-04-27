import { useBookDispatch, useBookState } from "../context/BookmarkContext";
import { useBookActions } from "../hooks/useBookmarkActions";

export function BookmarkForm() {
  const { markForm, editForm } = useBookState();
  const { setEditForm, setMarkForm } = useBookDispatch();
  const { onAdd, onUpdate } = useBookActions();
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
            placeholder="title"
          />
          <input
            value={editForm.url || ""}
            onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
            placeholder="url"
          />
          <button onClick={onUpdate}>수정</button>
        </>
      ) : (
        <>
          <input
            value={markForm.title || ""}
            onChange={(e) =>
              setMarkForm({ ...markForm, title: e.target.value })
            }
            placeholder="title"
          />
          <input
            value={markForm.url || ""}
            onChange={(e) => setMarkForm({ ...markForm, url: e.target.value })}
            placeholder="url"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
