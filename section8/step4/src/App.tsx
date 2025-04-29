import { useReducer, useState } from "react";
import { MemoForm } from "./components/MemoForm";
import {
  MemoStateContext,
  MemoActionContext,
  EditFormStateContext,
  EditFormActionContext,
} from "./context/MemoContext";
import { FormStateContext, FormActionContext } from "./context/MemoContext";
import { MemoReducer } from "./reducers/MemoReducer";
import { Memo, MemoEditFormState, MemoFormState } from "./types/memo";
import { MemoList } from "./components/MemoList";

const initialMemo: Memo[] = [];

export default function App() {
  const [addForm, setAddForm] = useState<MemoFormState>({
    title: "",
    text: "",
  });
  const [memos, dispatch] = useReducer(MemoReducer, initialMemo);
  const [editForm, setEditForm] = useState<MemoEditFormState>({
    id: null,
    title: "",
    text: "",
  });

  return (
    <MemoStateContext.Provider value={memos}>
      <MemoActionContext.Provider value={dispatch}>
        <FormStateContext.Provider value={addForm}>
          <FormActionContext.Provider value={setAddForm}>
            <EditFormStateContext.Provider value={editForm}>
              <EditFormActionContext.Provider value={setEditForm}>
                <MemoForm />
                <MemoList />
              </EditFormActionContext.Provider>
            </EditFormStateContext.Provider>
          </FormActionContext.Provider>
        </FormStateContext.Provider>
      </MemoActionContext.Provider>
    </MemoStateContext.Provider>
  );
}
