'use client';

import { usePathname } from 'next/navigation';

import { LinkItem } from '@/components/common';
import { cn } from '@/utils/cn';

interface Props extends React.ComponentProps<'li'> {
  href: string;
}

export default function NavLink({ href, className, children, ...props }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href ? true : false; // FIXME

  return (
    <li
      className={cn(`text-lg p-1 ${isActive ? 'font-bold hover:text-secondary' : ''}`, className)}
      {...props}
    >
      <LinkItem className="select-none" href={href ?? '/'}>
        {children}
      </LinkItem>
    </li>
  );
}
