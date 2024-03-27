import { NotionColorSet } from '@/constants/notion';

export interface Project {
  pageId: string;
  thumbnail: string;
  projectTitle: string;
  description: string;
  slug: string;
  tags: { label: string; color: NotionColorSet }[];
  startDate: string;
  endDate: string;
  repository: string;
  team: string;
}
