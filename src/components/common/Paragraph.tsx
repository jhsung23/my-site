import { cn } from '@/utils/cn';

export default function Paragraph({ children, className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('font-medium text-secondary break-all', className)} {...props}>
      {children}
    </p>
  );
}
