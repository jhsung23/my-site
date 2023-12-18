import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import compact from 'lodash/compact';

import { getAllPagesOfDatabase, getFilteredPageOfDatabaseWithRichText } from '@/apis/notionClient';
import { Project } from '@/types/project';
import { extractPropertyOfPage } from '@/utils/notion';

export const getAllProjects = async () => {
  const response = await getAllPagesOfDatabase(
    `${process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID}`,
    {
      property: 'date',
      direction: 'descending',
    },
  );
  const compactResponse = compact(response);
  return compactResponse.map(parseResponseToProject);
};

export const getProjectBySlug = async (slug: string) => {
  const response = await getFilteredPageOfDatabaseWithRichText(
    `${process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID}`,
    { property: 'slug', targetString: slug },
  );
  const compactResponse = compact(response);
  return compactResponse.map(parseResponseToProject)[0];
};

const parseResponseToProject = ({ id, properties }: PageObjectResponse) =>
  ({
    pageId: id,
    thumbnail: extractPropertyOfPage(properties.thumbnail),
    projectTitle: extractPropertyOfPage(properties.projectTitle),
    description: extractPropertyOfPage(properties.description),
    slug: extractPropertyOfPage(properties.slug),
    tags: extractPropertyOfPage(properties.tags),
    startDate: (extractPropertyOfPage(properties.date) as { startDate: string; endDate: string })
      .startDate,
    endDate: (extractPropertyOfPage(properties.date) as { startDate: string; endDate: string })
      .endDate,
    repository: extractPropertyOfPage(properties.repository),
    team: extractPropertyOfPage(properties.team),
  }) as Project;
