import Link from 'next/link';

import { Tag } from '@/components';
import { H3, Paragraph } from '@/components/common';

interface Props {
  href: string;
  title: string;
  subtitle: string;
  tags?: string[];
}

export default function PostCard({ href, title, subtitle, tags }: Props) {
  return (
    <Link href={href} className="flex basis-96 grow">
      <div className="flex flex-col self-stretch p-5 transition-transform rounded-md grow bg-secondary hover:-translate-y-2">
        <H3>{title}</H3>
        {subtitle && <Paragraph className="mt-2 text-tertiary">{subtitle}</Paragraph>}
        {tags && (
          <div className="flex flex-wrap mt-2 gap-1.5">
            {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        )}
      </div>
    </Link>
  );
}
