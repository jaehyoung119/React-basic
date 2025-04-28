import { useStudyAction, useStudyState } from "../context/StudyContext";

export function useStudyActions() {
  const { dispatch, setAddForm, setEditForm } = useStudyAction();
  const { addForm, editForm } = useStudyState();

  const onAdd = () => {
    if (!addForm.title.trim() || !addForm.dueDate.trim()) return;

    dispatch({
      type: "ADD",
      newStudy: {
        id: Date.now(),
        title: addForm.title,
        dueDate: addForm.dueDate,
      },
    });

    setAddForm({ title: "", dueDate: "" });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const onUpdate = () => {
    if (!editForm.title.trim() || !editForm.dueDate.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id,
      newTitle: editForm.title,
      newDueDate: editForm.dueDate,
    });

    setEditForm({ id: null, title: "", dueDate: "" });
  };

  const onUpdateStart = (study) => {
    setEditForm({ id: study.id, title: study.title, dueDate: study.dueDate });
  };

  return { onAdd, onDelete, onUpdate, onUpdateStart };
}
