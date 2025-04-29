import { Memo, MemoAction } from "../types/memo";
export function MemoReducer(state: Memo[], action: MemoAction) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newMemo];
    case "DELETE":
      return state.filter((memo) => memo.id !== action.id);
    case "UPDATE":
      return state.map((memo) =>
        memo.id === action.id
          ? { ...memo, title: action.newTitle, text: action.newText }
          : memo
      );
    default:
      return state;
  }
}
