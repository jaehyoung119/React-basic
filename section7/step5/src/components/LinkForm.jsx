export default function LinkForm({ title, onAdd, setTitle, url, setUrl }) {
  return (
    <div>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="url"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <button onClick={onAdd}>추가</button>
    </div>
  );
}
