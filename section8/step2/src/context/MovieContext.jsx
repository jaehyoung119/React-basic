import { createContext, useContext } from "react";

export const MovieStateContext = createContext(null);
export const MovieActionContext = createContext(null);

export function useActionMovie() {
  const context = useContext(MovieActionContext);
  if (!context) {
    throw new Error("context must be used within provider");
  }
  return context;
}

export function useStateMovie() {
  const context = useContext(MovieStateContext);
  if (!context) {
    throw new Error("context must be used within provider");
  }
  return context;
}
