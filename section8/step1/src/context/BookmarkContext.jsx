import { createContext, useContext } from "react";

export const BookStateContext = createContext(null);
export const BookDispatchContext = createContext(null);

export function useBookState() {
  const context = useContext(BookStateContext);
  if (!context) {
    throw new Error("context must be used within provider");
  }
  return context;
}

export function useBookDispatch() {
  const context = useContext(BookDispatchContext);
  if (!context) {
    throw new Error("context mus be usde within provider");
  }
  return context;
}
