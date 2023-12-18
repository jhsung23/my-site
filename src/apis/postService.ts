import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import compact from 'lodash/compact';

import {
  getAllPagesOfDatabase,
  getDatabase,
  getFilteredPageOfDatabaseWithRichText,
} from '@/apis/notionClient';
import { Post } from '@/types/post';
import { extractPropertyOfPage } from '@/utils/notion';

export const getAllPosts = async () => {
  const response = await getAllPagesOfDatabase(
    `${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`,
    {
      property: 'date',
      direction: 'descending',
    },
  );
  const compactResponse = compact(response);
  return compactResponse.map(parseResponseToPost);
};

export const getPostBySlug = async (slug: string) => {
  const response = await getFilteredPageOfDatabaseWithRichText(
    `${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`,
    { property: 'slug', targetString: slug },
  );
  const compactResponse = compact(response);
  return compactResponse.map(parseResponseToPost)[0];
};

export const getAllTags = async (): Promise<Post['tags']> => {
  // TODO refactor
  return getDatabase(`${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`).then((response) => {
    if (response.properties.tags.type === 'multi_select') {
      return response.properties.tags.multi_select
        ? response.properties.tags.multi_select.options.map((option) => option.name)
        : [];
    }
    return [];
  });
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
