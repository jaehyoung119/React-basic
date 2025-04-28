import { useStateMovie } from "../context/MovieContext";
import { MovieItem } from "./MovieItem";

export function MovieList() {
  const { movies } = useStateMovie();

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
