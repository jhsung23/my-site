import Link from 'next/link';

import { Tag } from '@/components';
import { H3 } from '@/components/common';
import { Post } from '@/types/post';

interface Props extends Post {}

export default function RecentPostListItem({ title, slug, tags }: Props) {
  return (
    <li>
      <Link href={`blog/${slug}`}>
        <div className="bg-secondary flex h-full flex-col justify-between rounded-md p-4">
          <H3 className="text-lg">{title}</H3>
          {tags.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}
