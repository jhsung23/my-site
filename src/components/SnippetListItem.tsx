import Link from 'next/link';

import { CodeIcon } from '@/assets/icons';
import { Tag } from '@/components';
import { H2 } from '@/components/common';
import { Snippet } from '@/types/snippet';

interface Props extends Snippet {}

export default function SnippetListItem({ title, slug, tags }: Props) {
  return (
    <li className="list-none overflow-hidden rounded-md transition-transform hover:-translate-y-1">
      <Link href={`/snippets/${slug}`} aria-label={`${title}`}>
        <div className="flex grow justify-between self-stretch rounded-md">
          <div className="flex gap-2">
            <CodeIcon width={'28px'} height={'28px'} />
            <H2 className="text-base">{title}</H2>
          </div>
          {tags.length > 0 && (
            <ul className="flex gap-2" aria-hidden="true">
              {tags.map((tag) => (
                <Tag key={tag} aria-hidden="true">
                  {tag}
                </Tag>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}
