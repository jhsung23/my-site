import NavLink from '../common/NavLink';

export default function Nav() {
  return (
    <nav className="flex select-none">
      <NavLink href="/">about</NavLink>
      <NavLink href="/posts">posts</NavLink>
      <NavLink href="/snippets">snippets</NavLink>
    </nav>
  );
}
