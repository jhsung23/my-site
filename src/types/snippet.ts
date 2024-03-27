import { NotionColorSet } from '@/constants/notion';

export interface Snippet {
  pageId: string;
  title: string;
  slug: string;
  tags: { label: string; color: NotionColorSet }[];
  date: string;
}
