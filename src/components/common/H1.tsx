import { cn } from '@/utils/cn';

export default function H1({ children, className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1 className={cn('font-bold text-primary text-4xl break-all', className)} {...props}>
      {children}
    </h1>
  );
}
