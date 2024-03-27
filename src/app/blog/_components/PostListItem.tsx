import Link from 'next/link';

import { Tag } from '@/components';
import { H3, Paragraph } from '@/components/common';
import { Post } from '@/types/post';

interface Props extends Post {}

export default function PostListItem({ title, subtitle, slug, tags }: Props) {
  return (
    <li className="flex list-none transition-transform hover:-translate-y-1">
      <Link href={`blog/${slug}`} className="flex grow" aria-label={`${title}`}>
        <div className="bg-primary flex grow flex-col self-stretch rounded-md">
          <H3>{title}</H3>
          {subtitle.length > 0 && (
            <Paragraph className="text-tertiary mt-1" aria-hidden="true">
              {subtitle}
            </Paragraph>
          )}
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
