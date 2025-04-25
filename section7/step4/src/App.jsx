import { useReducer } from "react";
import { useState } from "react";
import MemoForm from "./components/MemoForm";

const initialMemo = [];

function memoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newMemo];
    default:
      return state;
  }
}

export default function App() {
  const [text, setText] = useState("");
  const [memos, dispatch] = useReducer(memoReducer, initialMemo);

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD",
      newMemo: {
        id: Date.now(),
        content: text,
        isPinned: false,
      },
    });

    setText("");
  };

  return (
    <>
      <MemoForm
        onAdd={handleAdd}
        text={text}
        setText={setText}
        memos={memos}
      ></MemoForm>
    </>
  );
}
