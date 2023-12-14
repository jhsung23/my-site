import { Metadata } from 'next';
import Image from 'next/image';

import { getAllProjects, getProjectBySlug } from '@/apis/projectService';
import { CalendarIcon, PersonIcon, RepositoryIcon } from '@/assets/icons';
import { ReadingProgressBar } from '@/components';
import { H3 as Description, Paragraph, H1 as Title } from '@/components/common';
import { Project } from '@/types/project';
import { parseNotionPageToHtml } from '@/utils/parseContents';
import { getPageCanonical } from '@/utils/seo';

interface Props {
  params: { slug: string };
}

export interface ProjectWithContent extends Project {
  content: Awaited<ReturnType<typeof parseNotionPageToHtml>>;
}

// TODO 함수 추상화
const getProjectDataBySlug = async (slug: string): Promise<ProjectWithContent> => {
  const project = await getProjectBySlug(slug);
  const content = await parseNotionPageToHtml(project.pageId);

  return { ...project, content };
};

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    params: { slug: project.slug },
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  return {
    title: project.projectTitle,
    description: project.description,
    alternates: {
      canonical: getPageCanonical('projects', project.slug),
    },
    openGraph: {
      images: [{ url: '/logo.png', width: 600, height: 600, alt: `logo` }],
      tags: project.tags,
      type: 'article',
    },
  };
}

export default async function Page({ params }: Props) {
  const { cover, projectTitle, description, startDate, endDate, repository, team, content } =
    await getProjectDataBySlug(params.slug);

  return (
    <>
      <ReadingProgressBar />

      <Title className="mb-3 break-words">{projectTitle}</Title>
      <Description className="mb-1 mt-3 text-lg font-normal">{description}</Description>

      <hr className="bg-mute mb-10 mt-4 h-0.5 border-0" />

      <div className="flex w-full flex-col">
        <section>
          <Image
            src={cover}
            width={400}
            height={400}
            alt={`${projectTitle} thumbnail`}
            priority
            className="h-auto w-full rounded-md"
          />

          <div className="mt-3 flex flex-col gap-1.5">
            <Paragraph className="flex items-center gap-2 font-normal">
              <PersonIcon width={20} height={20} />
              {team}
            </Paragraph>
            <Paragraph className="flex items-center gap-2 font-normal">
              <CalendarIcon width={20} height={20} />
              {startDate} ~ {endDate}
            </Paragraph>
            <Paragraph className="flex items-center gap-2 font-normal">
              <RepositoryIcon width={20} height={20} />
              <a href={repository} target="_blank" className="hover:text-mute">
                Github repository 바로가기
              </a>
            </Paragraph>
          </div>
        </section>

        <hr className="mt-4" />

        <article
          className="prose min-w-full dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </>
  );
}
