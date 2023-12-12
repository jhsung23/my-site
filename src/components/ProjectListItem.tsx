import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/components';
import { H3, Paragraph } from '@/components/common';
import { Project } from '@/types/project';

interface Props extends Project {}

export default function ProjectListItem({ cover, projectTitle, description, slug, tags }: Props) {
  return (
    <li className="bg-secondary list-none overflow-hidden rounded-md  transition-transform hover:-translate-y-1">
      <Link href={`/projects/${slug}`}>
        <Image
          src={cover}
          width={200}
          height={200}
          className="h-80 w-full object-cover lg:h-64"
          alt={`${projectTitle} thumbnail`}
        />
        <div className="flex flex-col gap-1 p-3">
          <H3 className="font-semibold">{projectTitle}</H3>
          <Paragraph className="text-tertiary">{description}</Paragraph>
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
