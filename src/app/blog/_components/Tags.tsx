import Link from 'next/link';
import { Suspense } from 'react';

import { Tag } from '@/components';
import { H2 } from '@/components/common';
import { ALL } from '@/constants/tag';
import { getAllTags } from '@/services/postService';

interface Props {
  selectedTag: string;
}

export default async function Tags({ selectedTag }: Props) {
  const tags = [{ label: ALL, color: 'gray' }, ...(await getAllTags())];

  return (
    <Suspense>
      <H2 className="mt-12">Tags</H2>
      <ul className="mt-3 flex max-w-full flex-wrap gap-2">
        {tags.map(({ label }) => (
          <Tag
            key={label}
            className={`${
              selectedTag === label ? 'tag-active' : 'hover:opacity-60 dark:hover:opacity-60'
            }`}
          >
            <Link key={label} href={`?tag=${label}`} aria-label={`${label} 관련 글 목록 더 보기`}>
              {label}
            </Link>
          </Tag>
        ))}
      </ul>
    </Suspense>
  );
}
