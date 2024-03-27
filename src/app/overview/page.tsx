import { Metadata } from 'next';

import { MenuPageIcon } from '@/components';
import { H1, H2 } from '@/components/common';
import { getMenuPageMetaTitle, getPageCanonical } from '@/utils/seo';

import { Section } from './_components';

export const metadata: Metadata = {
  title: getMenuPageMetaTitle('overview'),
  description: '블로그 overview',
  alternates: {
    canonical: getPageCanonical('overview'),
  },
};

export default async function OverviewPage() {
  return (
    <>
      <MenuPageIcon>💭</MenuPageIcon>
      <H1 className="mb-3">Overview</H1>

      <H2 className="mt-12">Blog</H2>
      <hr className="my-5 h-px border-0 bg-black-300 dark:bg-black-750" />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <Section title="TroubleShooting" description="에러 해결 과정을 작성했어요" />
        <Section title="FAS" description="Frontend-Article-Study에서 발표한 자료예요" />
        <Section title="Development" description="직접 시도해보고 깨달은 내용들을 작성했어요" />
        <Section title="Knowledge" description="프로그래밍 개념을 정리했어요" />
      </div>
    </>
  );
}
