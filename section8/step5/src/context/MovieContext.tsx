import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Movie, MovieEditFormState, MovieFormState } from "../types/MovieState";
import { MovieAction } from "../types/MovieAction";

export const MovieStateContext = createContext<Movie[] | null>(null);
export const MovieActionContext = createContext<Dispatch<MovieAction> | null>(
  null
);
export const MovieFormStateContext = createContext<MovieFormState | null>(null);
export const MovieFormActionContext = createContext<Dispatch<
  SetStateAction<MovieFormState>
> | null>(null);
export const MovieEditFormStateContext =
  createContext<MovieEditFormState | null>(null);
export const MovieEditFormActionContext = createContext<Dispatch<
  SetStateAction<MovieEditFormState>
> | null>(null);

export function useMovieState(): Movie[] {
  const context = useContext(MovieStateContext);
  if (context === null) {
    throw new Error("useMovieState must be used within a MovieProvider");
  }
  return context;
}

export function useMovieAction(): Dispatch<MovieAction> {
  const context = useContext(MovieActionContext);
  if (context === null) {
    throw new Error("useMovieAction must be used within a MovieProvider");
  }
  return context;
}

export function useMovieFormState(): MovieFormState {
  const context = useContext(MovieFormStateContext);
  if (context === null) {
    throw new Error("useMovieFormState must be used within a MovieProvider");
  }
  return context;
}

export function useMovieFormAction(): Dispatch<SetStateAction<MovieFormState>> {
  const context = useContext(MovieFormActionContext);
  if (context === null) {
    throw new Error("useMovieFormAction must be used within a MovieProvider");
  }
  return context;
}

export function useMovieEditFormState(): MovieEditFormState {
  const context = useContext(MovieEditFormStateContext);
  if (context === null) {
    throw new Error(
      "useMovieEditFormState must be used within a MovieProvider"
    );
  }
  return context;
}

export function useMovieEditFormAction(): Dispatch<
  SetStateAction<MovieEditFormState>
> {
  const context = useContext(MovieEditFormActionContext);
  if (context === null) {
    throw new Error(
      "useMovieEditFormAction must be used within a MovieProvider"
    );
  }
  return context;
}
