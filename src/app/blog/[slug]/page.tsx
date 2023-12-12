import { getPostBySlug } from '@/apis/postService';
import { ReadingProgressBar, Tag } from '@/components';
import { H3 as Subtitle, H1 as Title } from '@/components/common';
import { Post } from '@/types/post';
import { markdownToHtml, notionPageToMarkdown } from '@/utils/parseContents';

export interface PostWithContent extends Post {
  content: Awaited<ReturnType<typeof markdownToHtml>>;
}

const getPostDataBySlug = async (slug: string): Promise<PostWithContent> => {
  const post = await getPostBySlug(slug);
  const markdownContent = await notionPageToMarkdown(post.pageId);
  const htmlContent = await markdownToHtml(markdownContent);

  return { ...post, content: htmlContent };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { title, subtitle, tags, date, content } = await getPostDataBySlug(params.slug);

  return (
    <>
      <ReadingProgressBar />
      <ul className="mb-3 mt-4 flex max-w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
      <Title className="mb-3 break-words">{title}</Title>
      <Subtitle className="mb-1 mt-3 text-lg font-normal">{subtitle}</Subtitle>
      <time className="text-base font-light">{date}</time>

      <hr className="bg-mute mb-10 mt-4 h-0.5 border-0" />

      {/* content */}
      <div className="flex w-full">
        <article
          className="prose min-w-full dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>

        {/* TOC */}
        {/* <aside className="hidden lg:block"></aside> */}
      </div>
    </>
  );
}
