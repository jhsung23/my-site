'use client';

import { useEffect, useRef } from 'react';

const giscus = {
  src: 'https://giscus.app/client.js',
  'data-repo': 'jhsung23/my-site',
  'data-repo-id': 'R_kgDOK0zbHg',
  'data-category': 'Comments',
  'data-category-id': 'DIC_kwDOK0zbHs4CfjRo',
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-theme': 'light',
  'data-lang': 'ko',
  'data-loading': 'lazy',
  crossorigin: 'anonymous',
  async: 'true',
} as const;

export default function Comment() {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentRef.current !== null) {
      const script = document.createElement('script');
      Object.entries(giscus).forEach(([attrKey, attrValue]) => {
        script.setAttribute(attrKey, attrValue);
      });
      commentRef.current.appendChild(script);
    }
  }, []);

  return <div ref={commentRef}></div>;
}
