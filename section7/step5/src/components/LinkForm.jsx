export default function LinkForm({
  title,
  onAdd,
  setTitle,
  url,
  setUrl,
  onModify,
  editId,
  editTitle,
  editUrl,
  setEditTitle,
  setEditUrl,
}) {
  return (
    <div>
      {editId ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="수정할 제목"
          />
          <input
            value={editUrl}
            onChange={(e) => setEditUrl(e.target.value)}
            placeholder="수정할 URL"
          />
          <button onClick={onModify}>완료</button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
