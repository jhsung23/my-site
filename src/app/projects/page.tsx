import { H1, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';

export default function Page() {
  return (
    <>
      <MenuPageIcon>🗂️</MenuPageIcon>
      <H1 className="mb-3">Projects</H1>
      <Paragraph className="text-secondary">
        지금까지 진행했던 프로젝트예요. 주로 FrontEnd 개발에 참여했어요.
      </Paragraph>
    </>
  );
}
