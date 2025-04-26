export default function LinkItem({ link, onDelete, onEdit }) {
  return (
    <li>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.title}
      </a>
      <button onClick={() => onEdit(link.id, link.title, link.url)}>
        수정
      </button>
      <button onClick={() => onDelete(link.id)}>삭제</button>
    </li>
  );
}
