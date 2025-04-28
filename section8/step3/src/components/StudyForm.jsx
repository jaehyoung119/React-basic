import { useStudyAction, useStudyState } from "../context/StudyContext";
import { useStudyActions } from "../hooks/useStudyActions";

export function StudyForm() {
  const { onAdd, onUpdate } = useStudyActions();
  const { addForm, editForm } = useStudyState();
  const { setAddForm, setEditForm } = useStudyAction();
  const isEditing = editForm.id !== null;

  return (
    <>
      {isEditing ? (
        <>
          <input
            value={editForm.title}
            onChange={(e) =>
              setEditForm({ ...editForm, title: e.target.value })
            }
            placeholder="제목"
          />
          <input
            value={editForm.dueDate}
            onChange={(e) =>
              setEditForm({ ...editForm, dueDate: e.target.value })
            }
            placeholder="기한"
          />
          <button onClick={onUpdate}>수정</button>
        </>
      ) : (
        <>
          <input
            value={addForm.title}
            onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
            placeholder="제목"
          />
          <input
            value={addForm.dueDate}
            onChange={(e) =>
              setAddForm({ ...addForm, dueDate: e.target.value })
            }
            placeholder="기한"
          />
          <button onClick={onAdd}>추가</button>
        </>
      )}
    </>
  );
}
