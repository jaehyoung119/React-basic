import useTodoContext from "../context/TodoContext";

export function useTodoAction() {
  const { dispatch, addForm, setAddForm, editForm, setEditForm } =
    useTodoContext();

  const onAdd = () => {
    if (!addForm.text.trim()) return;

    dispatch({
      type: "ADD",
      newTodo: {
        id: Date.now(),
        content: addForm.text,
      },
    });

    setAddForm({ text: "" });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  const onUpdate = () => {
    if (!editForm.text.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id,
      newContent: editForm.text,
    });

    setEditForm({ text: "", id: null });
  };

  const onUpdateStart = (todo) => {
    setEditForm({ id: todo.id, content: todo.content });
  };

  return { onAdd, onDelete, onUpdate, onUpdateStart };
}
