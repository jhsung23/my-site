import { NotionToMarkdown } from 'notion-to-md';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSanitize from 'rehype-sanitize';
import rehypeShiftHeading from 'rehype-shift-heading';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { notionClientInstance } from '@/lib/notion-client';

export type ParsedHtmlContent = Awaited<ReturnType<typeof parseNotionPageToHtml>>;

export const parseNotionPageToMarkdown = async (pageId: string) => {
  const n2m = new NotionToMarkdown({ notionClient: notionClientInstance });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return mdString.parent;
};

export const parseMarkdownToHtml = async (markdown: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize) // html sanitizing
    .use(rehypeShiftHeading, { shift: 1 }) // heading 태그 단계 낮추기
    .use(rehypeSlug) // heading에 id 추가
    .use(rehypeAutoLinkHeadings) // heading에 anchor 추가
    .use(rehypePrettyCode, {
      theme: 'one-dark-pro', // code block 테마 적용
    })
    .use(rehypeStringify)
    .process(markdown);

  return html.value;
};

export const parseNotionPageToHtml = async (pageId: string) => {
  const markdownContent = await parseNotionPageToMarkdown(pageId);
  const htmlContent = await parseMarkdownToHtml(markdownContent);

  return htmlContent;
};

const HEADING_REGEX = /<h([1-6].*?)>(.*?)<\/h([1-6])>/g;

export const findHeadingTag = (article: ParsedHtmlContent) => {
  const articleString = article.toString();
  return articleString.match(HEADING_REGEX) ?? [];
};
