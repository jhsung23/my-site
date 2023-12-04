import { cn } from '@/utils/cn';

export default function H3({ children, className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3 className={cn('font-bold text-primary text-xl break-all', className)} {...props}>
      {children}
    </h3>
  );
}
