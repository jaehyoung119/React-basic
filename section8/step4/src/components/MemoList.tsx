import { useStateMemo } from "../context/MemoContext";
import { MemoItem } from "./MemoItem";

export function MemoList() {
  const memos = useStateMemo();

  return (
    <>
      <ul>
        {memos.map((memo) => (
          <MemoItem key={memo.id} memo={memo} />
        ))}
      </ul>
    </>
  );
}
