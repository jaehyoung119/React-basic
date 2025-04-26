import { useReducer, useState } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTodo];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, content: action.newContent } : todo
      );
    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const [addForm, setAddForm] = useState({ text: "" });
  const [editForm, setEditForm] = useState({ id: null, text: "" });

  const onAdd = () => {
    if (!addForm.text.trim()) return;

    dispatch({
      type: "ADD",
      newTodo: {
        id: Date.now(),
        content: addForm.text,
      },
    });

    setAddForm({ text: "" });
  };

  const onUpdate = () => {
    if (!editForm.text.trim()) return;

    dispatch({
      type: "UPDATE",
      id: editForm.id,
      newContent: editForm.text,
    });

    setEditForm({ id: null, text: "" });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        addForm,
        setAddForm,
        editForm,
        setEditForm,
        onAdd,
        onUpdate,
      }}
    >
      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  );
}
