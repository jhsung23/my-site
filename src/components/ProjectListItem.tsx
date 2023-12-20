import Link from 'next/link';

import { Tag } from '@/components';
import { H3, Paragraph } from '@/components/common';
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
      <Link href={`/projects/${slug}`} aria-label={`${projectTitle} 프로젝트 설명 상세 보기`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          width={200}
          height={200}
          className="h-64 w-full bg-black-150 object-cover dark:bg-black-750"
          alt={`${projectTitle} thumbnail`}
        />
        <div className="flex flex-col gap-1 p-3">
          <H3 className="text-lg">{projectTitle}</H3>
          <Paragraph className="text-tertiary text-sm">{description}</Paragraph>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
