import { notionClientInstance } from '@/apis/notionClient';
import { Project } from '@/types/project';
import { assertPageObjectResponseArray } from '@/utils/assert';

export const getAllProjects = async (): Promise<Project[]> => {
  return notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID}`,
      // TODO
      // sorts: [
      //   {
      //     property: 'slug',
      //     direction: 'descending',
      //   },
      // ],
    })
    .then((response) => {
      const results = response.results;
      assertPageObjectResponseArray(results);
      return results.map<Project>((result) => {
        return {
          pageId: result.id,
          cover: result.cover?.type === 'file' ? result.cover.file.url : '',
          projectTitle:
            result.properties.projectTitle.type === 'title'
              ? result.properties.projectTitle.title[0].plain_text
              : '',
          description:
            result.properties.description.type === 'rich_text'
              ? result.properties.description.rich_text.length
                ? result.properties.description.rich_text[0].plain_text
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
