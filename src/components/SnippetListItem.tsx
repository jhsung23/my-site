import Link from 'next/link';

import { CodeIcon } from '@/assets/icons';
import { Tag } from '@/components';
import { H3 } from '@/components/common';

interface Props {
  href: string;
  title: string;
  tags?: string[];
}

export default function SnippetListItem({ href, title, tags }: Props) {
  return (
    <li className="grow basis-96 list-none">
      <Link href={href} className="flex grow">
        <div className="bg-secondary flex grow justify-between self-stretch rounded-md p-5 transition-transform hover:-translate-y-2">
          <div className="flex gap-2">
            <CodeIcon width={'28px'} height={'28px'} />
            <H3 className="text-lg font-semibold">{title}</H3>
          </div>
          {tags && (
            <div className="flex gap-2">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
