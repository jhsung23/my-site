import { NotionColorSet } from '@/constants/notion';

export interface Post {
  pageId: string;
  title: string;
  subtitle: string;
  slug: string;
  tags: { label: string; color: NotionColorSet }[];
  date: string;
  category: 'Knowledge' | 'TroubleShooting' | 'Development' | 'FAS';
  icon: string;
}
