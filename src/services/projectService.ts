import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import compact from 'lodash/compact';

import { env } from '@/lib/env';
import { handleHttpRequestError } from '@/lib/error';
import { getAllPagesOfDatabase, getFilteredPageOfDatabaseWithRichText } from '@/lib/notion-client';
import { Project } from '@/types/project';
import { generateWebImageUrl } from '@/utils/contents';
import { extractPropertyOfPage } from '@/utils/notion';
import { detachQueryStringFromUrl } from '@/utils/string';

export const getAllProjects = async () => {
  try {
    const response = await getAllPagesOfDatabase(env.NOTION_PROJECT_DATABASE_ID, {
      property: 'date',
      direction: 'descending',
    });
    const compactResponse = compact(response);
    return compactResponse.map(parseResponseToProject);
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
  return [];
};

export const getProjectBySlug = async (slug: string) => {
  try {
    const response = await getFilteredPageOfDatabaseWithRichText(env.NOTION_PROJECT_DATABASE_ID, {
      property: 'slug',
      targetString: slug,
    });
    const compactResponse = compact(response);
    return compactResponse.map(parseResponseToProject)[0];
  } catch (error: unknown) {
    handleHttpRequestError(error);
  }
};

const parseResponseToProject = ({ id, properties }: PageObjectResponse) =>
  ({
    pageId: id,
    thumbnail: generateWebImageUrl(
      detachQueryStringFromUrl(extractPropertyOfPage(properties.thumbnail) as string),
      id,
    ),
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
