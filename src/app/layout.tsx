import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Loading from '@/app/loading';
import { Footer, Header } from '@/components/layouts';

import './globals.css';

export const metadata: Metadata = {
  // TODO seo 작업
  title: 'jihyun site',
  description: 'jihyun site',
};

const Providers = dynamic(() => import('./Providers'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-primary flex flex-col items-center">
        <Providers>
          <Header />
          <main className="w-11/12 max-w-5xl">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
