import { useBookDispatch, useBookState } from "../context/BookmarkContext";

export function useBookActions() {
  const { markForm, editForm } = useBookState();
  const { dispatch, setMarkForm, setEditForm } = useBookDispatch();

  const onAdd = () => {
    if (!markForm.title.trim() || !markForm.url.trim()) return;

    dispatch({
      type: "ADD",
      newBookmark: {
        id: Date.now(),
        title: markForm.title,
        url: markForm.url,
      },
    });

    setMarkForm("");
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const onUpdate = () => {
    if (!editForm.title.trim() || !editForm.url.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id,
      newTitle: editForm.title,
      newUrl: editForm.url,
    });
  };

  const onUpdateStart = (bookmark) => {
    setEditForm({ id: bookmark.id, title: bookmark.title, url: bookmark.url });
  };

  return { onAdd, onDelete, onUpdate, onUpdateStart };
}
