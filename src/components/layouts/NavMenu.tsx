import { NavLink } from '@/components/common';
import { MENUS, MENU_MAP } from '@/constants/menu';
import { cn } from '@/utils/cn';

interface Props {
  className?: string;
  onClickNavLink?: () => void;
}

export default function NavMenu({ className, onClickNavLink }: Props) {
  return (
    <ul className={cn('select-none', className)}>
      {MENUS.map((menu) => (
        <NavLink
          key={MENU_MAP[menu].label}
          href={MENU_MAP[menu].href}
          onClick={onClickNavLink}
          aria-label={`${MENU_MAP[menu].label} 메뉴로 이동`}
        >
          {MENU_MAP[menu].label}
        </NavLink>
      ))}
    </ul>
  );
}
