export default function InputForm({ text, setText, onAdd }) {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onAdd}>추가</button>
    </div>
  );
}
