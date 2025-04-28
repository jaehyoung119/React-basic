import { useContext } from "react";
import { createContext } from "react";

export const StudyStateContext = createContext(null);
export const StudyActionContext = createContext(null);

export function useStudyState() {
  const context = useContext(StudyStateContext);
  if (!context) {
    throw new Error("context mustbe used within provider");
  }
  return context;
}

export function useStudyAction() {
  const context = useContext(StudyActionContext);
  if (!context) {
    throw new Error("context must be used within provider");
  }
  return context;
}
