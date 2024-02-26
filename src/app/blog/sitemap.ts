import { MetadataRoute } from 'next/types';

import { getAllPosts } from '@/services/postService';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateSitemaps() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.slug,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    url: `https://sungjihyun.vercel.app/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 1,
  }));
}
