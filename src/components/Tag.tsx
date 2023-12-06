import { cn } from '@/utils/cn';

export default function Tag({ className, children }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'flex items-center px-1.5 py-0.5 text-mute font-medium select-none text-sm bg-tertiary rounded-md',
        className,
      )}
    >
      {children}
    </span>
  );
}
