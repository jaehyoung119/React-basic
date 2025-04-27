export function BookmarkReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.newBookmark];
    case "DELETE":
      return state.filter((bookmark) => bookmark.id !== action.id);
    case "UPDATE":
      return state.map((bookmark) =>
        bookmark.id === action.id
          ? { ...bookmark, title: action.newTitle, url: action.newUrl }
          : bookmark
      );
    default:
      return state;
  }
}
