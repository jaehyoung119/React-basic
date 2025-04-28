import { useActionMovie, useStateMovie } from "../context/MovieContext";

export function useMovieActions() {
  const { dispatch, setAddForm, setEditForm } = useActionMovie();
  const { addForm, editForm } = useStateMovie();

  const onAdd = () => {
    if (!addForm.title.trim() || !addForm.review.trim()) return;

    dispatch({
      type: "ADD",
      newMovie: {
        id: Date.now(),
        title: addForm.title,
        review: addForm.review,
      },
    });

    setAddForm({ title: "", review: "" });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const onUpdate = () => {
    if (!editForm.title.trim() || !editForm.review.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id,
      newTitle: editForm.title,
      newReview: editForm.review,
    });

    setEditForm("");
  };

  const onUpdateStart = (movie) => {
    setEditForm({ id: movie.id, title: movie.title, review: movie.review });
  };

  return { onAdd, onDelete, onUpdate, onUpdateStart };
}
