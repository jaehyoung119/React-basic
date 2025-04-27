import { useReducer } from "react";
import { useState } from "react";
import { TodoReducer } from "./reducers/TodoReducer";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoStateContext, TodoDispatchContext } from "./context/TodoContext";

const initialTodos = [];

export default function App() {
  const [addForm, setAddForm] = useState({ text: "" });
  const [editForm, setEditForm] = useState({ id: null, text: "" });
  const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

  return (
    <TodoStateContext.Provider
      value={{
        todos,
        addForm,
        editForm,
      }}
    >
      <TodoDispatchContext.Provider
        value={{
          dispatch,
          setAddForm,
          setEditForm,
        }}
      >
        <TodoForm />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
