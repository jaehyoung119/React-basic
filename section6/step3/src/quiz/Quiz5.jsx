import { useState } from "react";

function Quiz5() {
  const [todos, setTodos] = useState([
    { id: 1, content: "공부하기" },
    { id: 2, content: "커피마시기" },
  ]);

  const deleteTodos = (deleteId) => {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.content}
          <button onClick={deleteTodos}>삭제</button>
        </li>
      ))}
    </div>
  );
}
