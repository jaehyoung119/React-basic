export function StudyReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newStudy];
    case "DELETE":
      return state.filter((study) => study.id !== action.id);
    case "UPDATE":
      return state.map((study) =>
        study.id === action.id
          ? { ...study, title: action.newTitle, dueDate: action.newDueDate }
          : study
      );
    default:
      return state;
  }
}
