import Link from 'next/link';

import { Tag } from '@/components';
import { H3, Paragraph } from '@/components/common';
import { notionBgColors } from '@/constants/notion';
import { getPostByCategory } from '@/services/postService';
import { Post } from '@/types/post';

interface Props {
  title: Post['category'];
  description: string;
}

export default async function Section({ title, description }: Props) {
  const posts = (await getPostByCategory(title)) || [];

  return (
    <section className="flex flex-col">
      <H3 className="flex items-center justify-between">
        {title} <span className="text-base">({posts.length})</span>
      </H3>
      <Paragraph className="my-1.5 border-l-2 border-black-400 bg-black-100 px-1.5 py-0.5 text-sm font-light text-black-550 dark:bg-black-750 dark:text-black-300">
        {description}
      </Paragraph>

      <ul>
        {posts.map(({ title, slug, tags }) => (
          <li key={slug} className="py-0.5 text-base">
            <Link href={`/blog/${slug}`} className="flex items-center justify-between gap-1">
              <h4 className="truncate text-black-550 hover:text-black-900 dark:text-black-350 dark:hover:text-black-50">
                {title}
              </h4>
              <Tag className={`whitespace-nowrap text-xs ${notionBgColors[tags[0].color]}`}>
                {tags[0].label}
              </Tag>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
