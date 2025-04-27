export function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTodo];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, content: action.newContent } : todo
      );
    default:
      return state;
  }
}
