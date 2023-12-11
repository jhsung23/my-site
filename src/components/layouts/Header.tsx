import { MenuToggleButton, ThemeToggleButton } from '@/components';
import { Logo, NavMenu, OverlayNavMenu } from '@/components/layouts';

export default function Header() {
  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <header className="bg-primary sticky top-0 z-10 flex w-11/12 max-w-5xl items-center bg-opacity-95 py-8 dark:bg-opacity-95 md:-top-8 md:pb-8 md:pt-16">
      <nav className="flex grow justify-between">
        <Logo />
        <NavMenu className="hidden select-none list-none items-center gap-4 md:flex" />
      </nav>
      <aside className="ml-4 flex items-center gap-4">
        <ThemeToggleButton />
        <MenuToggleButton className="md:hidden" />
      </aside>
      <OverlayNavMenu />
    </header>
  );
}
