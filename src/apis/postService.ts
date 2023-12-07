import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { notionClientInstance } from '@/apis/notionClient';
import { assertPageObjectResponse } from '@/utils/assert';

export const getAllPosts = async () => {
  return notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`,
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    })
    .then((response) => {
      const results = response.results;
      assertPageObjectResponse<PageObjectResponse[]>(results);
      return results.map((result) => {
        return {
          pageId: result.id,
          title:
            result.properties.title.type === 'title'
              ? result.properties.title.title[0].plain_text
              : '',
          subtitle:
            result.properties.subtitle.type === 'rich_text'
              ? result.properties.subtitle.rich_text.length
                ? result.properties.subtitle.rich_text[0].plain_text
                : ''
              : '',
          slug:
            result.properties.slug.type === 'rich_text'
              ? result.properties.slug.rich_text.length
                ? result.properties.slug.rich_text[0].plain_text
                : ''
              : '',
          tags:
            result.properties.tags.type === 'multi_select'
              ? result.properties.tags.multi_select.map((tag) => tag.name)
              : [],
        };
      });
    });
};

export const getAllTags = async () => {
  return await notionClientInstance.databases
    .retrieve({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`,
    })
    .then((response) => {
      if (response.properties.tags.type === 'multi_select') {
        return response.properties.tags.multi_select?.options.map((option) => option.name);
      }
    });
};

export const getPostBySlug = async (slug: string) => {
  return await notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`,
      filter: {
        rich_text: {
          equals: slug,
        },
        property: 'slug',
      },
    })
    .then((response) => {
      const result = response.results[0];
      assertPageObjectResponse<PageObjectResponse>(result);
      return {
        pageId: result.id,
        title:
          result.properties.title.type === 'title'
            ? result.properties.title.title[0].plain_text
            : '',
        subtitle:
          result.properties.subtitle.type === 'rich_text'
            ? result.properties.subtitle.rich_text.length
              ? result.properties.subtitle.rich_text[0].plain_text
              : ''
            : '',
        slug:
          result.properties.slug.type === 'rich_text'
            ? result.properties.slug.rich_text.length
              ? result.properties.slug.rich_text[0].plain_text
              : ''
            : '',
        tags:
          result.properties.tags.type === 'multi_select'
            ? result.properties.tags.multi_select.map((tag) => tag.name)
            : [],
        date:
          result.properties.date.type === 'date' ? result.properties.date.date?.start : '날짜없음',
      };
    });
};
