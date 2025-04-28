import { useState } from "react";
import { StudyForm } from "./components/StudyForm";
import { StudyList } from "./components/StudyList";
import { StudyStateContext, StudyActionContext } from "./context/StudyContext";
import { useReducer } from "react";
import { StudyReducer } from "./reducers/StudyReducer";

const initialStudy = [];

export default function App() {
  const [addForm, setAddForm] = useState({ title: "", dueDate: "" });
  const [studys, dispatch] = useReducer(StudyReducer, initialStudy);
  const [editForm, setEditForm] = useState({
    id: null,
    title: "",
    dueDate: "",
  });

  return (
    <StudyStateContext.Provider
      value={{
        addForm,
        studys,
        editForm,
      }}
    >
      <StudyActionContext.Provider
        value={{
          dispatch,
          setAddForm,
          setEditForm,
        }}
      >
        <StudyForm />
        <StudyList />
      </StudyActionContext.Provider>
    </StudyStateContext.Provider>
  );
}
