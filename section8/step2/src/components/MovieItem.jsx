import { useMovieActions } from "../hooks/useMovieActions";

export function MovieItem({ movie }) {
  const { onDelete, onUpdateStart } = useMovieActions();

  return (
    <li>
      {movie.title}
      {movie.review}
      <button onClick={() => onDelete(movie.id)}>삭제</button>
      <button onClick={() => onUpdateStart(movie)}>수정</button>
    </li>
  );
}
