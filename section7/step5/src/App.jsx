import { useReducer } from "react";
import { useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

const initialLink = [];

function linkReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newLink];
    case "DELETE":
      return state.filter((link) => link.id !== action.id);
    case "MODIFY":
      return state.map((link) =>
        link.id === action.id
          ? { ...link, title: action.newTitle, url: action.newUrl }
          : link
      );
    default:
      return state;
  }
}

export default function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [links, dispatch] = useReducer(linkReducer, initialLink);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");

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

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  const handelEdit = (id, title, url) => {
    setEditId(id);
    setEditTitle(title);
    setEditUrl(url);
  };

  const handelModify = () => {
    if (!editTitle.trim() || !editUrl.trim()) return;

    dispatch({
      type: "MODIFY",
      id: editId,
      newTitle: editTitle,
      newUrl: editUrl,
    });

    setEditId(null);
    setEditTitle("");
    setEditUrl("");
  };

  return (
    <>
      <LinkForm
        onAdd={handleAdd}
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
        editId={editId}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editUrl={editUrl}
        setEditUrl={setEditUrl}
        onModify={handelModify}
      />
      <LinkList
        links={links}
        onDelete={handleDelete}
        onModify={handelModify}
        onEdit={handelEdit}
      />
    </>
  );
}
