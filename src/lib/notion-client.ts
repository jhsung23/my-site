import { Client } from '@notionhq/client';

import { assertDatabaseObjectResponse, assertPageObjectResponseArray } from '@/utils/assert';

import { env } from './env';

const createNotionClientInstance = () => {
  return new Client({ auth: env.NOTION_API_KEY, fetch: fetch });
};

export const notionClientInstance = createNotionClientInstance();

export const getAllPagesOfDatabase = async (
  database_id: string,
  sortOption?: {
    property: string;
    direction: 'descending' | 'ascending';
  },
) => {
  const response = await notionClientInstance.databases.query({
    database_id,
    sorts: sortOption
      ? [{ property: sortOption.property, direction: sortOption.direction }]
      : undefined,
  });
  const results = response.results;
  assertPageObjectResponseArray(results);
  return results;
};

export const getFilteredPageOfDatabaseWithRichText = async (
  database_id: string,
  filterOption: {
    property: string;
    targetString: string;
  },
) => {
  const { property, targetString } = filterOption;
  const response = await notionClientInstance.databases.query({
    database_id,
    filter: {
      rich_text: {
        equals: targetString,
      },
      property,
    },
  });
  const results = response.results;
  assertPageObjectResponseArray(results);
  return results;
};

export const getDatabase = async (database_id: string) => {
  const response = await notionClientInstance.databases.retrieve({
    database_id,
  });
  assertDatabaseObjectResponse(response);
  return response;
};
