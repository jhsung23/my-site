import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Loading from '@/app/loading';
import { Footer, Header } from '@/components';
import { SITE } from '@/constants/site';
import { env } from '@/lib/env';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  openGraph: {
    siteName: SITE.NAME,
    images: [{ url: '/logo.png', width: 600, height: 600, alt: `logo` }],
    locale: 'ko_KR',
  },
  authors: [{ name: SITE.AUTHOR, url: SITE.AUTHOR_GITHUB }],
};

const Providers = dynamic(() => import('@/components/providers/Providers'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="8CR7AQG6gPJL3e_-d8L6XyQ59cIHLinOPl1UXlRs5o4"
        />
      </head>
      <body className="bg-primary flex min-h-screen flex-col items-center">
        <Providers>
          <Header />
          <main className="w-11/12 max-w-4xl grow">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId={env.GA_ID} />
    </html>
  );
}
