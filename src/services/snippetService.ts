import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import compact from 'lodash/compact';

import { env } from '@/lib/env';
import { handleHttpRequestError } from '@/lib/error';
import { getAllPagesOfDatabase, getFilteredPageOfDatabaseWithRichText } from '@/lib/notion-client';
import { Snippet } from '@/types/snippet';
import { extractPropertyOfPage } from '@/utils/notion';

export const getAllSnippets = async () => {
  try {
    const response = await getAllPagesOfDatabase(env.NOTION_SNIPPET_DATABASE_ID);
    const compactResponse = compact(response);
    return compactResponse.map(parseResponseToSnippet);
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
  return [];
};

// TODO
export const getSnippetBySlug = async (slug: string) => {
  try {
    const response = await getFilteredPageOfDatabaseWithRichText(env.NOTION_SNIPPET_DATABASE_ID, {
      property: 'slug',
      targetString: slug,
    });
    const compactResponse = compact(response);
    return compactResponse.map(parseResponseToSnippet)[0];
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
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
