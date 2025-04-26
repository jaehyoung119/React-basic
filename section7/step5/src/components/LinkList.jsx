import LinkItem from "./LinkItem";

export default function LinkList({ links, onDelete, onEdit }) {
  return (
    <ul>
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
