import Link from 'next/link';

import { getAllPosts, getAllTags } from '@/apis/postService';
import { PostListItem, Tag } from '@/components';
import { H1, H2, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';

export default async function BlogPage({ searchParams }: { searchParams: { [key: string]: any } }) {
  const posts = await getAllPosts();
  const tags = (await getAllTags()) ?? [];
  const selectedTag = searchParams.tag ?? 'all';
  const filteredPosts =
    selectedTag === 'all' ? posts : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <>
      <MenuPageIcon>📝</MenuPageIcon>
      <H1 className="mb-3">Blog</H1>
      <Paragraph className="text-secondary">
        FrontEnd 개발을 공부하면서 학습한 내용과 경험들을 작성했어요.
      </Paragraph>

      <H2 className="mt-12">Tags</H2>
      {/* TODO ul 처리 */}
      <div className="flex flex-wrap max-w-full gap-2 mt-3">
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

      <H2 className="flex items-baseline justify-between mt-12">
        Posts
        <span className="text-lg font-semibold">
          {selectedTag} ({filteredPosts.length})
        </span>
      </H2>
      <ul className="flex flex-wrap gap-5 mt-3">
        {filteredPosts.map((post) => (
          <PostListItem
            key={post.pageId}
            href={`blog/${post.slug}`}
            title={post.title}
            subtitle={post.subtitle}
            tags={post.tags}
          />
        ))}
      </ul>
    </>
  );
}
