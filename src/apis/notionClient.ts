import { Client } from '@notionhq/client';

const createNotionClientInstance = () => {
  return new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });
};

export const notionClientInstance = createNotionClientInstance();
