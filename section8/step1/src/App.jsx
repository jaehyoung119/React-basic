import { useReducer, useState } from "react";
import { BookmarkReducer } from "./reducers/BookmarkReducer";
import {
  BookStateContext,
  BookDispatchContext,
} from "./context/BookmarkContext";
import { BookmarkForm } from "./components/BookmarkForm";
import { BookmarkList } from "./components/BookmarkList";

const initialBookmarks = [];

export default function App() {
  const [markForm, setMarkForm] = useState({ title: "", url: "" });
  const [editForm, setEditForm] = useState({ id: null, title: "", url: "" });
  const [bookmarks, dispatch] = useReducer(BookmarkReducer, initialBookmarks);

  return (
    <>
      <BookStateContext.Provider
        value={{
          markForm,
          editForm,
          bookmarks,
        }}
      >
        <BookDispatchContext.Provider
          value={{
            setMarkForm,
            setEditForm,
            dispatch,
          }}
        >
          <BookmarkForm />
          <BookmarkList />
        </BookDispatchContext.Provider>
      </BookStateContext.Provider>
    </>
  );
}
