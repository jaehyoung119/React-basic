import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  type MovieFormType,
  type Movie,
  type MovieEditFormType,
} from "../types/movie.ts";
import type { MovieAction } from "../types/movieAction.ts";

export const MovieStateContext = createContext<Movie[] | null>(null);
export const MovieActionContext = createContext<Dispatch<MovieAction> | null>(
  null
);
export const MovieFormStateContext = createContext<MovieFormType | null>(null);
export const MovieFormActionContext = createContext<Dispatch<
  SetStateAction<MovieFormType>
> | null>(null);
export const MovieEditFormStateContext =
  createContext<MovieEditFormType | null>(null);
export const MovieEditFormActionContext = createContext<Dispatch<
  SetStateAction<MovieEditFormType>
> | null>(null);

export function useMovieState(): Movie[] {
  const context = useContext(MovieStateContext);
  if (context === null) {
    throw new Error("MovieStateContext must be used within MovieProvider");
  }
  return context;
}

export function useMovieAction(): Dispatch<MovieAction> {
  const context = useContext(MovieActionContext);
  if (context === null) {
    throw new Error("MovieActionContext must be used within MovieProvider");
  }
  return context;
}

export function useMovieFormState(): MovieFormType {
  const context = useContext(MovieFormStateContext);
  if (context === null) {
    throw new Error("MovieFormStateContext must be used within MovieProvider");
  }
  return context;
}

export function useMovieFormAction(): Dispatch<SetStateAction<MovieFormType>> {
  const context = useContext(MovieFormActionContext);
  if (context === null) {
    throw new Error("MovieFormActionContext must be used within MovieProvider");
  }
  return context;
}

export function useMovieEditFormState(): MovieEditFormType {
  const context = useContext(MovieEditFormStateContext);
  if (context === null) {
    throw new Error(
      "MovieEditFormStateContext must be used within MovieProvider"
    );
  }
  return context;
}
export function useMovieEditFormAction(): Dispatch<
  SetStateAction<MovieEditFormType>
> {
  const context = useContext(MovieEditFormActionContext);
  if (context === null) {
    throw new Error("MovieFormActionContext must be used within MovieProvider");
  }
  return context;
}
