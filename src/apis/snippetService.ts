import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import compact from 'lodash/compact';

import { getAllPagesOfDatabase } from '@/apis/notionClient';
import { Snippet } from '@/types/snippet';
import { extractPropertyOfPage } from '@/utils/notion';

export const getAllSnippets = async () => {
  const response = await getAllPagesOfDatabase(
    `${process.env.NEXT_PUBLIC_NOTION_SNIPPET_DATABASE_ID}`,
  );
  const compactResponse = compact(response);
  return compactResponse.map(parseResponseToSnippet);
};

const parseResponseToSnippet = ({ id, properties }: PageObjectResponse) =>
  ({
    pageId: id,
    title: extractPropertyOfPage(properties.title),
    slug: extractPropertyOfPage(properties.slug),
    tags: extractPropertyOfPage(properties.tags),
    date: (extractPropertyOfPage(properties.date) as { startDate: string; endDate: string })
      .startDate,
  }) as Snippet;
