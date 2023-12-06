import Link from 'next/link';

import { CodeIcon } from '@/assets/icons';
import { H3 } from '@/components/common';
import { Tag } from '.';

interface Props {
  href: string;
  title: string;
  tags?: string[];
}
export default function SnippetCard({ href, title, tags }: Props) {
  return (
    <Link href={href} className="flex basis-96 grow">
      <div className="flex self-stretch justify-between p-5 transition-transform rounded-md bg-secondary hover:-translate-y-2 grow">
        <div className="flex gap-2">
          <CodeIcon width={'28px'} height={'28px'} />
          <H3 className="text-lg font-semibold">{title}</H3>
        </div>
        {tags && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
