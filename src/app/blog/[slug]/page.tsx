import { getPostBySlug } from '@/apis/postService';
import { Tag } from '@/components';
import { H3 as Subtitle, H1 as Title } from '@/components/common';
import { markdownToHtml, notionPageToMarkdown } from '@/utils/parseContents';

const getPostDataBySlug = async (slug: string) => {
  const post = await getPostBySlug(slug);
  const markdownContent = await notionPageToMarkdown(post.pageId);
  const htmlContent = await markdownToHtml(markdownContent);

  return { ...post, content: htmlContent };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { title, subtitle, tags, date, content } = await getPostDataBySlug(params.slug);

  return (
    <>
      <div className="flex flex-wrap max-w-full gap-2 mt-4 mb-3">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Title className="mb-3 break-words">{title}</Title>
      <Subtitle className="font-normal text-lg mt-3 mb-1">{subtitle}</Subtitle>
      <time className="text-base font-light">{date}</time>

      <hr className="mt-4 mb-10 bg-mute h-0.5 border-0" />

      {/* content */}
      <div className="flex w-full">
        <article
          className="prose dark:prose-invert min-w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>

        {/* TOC */}
        {/* <aside className="hidden lg:block"></aside> */}
      </div>
    </>
  );
}
