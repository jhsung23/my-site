'use client';

import { useEffect, useState } from 'react';

const getTargetHeading = (minHeading: number, maxHeading: number): string[] => {
  return new Array(maxHeading - minHeading + 1)
    .fill(undefined)
    .map((_, idx) => `h${minHeading + idx}`);
};

export default function useToc(minHeading: number = 1, maxHeading: number) {
  const [activeTitle, setActiveTitle] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveTitle(entry.target.id);
        }
      },
      {
        rootMargin: '-128px 0px -75% 0px',
      },
    );

    const targetTags = getTargetHeading(minHeading, maxHeading);
    const headings = document.querySelectorAll(targetTags.join(', '));
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [minHeading, maxHeading]);

  return [activeTitle, setActiveTitle] as const;
}
