import { Metadata } from 'next';

import { H1, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';
import { getMenuPageMetaTitle, getPageCanonical } from '@/utils/seo';

export const metadata: Metadata = {
  title: getMenuPageMetaTitle('about'),
  description: '안녕하세요. FrontEnd 개발자 성지현입니다.',
  alternates: {
    canonical: getPageCanonical('about'),
  },
};

export default function AboutPage() {
  return (
    <>
      <MenuPageIcon>👋</MenuPageIcon>
      <H1 className="mb-2">Hello</H1>
      <Paragraph>안녕하세요. FrontEnd 개발자 성지현입니다.</Paragraph>
    </>
  );
}
