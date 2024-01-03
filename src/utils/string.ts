import { MD_HYPERLINK } from '@/lib/regexp';

export const parseURIOfMarkdownHyperlink = (mdHyperlink: string) => {
  const [, , fullUrl] = mdHyperlink.match(MD_HYPERLINK) ?? ['', '', ''];
  return fullUrl;
};

export const detachQueryStringFromUrl = (url: string) => {
  return url.split('?')[0];
};
