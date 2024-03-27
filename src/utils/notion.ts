import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { isDevelopment } from '@/utils/dev';

type PagePropertyObject = PageObjectResponse['properties'][number];

export const extractPropertyOfPage = (propertyObject: PagePropertyObject) => {
  switch (propertyObject.type) {
    case 'title':
      return extractTitleProperty(propertyObject);
    case 'select':
      return extractSelectProperty(propertyObject);
    case 'multi_select':
      return extractMultiSelectProperty(propertyObject);
    case 'rich_text':
      return extractRichTextProperty(propertyObject);
    case 'date':
      return extractDateProperty(propertyObject);
    case 'url':
      return extractUrlProperty(propertyObject);
    case 'files':
      return extractFilesProperty(propertyObject);
    default:
      if (isDevelopment) {
        throw new Error('Type not matched');
      }
      return '알 수 없음';
  }
};

export const extractTitleProperty = (titlePropertyObject: PagePropertyObject): string => {
  if (titlePropertyObject.type === 'title') {
    return titlePropertyObject.title[0].plain_text;
  }
  return '';
};

export const extractSelectProperty = (selectPropertyObject: PagePropertyObject): string => {
  if (selectPropertyObject.type === 'select') {
    if (selectPropertyObject.select) {
      return selectPropertyObject.select.name;
    }
  }
  return '';
};

export const extractMultiSelectProperty = (
  multiSelectPropertyObject: PagePropertyObject,
): { label: string; color: string }[] => {
  if (multiSelectPropertyObject.type === 'multi_select') {
    return multiSelectPropertyObject.multi_select.map((el) => ({
      label: el.name,
      color: el.color,
    }));
  }
  return [];
};

export const extractRichTextProperty = (richTextPropertyObject: PagePropertyObject): string => {
  if (richTextPropertyObject.type === 'rich_text') {
    if (richTextPropertyObject.rich_text.length) {
      return richTextPropertyObject.rich_text[0].plain_text;
    }
  }
  return '';
};

export const extractDateProperty = (
  datePropertyObject: PagePropertyObject,
): { startDate: string; endDate: string } => {
  if (datePropertyObject.type === 'date') {
    return {
      startDate: datePropertyObject.date?.start ?? '',
      endDate: datePropertyObject.date?.end ?? '',
    };
  }
  return { startDate: '', endDate: '' };
};

export const extractUrlProperty = (urlPropertyObject: PagePropertyObject) => {
  if (urlPropertyObject.type === 'url') {
    return urlPropertyObject.url ?? '';
  }
  return '';
};

export const extractFilesProperty = (filePropertyObject: PagePropertyObject) => {
  if (filePropertyObject.type === 'files') {
    if (filePropertyObject.files[0].type === 'file') {
      return filePropertyObject.files[0].file.url;
    }
    if (filePropertyObject.files[0].type === 'external') {
      return filePropertyObject.files[0].external.url;
    }
  }
  return '';
};
