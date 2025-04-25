import MemoItem from "./MemoItem";

export default function MemoList({ memos }) {
  return (
    <ul>
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} />
      ))}
    </ul>
  );
}
