import { notionClientInstance } from '@/apis/notionClient';
import { Snippet } from '@/types/snippet';
import { assertPageObjectResponseArray } from '@/utils/assert';

export const getAllSnippets = async (): Promise<Snippet[]> => {
  return notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_SNIPPET_DATABASE_ID}`,
    })
    .then((response) => {
      const results = response.results;
      assertPageObjectResponseArray(results);
      return results.map<Snippet>((result) => {
        return {
          pageId: result.id,
          title:
            result.properties.title.type === 'title'
              ? result.properties.title.title[0].plain_text
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
            result.properties.date.type === 'date'
              ? result.properties.date.date
                ? result.properties.date.date.start
                : '날짜없음'
              : '날짜없음',
        };
      });
    });
};
