import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { notionClientInstance } from '@/apis/notionClient';
import { assertPageObjectResponse } from '@/utils/assert';

export const getAllSnippets = async () => {
  return notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_SNIPPET_DATABASE_ID}`,
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
          tags:
            result.properties.tags.type === 'multi_select'
              ? result.properties.tags.multi_select.map((tag) => tag.name)
              : [],
        };
      });
    });
};
