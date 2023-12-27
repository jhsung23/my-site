'use client';

import { useCallback, useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setProgress(0);
      return;
    }

    const windowHeight = scrollHeight - clientHeight;
    setProgress((scrollTop / windowHeight) * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <progress
      value={progress}
      max={100}
      className="fixed inset-x-0 top-0 z-10 h-1.5 w-full progress-value:rounded-r progress-value:bg-emerald-500 progress-bg:bg-black-350 dark:progress-bg:bg-black-700 "
    ></progress>
  );
}
