import Link from 'next/link';

import { getAllPosts, getAllTags } from '@/apis/postService';
import { PostListItem, Tag } from '@/components';
import { H1, H2, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPage({ searchParams }: { searchParams: { [key: string]: any } }) {
  const posts = await getAllPosts();
  const tags = await getAllTags();
  const selectedTag = searchParams.tag ?? 'all';
  const filteredPosts =
    selectedTag === 'all' ? posts : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <>
      <MenuPageIcon>📝</MenuPageIcon>
      <H1 className="mb-3">Blog</H1>
      <Paragraph className="text-secondary">
        FrontEnd 개발을 공부하면서 학습한 내용과 경험들을 기록했어요.
      </Paragraph>

      <H2 className="mt-12">Tags</H2>
      {/* TODO ul 처리 */}
      <div className="mt-3 flex max-w-full flex-wrap gap-2">
        <Link href={`?tag=all`} className="group">
          <Tag
            className={`${
              selectedTag === 'all' ? 'bg-mute text-white' : 'group-hover:bg-secondary'
            }`}
          >
            all
          </Tag>
        </Link>
        {tags.map((tag) => (
          <Link key={tag} href={`?tag=${tag}`} className="group">
            <Tag
              key={tag}
              className={`${
                selectedTag === tag ? 'bg-mute text-white' : 'group-hover:bg-secondary'
              }`}
            >
              {tag}
            </Tag>
          </Link>
        ))}
      </div>

      <H2 className="mt-12 flex items-baseline justify-between">
        Posts
        <span className="text-lg font-semibold">
          {selectedTag} ({filteredPosts.length})
        </span>
      </H2>

      <ul className="mt-3 flex flex-wrap gap-3">
        {filteredPosts.map((post) => (
          <PostListItem key={post.pageId} {...post} />
        ))}
      </ul>
    </>
  );
}
