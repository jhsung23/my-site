import { NavLink } from '@/components/common';
import { menus } from '@/constants/menu';
import { cn } from '@/utils/cn';

interface Props {
  className?: string;
  onClickNavLink?: () => void;
}

export default function NavMenu({ className, onClickNavLink }: Props) {
  return (
    <ul className={cn('select-none', className)}>
      {menus.map(({ label, href }) => (
        <NavLink key={label} href={href} onClick={onClickNavLink}>
          {label}
        </NavLink>
      ))}
    </ul>
  );
}
