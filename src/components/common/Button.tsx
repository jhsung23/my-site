import { cn } from '@/utils/cn';

export default function Button({ children, className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'text-secondary hover:text-tertiary flex items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
