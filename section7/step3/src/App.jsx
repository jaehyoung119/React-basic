import { useMemo, useReducer, useState } from "react";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTodo];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
}

export default function App() {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleAdd = () => {
    if (!text.trim() === "") return;
    dispatch({
      type: "ADD",
      newTodo: {
        id: Date.now(),
        content: text,
        isDone: false,
      },
    });
    setText("");
  };

  const doneCount = useMemo(() => {
    return todos.map((todo) => todo.isDone).length;
  }, [todos]);

  return (
    <>
      <InputForm text={text} setText={setText} onAdd={handleAdd} />
      <TodoList todos={todos} dispatch={dispatch} />
      <p>안료된 항목수 : {doneCount} </p>
    </>
  );
}
