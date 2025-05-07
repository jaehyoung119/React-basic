import { useReducer, useState } from "react";
import { MovieForm } from "./components/MovieForm";
import {
  MovieActionContext,
  MovieEditFormActionContext,
  MovieEditFormStateContext,
  MovieFormActionContext,
  MovieFormStateContext,
  MovieStateContext,
} from "./context/MovieContext";
import { MovieReducer } from "./reducers/MovieReducer.ts";
import { MovieList } from "./components/MovieList.tsx";
import {
  type MovieEditFormType,
  type Movie,
  type MovieFormType,
} from "./types/movie.ts";

const initialMovie: Movie[] = [];

export default function App() {
  const [movies, dispatch] = useReducer(MovieReducer, initialMovie);
  const [addForm, setAddForm] = useState<MovieFormType>({
    title: "",
    review: "",
  });
  const [editForm, setEditForm] = useState<MovieEditFormType>({
    id: null,
    title: "",
    review: "",
  });

  return (
    <>
      <MovieStateContext.Provider value={movies}>
        <MovieActionContext.Provider value={dispatch}>
          <MovieFormStateContext.Provider value={addForm}>
            <MovieFormActionContext.Provider value={setAddForm}>
              <MovieEditFormStateContext.Provider value={editForm}>
                <MovieEditFormActionContext.Provider value={setEditForm}>
                  <MovieForm />
                  <MovieList />
                </MovieEditFormActionContext.Provider>
              </MovieEditFormStateContext.Provider>
            </MovieFormActionContext.Provider>
          </MovieFormStateContext.Provider>
        </MovieActionContext.Provider>
      </MovieStateContext.Provider>
    </>
  );
}
