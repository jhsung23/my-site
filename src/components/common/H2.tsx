import { cn } from '@/utils/cn';

export default function H2({ children, className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 className={cn('font-bold text-primary text-2xl break-all', className)} {...props}>
      {children}
    </h2>
  );
}
