import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import compact from 'lodash/compact';

import { env } from '@/lib/env';
import { handleHttpRequestError } from '@/lib/error';
import {
  getAllPagesOfDatabase,
  getDatabase,
  getFilteredPageOfDatabaseWithRichText,
} from '@/lib/notion-client';
import { Post } from '@/types/post';
import { extractPropertyOfPage } from '@/utils/notion';

export const getAllPosts = async () => {
  try {
    const response = await getAllPagesOfDatabase(env.NOTION_TIL_DATABASE_ID, {
      property: 'date',
      direction: 'descending',
    });
    const compactResponse = compact(response);
    return compactResponse.map(parseResponseToPost);
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
  return [];
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await getFilteredPageOfDatabaseWithRichText(env.NOTION_TIL_DATABASE_ID, {
      property: 'slug',
      targetString: slug,
    });
    const compactResponse = compact(response);
    return compactResponse.map(parseResponseToPost)[0];
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
};

export const getAllTags = async (): Promise<Post['tags']> => {
  try {
    const response = await getDatabase(env.NOTION_TIL_DATABASE_ID);
    if (response.properties.tags.type === 'multi_select') {
      return response.properties.tags.multi_select
        ? response.properties.tags.multi_select.options.map((option) => option.name)
        : [];
    }
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
  return [];
};

const parseResponseToPost = ({ id, properties }: PageObjectResponse) =>
  ({
    pageId: id,
    title: extractPropertyOfPage(properties.title),
    subtitle: extractPropertyOfPage(properties.subtitle),
    slug: extractPropertyOfPage(properties.slug),
    tags: extractPropertyOfPage(properties.tags),
    date: (extractPropertyOfPage(properties.date) as { startDate: string; endDate: string })
      .startDate,
  }) as Post;
