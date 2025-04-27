import { useContext, createContext } from "react";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("must be used within a TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("must be used within a TodoProvider");
  }
  return context;
}
