import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/components';
import { H2, Paragraph } from '@/components/common';
import { notionBgColors } from '@/constants/notion';
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
    <li className="list-none overflow-hidden transition-transform hover:-translate-y-1">
      <Link href={`/projects/${slug}`}>
        <Image
          src={thumbnail}
          width={200}
          height={200}
          className="h-64 w-full rounded-lg bg-black-150 dark:bg-black-750"
          alt={`${projectTitle} thumbnail`}
        />
        <div className="flex flex-col gap-1 pt-2">
          <H2 className="text-lg">{projectTitle}</H2>
          <Paragraph className="text-tertiary text-sm" aria-hidden="true">
            {description}
          </Paragraph>
          {tags.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {tags.map(({ label, color }) => (
                <Tag key={label} aria-hidden="true" className={notionBgColors[color]}>
                  {label}
                </Tag>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}
