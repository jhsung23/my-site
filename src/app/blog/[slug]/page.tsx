import { Metadata } from 'next';

import { getAllPosts, getPostBySlug } from '@/apis/postService';
import { ReadingProgressBar, TOC, Tag } from '@/components';
import { H1, Paragraph } from '@/components/common';
import { Post } from '@/types/post';
import { ParsedHtmlContent, parseNotionPageToHtml } from '@/utils/contents';
import { getPageCanonical } from '@/utils/seo';

export const revalidate = 1800;

interface Props {
  params: { slug: string };
}

export interface PostWithContent extends Post {
  content: ParsedHtmlContent;
}

const getPostDataBySlug = async (slug: string): Promise<PostWithContent> => {
  const post = await getPostBySlug(slug);
  const content = await parseNotionPageToHtml(post.pageId);

  return { ...post, content };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: getPageCanonical('blog', post.slug),
    },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [{ url: '/logo.png', width: 600, height: 600, alt: `logo` }],
      tags: post.tags,
      type: 'article',
    },
  };
}

export default async function Page({ params }: Props) {
  const { title, subtitle, tags, date, content } = await getPostDataBySlug(params.slug);

  return (
    <>
      <ReadingProgressBar />
      <ul className="mb-3 mt-4 flex max-w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
      <H1 className="text-highlight break-words font-bold">{title}</H1>
      <Paragraph className="my-1 font-normal">{subtitle}</Paragraph>
      <time className="text-sm font-light">{date}</time>

      <hr className="bg-mute mb-10 mt-4 h-0.5 border-0" />

      {/* content */}
      <div className="relative">
        <article
          className="prose min-w-full dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>

        {/* TOC */}
        <aside className="absolute left-full top-0 ml-10 hidden h-full w-56 xl:block">
          <TOC content={content} />
        </aside>
      </div>
    </>
  );
}
