import { useState, useReducer } from "react";
import {
  MovieActionContext,
  MovieEditFormActionContext,
  MovieEditFormStateContext,
  MovieFormActionContext,
  MovieFormStateContext,
  MovieStateContext,
} from "./context/MovieContext";
import { MovieFormState, Movie, MovieEditFormState } from "./types/MovieState";
import { MovieReducer } from "./reducers/MovieReducer";
import { MovieForm } from "./components/MovieForm";
import { MovieList } from "./components/MovieList";

const initialMovie: Movie[] = [];

export default function App() {
  const [movies, dispatch] = useReducer(MovieReducer, initialMovie);
  const [addForm, setAddForm] = useState<MovieFormState>({
    title: "",
    review: "",
  });
  const [editForm, setEditForm] = useState<MovieEditFormState>({
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
