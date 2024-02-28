import { MetadataRoute } from 'next';

import { getAllPosts } from '@/services/postService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://sungjihyun.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sungjihyun.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://sungjihyun.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...(await getAllPosts()).map((post) => ({
      url: `https://sungjihyun.vercel.app/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 1,
    })),
  ];
}
