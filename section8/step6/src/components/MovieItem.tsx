import { MovieActions } from "../hooks/MovieActions";
import type { Movie } from "../types/movie";

export function MovieItem({ movie }: { movie: Movie }) {
  const { onDelete, onUpdateStart } = MovieActions();
  return (
    <>
      <li>
        {movie.id} - {movie.title} - {movie.review}
        <button onClick={() => onUpdateStart(movie)}>수정</button>
        <button onClick={() => onDelete(movie.id)}>삭제</button>
      </li>
    </>
  );
}
