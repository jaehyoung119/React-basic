import { useMovieState } from "../context/MovieContext";
import { MovieItem } from "./MovieItem";

export function MovieList() {
  const movies = useMovieState();
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </>
  );
}
