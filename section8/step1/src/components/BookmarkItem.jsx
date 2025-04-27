import { useBookActions } from "../hooks/useBookmarkActions";

export function BookmarkItem({ bookmark }) {
  const { onDelete, onUpdateStart } = useBookActions();

  return (
    <>
      <a href={bookmark.url} target="_blank">
        {bookmark.title}
      </a>
      <button onClick={() => onDelete(bookmark.id)}>삭제</button>
      <button onClick={() => onUpdateStart(bookmark)}>수정</button>
    </>
  );
}
