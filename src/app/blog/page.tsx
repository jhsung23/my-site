import { Metadata } from 'next';

import { MenuPageIcon } from '@/components';
import { H1, Paragraph } from '@/components/common';
import { ALL } from '@/constants/tag';
import { getMenuPageMetaTitle, getPageCanonical } from '@/utils/seo';

import { Posts, Tags } from './_components';

export const metadata: Metadata = {
  title: getMenuPageMetaTitle('blog'),
  description: 'FrontEnd 개발을 공부하면서 학습한 내용과 경험들을 기록했어요.',
  alternates: {
    canonical: getPageCanonical('blog'),
  },
};

interface Props {
  searchParams: Record<string, string>;
}

export default async function BlogPage({ searchParams }: Props) {
  const selectedTag = searchParams.tag ?? ALL;

  return (
    <>
      <MenuPageIcon>📝</MenuPageIcon>
      <H1 className="mb-3">Blog</H1>
      <Paragraph className="text-secondary">
        FrontEnd 개발을 공부하면서 학습한 내용과 경험들을 기록했어요.
      </Paragraph>

      <Tags selectedTag={selectedTag} />

      <Posts selectedTag={selectedTag} />
    </>
  );
}
