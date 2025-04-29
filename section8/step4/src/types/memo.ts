export interface Memo {
  id: number;
  title: string;
  text: string;
}

export type MemoAction =
  | { type: "ADD"; newMemo: Memo }
  | { type: "DELETE"; id: number }
  | { type: "UPDATE"; id: number; newTitle: string; newText: string };

export interface MemoFormState {
  title: string;
  text: string;
}

export interface MemoEditFormState {
  id: number | null;
  title: string;
  text: string;
}
