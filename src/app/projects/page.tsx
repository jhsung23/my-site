import { getAllProjects } from '@/apis/projectService';
import { ProjectListItem } from '@/components';
import { H1, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';

export default async function Page() {
  const projects = await getAllProjects();

  return (
    <>
      <MenuPageIcon>🗂️</MenuPageIcon>
      <H1 className="mb-3">Projects</H1>
      <Paragraph className="text-secondary">
        지금까지 진행했던 프로젝트예요. 주로 FrontEnd 개발에 참여했어요.
      </Paragraph>

      <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectListItem key={project.pageId} {...project} />
        ))}
      </ul>
    </>
  );
}
