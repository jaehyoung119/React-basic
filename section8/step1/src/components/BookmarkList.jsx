import { useBookState } from "../context/BookmarkContext";
import { BookmarkItem } from "./BookmarkItem";

export function BookmarkList() {
  const { bookmarks } = useBookState();

  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <BookmarkItem key={bookmark.id} bookmark={bookmark} />
      ))}
    </ul>
  );
}
