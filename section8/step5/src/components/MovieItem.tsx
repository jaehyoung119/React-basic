import { useMovieActions } from "../hooks/useMovieActions";
import { Movie } from "../types/MovieState";

export function MovieItem({ movie }: { movie: Movie }) {
  const { onDelete, onUpdateStart } = useMovieActions();

  return (
    <>
      <li>
        {movie.id} - {movie.title} - {movie.review}
        <button onClick={() => onDelete(movie.id)}>삭제</button>
        <button onClick={() => onUpdateStart(movie)}>수정</button>
      </li>
    </>
  );
}
