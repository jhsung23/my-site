'use client';

import { Button, H3 } from '@/components/common';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
      <H3>{error.message}</H3>
      <Button onClick={() => reset()} className="tag-primary rounded-lg px-3 py-2">
        다시 시도하기
      </Button>
    </div>
  );
}
