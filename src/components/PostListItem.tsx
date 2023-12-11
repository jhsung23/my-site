import Link from 'next/link';

import { Tag } from '@/components';
import { H3, Paragraph } from '@/components/common';

interface Props {
  href: string;
  title: string;
  subtitle: string;
  tags?: string[];
}

export default function PostListItem({ href, title, subtitle, tags }: Props) {
  return (
    <li className="flex grow basis-96 list-none">
      <Link href={href} className="flex grow">
        <div className="bg-secondary flex grow flex-col self-stretch rounded-md p-5 transition-transform hover:-translate-y-2">
          <H3>{title}</H3>
          {subtitle && <Paragraph className="text-tertiary mt-2">{subtitle}</Paragraph>}
          {tags && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
