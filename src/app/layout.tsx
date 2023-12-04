import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Header } from '@/components/layouts';
import './globals.css';

export const metadata: Metadata = {
  // TODO seo 작업
  title: 'jihyun site',
  description: 'jihyun site',
};

const ThemeProvider = dynamic(() => import('./providers'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-primary">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
