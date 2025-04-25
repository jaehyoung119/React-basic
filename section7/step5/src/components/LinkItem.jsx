export default function LinkItem({ link }) {
  return <a href={link.url}>{link.title}</a>;
}
