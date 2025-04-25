import LinkItem from "./LinkItem";

export default function LinkList({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </ul>
  );
}
