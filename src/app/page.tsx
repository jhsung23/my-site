import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { MenuPageIcon } from '@/components';
import { H1, H2, Paragraph } from '@/components/common';
import { getAllPosts } from '@/services/postService';
import { getMenuPageMetaTitle, getPageCanonical } from '@/utils/seo';

import { RecentPostListItem } from './_components';

export const metadata: Metadata = {
  title: getMenuPageMetaTitle('about'),
  description: '안녕하세요. FrontEnd 개발자 성지현입니다.',
  alternates: {
    canonical: getPageCanonical('about'),
  },
};

export default async function AboutPage() {
  const posts = await getAllPosts();

  return (
    <>
      <MenuPageIcon>👋</MenuPageIcon>
      <H1>About</H1>
      <div className="mt-8 flex flex-col items-center gap-10 md:flex-row">
        <Image
          src="/me.webp"
          alt="avatar"
          width={196}
          height={196}
          priority
          className="rounded-full bg-emerald-800"
        />
        <div className="flex flex-col gap-2">
          <H2 className="mb-2">
            안녕하세요!
            <br />
            FrontEnd 개발자 <span className="text-highlight font-extrabold">성지현</span>
            입니다.
          </H2>

          <Paragraph>
            🍀 누군가에게 <span className="text-highlight font-extrabold">선한 영향력</span>을
            전달할 수 있는 개발자를 꿈꾸고 있어요.
          </Paragraph>
          <Paragraph>
            🌳 <span className="text-highlight font-extrabold">보탬</span>이 될 수 있는 요소를 찾아
            실천하고 개선하는 것을 좋아합니다.
          </Paragraph>
          <Paragraph>
            📗 <span className="text-highlight font-extrabold">지식 공유의 즐거움</span>을 느끼며
            꾸준한 스터디 활동을 하고 있어요.
          </Paragraph>

          <div className="mt-2 flex gap-4">
            <a
              href="mailto:jhsung23@naver.com"
              target="_blank"
              className="text-secondary hover:text-highlight"
              aria-label="Email 전송"
            >
              Email
            </a>
            <a
              href="https://github.com/jhsung23"
              target="_blank"
              className="text-secondary hover:text-highlight"
              aria-label="Github"
            >
              Github
            </a>
            <Link href="blog" className="text-secondary hover:text-highlight" aria-label="Blog">
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* TODO: 중첩 라우팅 처리? */}
      <H2 className="mt-20 flex items-baseline justify-between">
        Recent Posts
        <Link
          href="blog"
          className="text-mute text-sm"
          aria-label="더 보기"
          aria-description="블로그에 작성된 글 목록 더 보기"
        >
          더 보기
        </Link>
      </H2>
      <ul className="mt-3 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {posts.slice(0, 4).map((post) => (
          <RecentPostListItem key={post.pageId} {...post} />
        ))}
      </ul>
    </>
  );
}
