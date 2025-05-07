import type { Movie } from "./movie";

export type MovieAction =
  | { type: "ADD"; newMovie: Movie }
  | { type: "DELETE"; id: number }
  | { type: "UPDATE"; id: number; newTitle: string; newReview: string };
