import { notionClientInstance } from '@/apis/notionClient';
import { Project } from '@/types/project';
import { assertPageObjectResponseArray } from '@/utils/assert';

export const getAllProjects = async (): Promise<Project[]> => {
  return notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID}`,
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
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
          startDate:
            result.properties.date.type === 'date'
              ? result.properties.date.date
                ? result.properties.date.date.start
                : '날짜없음'
              : '날짜없음',
          endDate:
            result.properties.date.type === 'date'
              ? result.properties.date.date
                ? result.properties.date.date.end!
                : '날짜없음'
              : '날짜없음',
          team:
            result.properties.team.type === 'rich_text'
              ? result.properties.team.rich_text.length
                ? result.properties.team.rich_text[0].plain_text
                : ''
              : '',
          repository:
            result.properties.repository.type === 'url'
              ? result.properties.repository.url ?? ''
              : '',
        };
      });
    });
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  return await notionClientInstance.databases
    .query({
      database_id: `${process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID}`,
      filter: {
        rich_text: {
          equals: slug,
        },
        property: 'slug',
      },
    })
    .then((response) => {
      const results = response.results;
      assertPageObjectResponseArray(results);
      const result = results[0];
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
        startDate:
          result.properties.date.type === 'date'
            ? result.properties.date.date
              ? result.properties.date.date.start
              : '날짜없음'
            : '날짜없음',
        endDate:
          result.properties.date.type === 'date'
            ? result.properties.date.date
              ? result.properties.date.date.end!
              : '날짜없음'
            : '날짜없음',
        team:
          result.properties.team.type === 'rich_text'
            ? result.properties.team.rich_text.length
              ? result.properties.team.rich_text[0].plain_text
              : ''
            : '',
        repository:
          result.properties.repository.type === 'url' ? result.properties.repository.url ?? '' : '',
      };
    });
};
