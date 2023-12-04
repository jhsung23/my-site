'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { LinkItem } from './';

export default function NavLink({
  ref: _,
  href,
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  const pathname = usePathname();
  const isActive = pathname === href ? true : false;

  return (
    <LinkItem
      href={href ?? '/'}
      className={cn(`text-lg ${isActive ? 'font-semibold hover:text-secondary' : ''}`, className)}
      {...props}
    >
      {children}
    </LinkItem>
  );
}
