import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

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
      <body className="flex flex-col items-center bg-primary">
        <Providers>
          <Header />
          <main className="w-11/12 max-w-5xl">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
