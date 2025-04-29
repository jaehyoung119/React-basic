import { createContext, useContext } from "react";
import {
  Memo,
  MemoAction,
  MemoEditFormState,
  MemoFormState,
} from "../types/memo";
import { Dispatch, SetStateAction } from "react";

export const MemoStateContext = createContext<Memo[] | null>(null);
export const MemoActionContext = createContext<Dispatch<MemoAction> | null>(
  null
);
export const FormStateContext = createContext<MemoFormState | null>(null);
export const FormActionContext = createContext<Dispatch<
  SetStateAction<MemoFormState>
> | null>(null);
export const EditFormStateContext = createContext<MemoEditFormState | null>(
  null
);
export const EditFormActionContext = createContext<Dispatch<
  SetStateAction<MemoEditFormState>
> | null>(null);

export function useStateMemo(): Memo[] {
  const context = useContext(MemoStateContext);
  if (context === null) {
    throw new Error("useStateMemo must be used within a MemoProvider");
  }
  return context;
}

export function useActionMemo(): Dispatch<MemoAction> {
  const context = useContext(MemoActionContext);
  if (context === null) {
    throw new Error("useActionMemo must be used within a MemoProvider");
  }
  return context;
}

export function useFormState(): MemoFormState {
  const context = useContext(FormStateContext);
  if (context === null) {
    throw new Error("useFormState must be used within a MemoProvider");
  }
  return context;
}

export function useFormAction(): Dispatch<SetStateAction<MemoFormState>> {
  const context = useContext(FormActionContext);
  if (context === null) {
    throw new Error("useFormAction must be used within a MemoProvider");
  }
  return context;
}

export function useEditFormState(): MemoEditFormState {
  const context = useContext(EditFormStateContext);
  if (context === null) {
    throw new Error("useEditFormState must be used within a MemoProvider");
  }
  return context;
}

export function useEditFormAction(): Dispatch<
  SetStateAction<MemoEditFormState>
> {
  const context = useContext(EditFormActionContext);
  if (context === null) {
    throw new Error("useEditFormAction must be used within a MemoProvider");
  }
  return context;
}
