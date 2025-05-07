import {
  useMovieAction,
  useMovieEditFormAction,
  useMovieEditFormState,
  useMovieFormAction,
  useMovieFormState,
} from "../context/MovieContext";
import type { Movie } from "../types/movie";

export function MovieActions() {
  const addForm = useMovieFormState();
  const setAddForm = useMovieFormAction();
  const dispatch = useMovieAction();
  const editForm = useMovieEditFormState();
  const setEditForm = useMovieEditFormAction();

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

  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const onUpdate = () => {
    if (!editForm.title.trim() || !editForm.review.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id!,
      newTitle: editForm.title,
      newReview: editForm.review,
    });

    setEditForm({ id: null, title: "", review: "" });
  };

  const onUpdateStart = (movie: Movie) => {
    setEditForm({ id: movie.id, title: movie.title, review: movie.review });
  };

  return { onAdd, onDelete, onUpdate, onUpdateStart };
}
