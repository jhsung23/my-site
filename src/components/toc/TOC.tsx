'use client';

import { parse } from 'node-html-parser';

import { Paragraph } from '@/components/common';
import { ParsedHtmlContent, findHeadingTag } from '@/utils/contents';

import useToc from './useToc';

interface Props {
  content: ParsedHtmlContent;
}
interface TOCHeadingData {
  headingTagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textContent: string;
  href: string;
}

const MIN_HEADING = 2;
const MAX_HEADING = 3;
const PADDING_LEFT = Object.freeze({
  h1: 'pl-0',
  h2: 'pl-0',
  h3: 'pl-3',
  h4: 'pl-6',
  h5: 'pl-9',
  h6: 'pl-12',
});

const parseHeadingData = (article: ParsedHtmlContent): TOCHeadingData[] => {
  const headingTags = findHeadingTag(article);
  return headingTags.map((heading) => {
    const headingElement = parse(heading);
    return {
      headingTagName: headingElement.childNodes[0].childNodes[0].parentNode
        .rawTagName as TOCHeadingData['headingTagName'],
      textContent: headingElement.textContent,
      href: headingElement.querySelector('a')?.attributes.href ?? '',
    };
  });
};
const filterHeadingsUpTo = (maxHeadingNumber: number, headingData: TOCHeadingData[]) => {
  return headingData.filter(({ headingTagName }) => Number(headingTagName[1]) <= maxHeadingNumber);
};

export default function TOC({ content }: Props) {
  const tocHeadingData: TOCHeadingData[] = filterHeadingsUpTo(
    MAX_HEADING,
    parseHeadingData(content),
  );
  const [activeTitle, setActiveTitle] = useToc(MIN_HEADING, MAX_HEADING);

  return (
    <nav className="sticky top-32 flex flex-col gap-4 border-l-2 border-black-200 px-3 py-1 dark:border-black-700">
      <Paragraph className="text-mute text-base font-medium">Table of Contents</Paragraph>
      <ol className="flex flex-col gap-1.5">
        {tocHeadingData.map(({ headingTagName, textContent, href }) => (
          <li
            key={textContent}
            className={`text-sm ${PADDING_LEFT[headingTagName]} ${
              activeTitle === href.slice(1)
                ? 'text-highlight scale-105 font-semibold duration-300 ease-out'
                : 'text-mute scale-100 duration-300 ease-out'
            }`}
          >
            <a href={href} aria-label={textContent} onClick={() => setActiveTitle(href.slice(1))}>
              {textContent}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
