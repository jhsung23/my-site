import Link from 'next/link';

import { H3 } from '@/components/common';

interface Props {
  message: string;
}

export default function NotFound({ message }: Props) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
      <H3>{message}</H3>
      <Link
        href={'/'}
        className="tag-primary rounded-lg px-3 py-2 hover:opacity-60 dark:hover:opacity-60"
      >
        홈으로 이동하기
      </Link>
    </div>
  );
}
