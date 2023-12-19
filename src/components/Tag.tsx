import { cn } from '@/utils/cn';

export default function Tag({ className, children }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn(
        'flex items-center px-1.5 py-0.5 font-medium select-none text-sm rounded-lg tag-primary',
        className,
      )}
    >
      {children}
    </li>
  );
}
