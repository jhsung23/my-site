import { ThemeToggleButton } from '@/components';
import { Logo, Nav } from '.';

export default function Header() {
  return (
    <header className="sticky z-10 flex items-center justify-between w-11/12 max-w-5xl pt-16 pb-8 bg-primary -top-8 bg-opacity-90 dark:bg-opacity-90">
      <Logo />
      <div className="flex items-center gap-4">
        <Nav />
        <ThemeToggleButton />
      </div>
    </header>
  );
}
