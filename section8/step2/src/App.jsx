import { useReducer, useState } from "react";
import { MovieForm } from "./components/MovieForm";
import { MovieStateContext, MovieActionContext } from "./context/MovieContext";
import MovieReducer from "./reducers/MovieReducer";
import { MovieList } from "./components/MovieList";

const initialMovie = [];

export default function App() {
  const [addForm, setAddForm] = useState({ title: "", review: "" });
  const [movies, dispatch] = useReducer(MovieReducer, initialMovie);
  const [editForm, setEditForm] = useState({ id: null, title: "", review: "" });

  return (
    <MovieStateContext.Provider
      value={{
        addForm,
        movies,
        editForm,
      }}
    >
      <MovieActionContext.Provider
        value={{
          setAddForm,
          dispatch,
          setEditForm,
        }}
      >
        <MovieForm />
        <MovieList />
      </MovieActionContext.Provider>
    </MovieStateContext.Provider>
  );
}
