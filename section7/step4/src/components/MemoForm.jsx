export default function MemoForm({ onAdd, setText, text }) {
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="메모 입력"
      />
      <button onClick={onAdd}>추가</button>
    </div>
  );
}
