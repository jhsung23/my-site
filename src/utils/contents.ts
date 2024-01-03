import { NotionToMarkdown } from 'notion-to-md';
import { MdBlock } from 'notion-to-md/build/types';
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
import { HEADING_REGEX } from '@/lib/regexp';

import { detachQueryStringFromUrl, parseURIOfMarkdownHyperlink } from './string';

export type ParsedHtmlContent = Awaited<ReturnType<typeof parseNotionPageToHtml>>;

export const parseNotionPageToMarkdown = async (pageId: string) => {
  const n2m = new NotionToMarkdown({ notionClient: notionClientInstance });
  const mdblocks = (await n2m.pageToMarkdown(pageId)).map((block) => {
    if (block.type === 'image') return handleImageUrl(block);
    return block;
  });
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

export const findHeadingTag = (article: ParsedHtmlContent) => {
  const articleString = article.toString();
  return articleString.match(HEADING_REGEX) ?? [];
};

export const handleImageUrl = (block: MdBlock): MdBlock => {
  const imageUrl = detachQueryStringFromUrl(parseURIOfMarkdownHyperlink(block.parent));
  if (!imageUrl) return block;
  const newImageUrl = `https://jhsung23.notion.site/image/${encodeURIComponent(
    imageUrl,
  )}?table=block&id=${block.blockId}&cache=v2`;
  block.parent = `![code](${newImageUrl})`;
  return block;
};
