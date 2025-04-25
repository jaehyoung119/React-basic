import { useReducer } from "react";
import { useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

const initialLink = [];

function linkReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newLink];
    default:
      return state;
  }
}

export default function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [links, dispatch] = useReducer(linkReducer, initialLink);

  const handleAdd = () => {
    if (!title.trim() || !url.trim()) return;

    dispatch({
      type: "ADD",
      newLink: {
        id: Date.now(),
        title: title,
        url: url,
      },
    });

    setTitle("");
    setUrl("");
  };

  return (
    <>
      <LinkForm
        onAdd={handleAdd}
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
      />
      <LinkList links={links} dispatch={dispatch} />
    </>
  );
}
