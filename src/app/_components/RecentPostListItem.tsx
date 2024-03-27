import Link from 'next/link';

import { Tag } from '@/components';
import { H3 } from '@/components/common';
import { Post } from '@/types/post';

interface Props extends Post {}

export default function RecentPostListItem({ title, slug, tags }: Props) {
  return (
    <li>
      <Link href={`blog/${slug}`} aria-label={title}>
        <div className="flex h-full flex-col justify-between rounded-md">
          <H3 className="text-lg">{title}</H3>
          {tags.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-hidden="true">
              {tags.map(({ label }) => (
                <Tag key={label}>{label}</Tag>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}
