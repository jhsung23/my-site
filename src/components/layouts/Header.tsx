import { ThemeToggleButton } from '@/components';
import { Logo, Nav } from '.';

export default function Header() {
  return (
    <header className="flex sticky items-center justify-between pt-16 pb-8 px-8 -top-8 bg-opacity-90 ">
      <Logo />
      <div className="flex gap-4 items-center">
        <Nav />
        <ThemeToggleButton />
      </div>
    </header>
  );
}
