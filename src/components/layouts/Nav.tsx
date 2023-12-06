import NavLink from '../common/NavLink';

export default function Nav() {
  return (
    <nav className="flex select-none">
      <NavLink href="/">About</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/snippets">Snippets</NavLink>
      <NavLink href="/projects">Projects</NavLink>
    </nav>
  );
}
