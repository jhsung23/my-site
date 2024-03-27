export interface Post {
  pageId: string;
  title: string;
  subtitle: string;
  slug: string;
  tags: string[];
  date: string;
  category: 'Knowledge' | 'TroubleShooting' | 'Development' | 'FAS';
  icon: string;
}
