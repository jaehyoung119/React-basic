import {
  useActionMemo,
  useEditFormAction,
  useEditFormState,
  useFormAction,
  useFormState,
} from "../context/MemoContext";
import { Memo } from "../types/memo";

export function useMemoActions() {
  const addForm = useFormState();
  const setAddForm = useFormAction();
  const dispatch = useActionMemo();
  const editForm = useEditFormState();
  const setEditForm = useEditFormAction();

  const onAdd = () => {
    if (!addForm.title.trim() || !addForm.text.trim()) return;

    dispatch({
      type: "ADD",
      newMemo: {
        id: Date.now(),
        title: addForm.title,
        text: addForm.text,
      },
    });

    setAddForm({ text: "", title: "" });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const onUpdate = () => {
    if (!editForm.title.trim() || !editForm.text.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id!,
      newTitle: editForm.title,
      newText: editForm.text,
    });

    setEditForm({ id: null, title: "", text: "" });
  };

  const onUpdateStart = (memo: Memo) => {
    setEditForm({ id: memo.id, title: memo.title, text: memo.text });
  };

  return { onAdd, onDelete, onUpdate, onUpdateStart };
}
