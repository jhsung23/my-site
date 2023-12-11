'use client';

import { ThemeProvider } from 'next-themes';

import StoreProvider from './StoreProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </StoreProvider>
  );
}
