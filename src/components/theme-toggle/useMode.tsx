'use client';

import { useTheme } from 'next-themes';

export default function useMode() {
  const { resolvedTheme, setTheme } = useTheme();

  const isLightMode = resolvedTheme === 'light';
  const isDarkMode = resolvedTheme === 'dark';
  const setDarkMode = () => setTheme('dark');
  const setLightMode = () => setTheme('light');

  const toggleMode = () => {
    if (isLightMode) {
      setDarkMode();
    }
    if (isDarkMode) {
      setLightMode();
    }
  };

  return { currentMode: resolvedTheme, isLightMode, isDarkMode, toggleMode };
}
