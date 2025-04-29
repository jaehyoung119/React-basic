import { useMemoActions } from "../hooks/useMemoActions";
import { Memo } from "../types/memo";

export function MemoItem({ memo }: { memo: Memo }) {
  const { onDelete, onUpdateStart } = useMemoActions();

  return (
    <>
      <li>
        {memo.id} - {memo.title} - {memo.text}
        <button onClick={() => onDelete(memo.id)}>삭제</button>
        <button onClick={() => onUpdateStart(memo)}>수정</button>
      </li>
    </>
  );
}
