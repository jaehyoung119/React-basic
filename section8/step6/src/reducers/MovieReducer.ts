import type { Movie } from "../types/movie";
import type { MovieAction } from "../types/movieAction";

export function MovieReducer(state: Movie[], action: MovieAction) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newMovie];
    case "DELETE":
      return state.filter((movie) => movie.id !== action.id);
    case "UPDATE":
      return state.map((movie) =>
        movie.id === action.id
          ? { ...movie, title: action.newTitle, review: action.newReview }
          : movie
      );
    default:
      return state;
  }
}
