import Link from 'next/link';

import { cn } from '@/utils/cn';

export default function LinkItem({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: _,
  href,
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <Link
      href={href ?? '/'}
      className={cn('flex items-center text-secondary hover:text-tertiary', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
