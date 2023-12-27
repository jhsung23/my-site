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
  const tags = [ALL, ...(await getAllTags())];

  return (
    <Suspense>
      <H2 className="mt-12">Tags</H2>
      <ul className="mt-3 flex max-w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            className={`${
              selectedTag === tag ? 'tag-active' : 'hover:opacity-60 dark:hover:opacity-60'
            }`}
          >
            <Link key={tag} href={`?tag=${tag}`} aria-label={`${tag} 관련 글 목록 더 보기`}>
              {tag}
            </Link>
          </Tag>
        ))}
      </ul>
    </Suspense>
  );
}
