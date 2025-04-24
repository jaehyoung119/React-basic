// components/TodoForm.jsx
import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText(""); // 입력창 초기화
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
}

export default TodoForm;
