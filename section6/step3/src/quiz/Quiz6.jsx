import { useRef, useState } from "react";

function Quiz6() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const idRef = useRef(3);

  const inputText = (e) => {
    setInputValue(e.target.value);
  };

  const createTodos = () => {
    if (inputValue === "") return;

    const newTodo = {
      id: idRef.current,
      content: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
    idRef.current += 1;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createTodos();
    }
  };

  return (
    <div>
      <input
        onChange={inputText}
        value={inputValue}
        placeholder="입력창"
        onKeyDown={handleKeyDown}
      />
      <button onClick={createTodos}>추가</button>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </div>
  );
}
