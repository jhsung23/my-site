import Link from 'next/link';

import { CodeIcon } from '@/assets/icons';
import { Tag } from '@/components';
import { H3 } from '@/components/common';
import { Snippet } from '@/types/snippet';

interface Props extends Snippet {}

export default function SnippetListItem({ title, slug, tags }: Props) {
  return (
    <li className="bg-secondary list-none overflow-hidden rounded-md transition-transform hover:-translate-y-1">
      <Link href={`/snippets/${slug}`}>
        <div className="bg-secondary flex grow justify-between self-stretch rounded-md p-5">
          <div className="flex gap-2">
            <CodeIcon width={'28px'} height={'28px'} />
            <H3 className="text-lg font-semibold">{title}</H3>
          </div>
          {tags.length && (
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
