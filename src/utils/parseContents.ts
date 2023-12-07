import { NotionToMarkdown } from 'notion-to-md';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSanitize from 'rehype-sanitize';
import rehypeShiftHeading from 'rehype-shift-heading';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { notionClientInstance } from '@/apis/notionClient';

export const notionPageToMarkdown = async (pageId: string) => {
  const n2m = new NotionToMarkdown({ notionClient: notionClientInstance });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return mdString.parent;
};

export const markdownToHtml = async (markdown: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize) // html sanitizing
    .use(rehypeShiftHeading, { shift: 1 }) // heading 태그 단계 낮추기
    .use(rehypePrettyCode, {
      theme: 'one-dark-pro', // code block 테마 적용
    })
    .use(rehypeStringify)
    .process(markdown);

  return html.value;
};
