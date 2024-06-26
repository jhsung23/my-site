import { Suspense } from 'react';

import { H2 } from '@/components/common';
import { ALL } from '@/constants/tag';
import { getAllPosts } from '@/services/postService';

import { PostListItem } from '.';

interface Props {
  selectedTag: string;
}

export default async function Posts({ selectedTag }: Props) {
  const posts = await getAllPosts();
  const filteredPosts =
    selectedTag === ALL
      ? posts
      : posts.filter((post) => post.tags.some((tag) => tag.label === selectedTag));

  return (
    <Suspense>
      <H2 className="mt-12 flex items-baseline justify-between">
        Posts
        {/* <span className="text-lg font-semibold">
          {selectedTag} ({filteredPosts.length})
        </span> */}
      </H2>
      <ul className="relative mt-3 flex flex-col gap-10">
        {filteredPosts.map((post) => (
          <PostListItem key={post.pageId} {...post} />
        ))}
      </ul>
    </Suspense>
  );
}
