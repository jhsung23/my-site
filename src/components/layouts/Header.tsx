import { MenuToggleButton, ThemeToggleButton } from '@/components';
import { Logo, NavMenu, OverlayNavMenu } from '@/components/layouts';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center w-11/12 max-w-5xl py-8 md:pt-16 md:pb-8 bg-primary md:-top-8 bg-opacity-95 dark:bg-opacity-95">
      <nav className="flex justify-between grow">
        <Logo />
        <NavMenu className="items-center hidden gap-4 list-none select-none md:flex" />
      </nav>
      <aside className="flex items-center gap-4 ml-4">
        <ThemeToggleButton />
        <MenuToggleButton className="md:hidden" />
      </aside>
      <OverlayNavMenu />
    </header>
  );
}
