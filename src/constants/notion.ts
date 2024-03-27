export type NotionColorSet =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';

export const notionBgColors: Record<NotionColorSet, string> = {
  default: 'bg-tag-lm-default dark:bg-tag-dm-default',
  gray: 'bg-tag-lm-gray dark:bg-tag-dm-gray',
  brown: 'bg-tag-lm-brown dark:bg-tag-dm-brown',
  orange: 'bg-tag-lm-orange dark:bg-tag-dm-orange',
  yellow: 'bg-tag-lm-yellow dark:bg-tag-dm-yellow',
  green: 'bg-tag-lm-green dark:bg-tag-dm-green',
  blue: 'bg-tag-lm-blue dark:bg-tag-dm-blue',
  purple: 'bg-tag-lm-purple dark:bg-tag-dm-purple',
  pink: 'bg-tag-lm-pink dark:bg-tag-dm-pink',
  red: 'bg-tag-lm-red dark:bg-tag-dm-red',
};
