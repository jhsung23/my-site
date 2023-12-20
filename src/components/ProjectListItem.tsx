import Link from 'next/link';

import { Tag } from '@/components';
import { H2, Paragraph } from '@/components/common';
import { Project } from '@/types/project';

interface Props extends Project {}

export default function ProjectListItem({
  thumbnail,
  projectTitle,
  description,
  slug,
  tags,
}: Props) {
  return (
    <li className="bg-secondary list-none overflow-hidden rounded-md transition-transform hover:-translate-y-1">
      <Link href={`/projects/${slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          width={200}
          height={200}
          className="h-64 w-full bg-black-150 object-cover dark:bg-black-750"
          alt={`${projectTitle} thumbnail`}
        />
        <div className="flex flex-col gap-1 p-3">
          <H2 className="text-lg">{projectTitle}</H2>
          <Paragraph className="text-tertiary text-sm" aria-hidden="true">
            {description}
          </Paragraph>
          {tags.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
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
