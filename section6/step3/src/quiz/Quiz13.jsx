import { useState } from "react";

function Quiz13() {
  const [todos, setTodos] = useState([
    { id: 1, content: "리액트 공부", isDone: false },
    { id: 2, content: "게임하기", isDone: false },
    { id: 3, content: "커피마시기", isDone: false },
  ]);
  const [filter, setFilter] = useState("all");

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <button onClick={() => setFilter("all")}>전체</button>
      <button onClick={() => setFilter("done")}>완료</button>
      <button onClick={() => setFilter("notYet")}>미완료</button>

      {todos
        .filter((todo) => {
          if (filter === "done") return todo.isDone;
          if (filter === "notYet") return !todo.isDone;
          return true;
        })
        .map((todo) => (
          <p
            key={todo.id}
            onClick={() => toggleDone(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
          >
            {todo.content}
          </p>
        ))}
    </div>
  );
}
