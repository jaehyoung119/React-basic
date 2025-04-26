import { createContext, useContext } from "react";

export const TodoContext = createContext(null);

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }
  return context;
}
