import Link from 'next/link';

import { cn } from '@/utils/cn';

export default function LinkItem({
  ref: _,
  href,
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <Link
      href={href ?? '/'}
      className={cn('flex items-center px-4 text-secondary hover:text-tertiary', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
