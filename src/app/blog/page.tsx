import { Metadata } from 'next';
import Link from 'next/link';

import { getAllPosts, getAllTags } from '@/apis/postService';
import { PostListItem, Tag } from '@/components';
import { H1, H2, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';
import { getMenuPageMetaTitle, getPageCanonical } from '@/utils/seo';

const ALL = 'all';

export const metadata: Metadata = {
  title: getMenuPageMetaTitle('blog'),
  description: 'FrontEnd 개발을 공부하면서 학습한 내용과 경험들을 기록했어요.',
  alternates: {
    canonical: getPageCanonical('blog'),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPage({ searchParams }: { searchParams: { [key: string]: any } }) {
  const [postsPromiseResult, tagsPromiseResult] = await Promise.allSettled([
    getAllPosts(),
    getAllTags(),
  ]);
  const posts = postsPromiseResult.status === 'fulfilled' ? postsPromiseResult.value : [];
  const tags = tagsPromiseResult.status === 'fulfilled' ? [ALL, ...tagsPromiseResult.value] : [];
  const selectedTag = searchParams.tag ?? ALL;
  const filteredPosts =
    selectedTag === ALL ? posts : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <>
      <MenuPageIcon>📝</MenuPageIcon>
      <H1 className="mb-3">Blog</H1>
      <Paragraph className="text-secondary">
        FrontEnd 개발을 공부하면서 학습한 내용과 경험들을 기록했어요.
      </Paragraph>

      {/* Tags */}
      <H2 className="mt-12">Tags</H2>
      <ul className="mt-3 flex max-w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            className={`${selectedTag === tag ? 'bg-mute text-white' : 'hover:bg-secondary'}`}
          >
            <Link key={tag} href={`?tag=${tag}`}>
              {tag}
            </Link>
          </Tag>
        ))}
      </ul>

      {/* Posts */}
      <H2 className="mt-12 flex items-baseline justify-between">
        Posts
        <span className="text-lg font-semibold">
          {selectedTag} ({filteredPosts.length})
        </span>
      </H2>
      <ul className="mt-3 flex flex-col gap-3">
        {filteredPosts.map((post) => (
          <PostListItem key={post.pageId} {...post} />
        ))}
      </ul>
    </>
  );
}
