import { MENUS, MENU_MAP } from '@/constants/menu';
import { SITE } from '@/constants/site';

export const getMenuPageMetaTitle = (menu: (typeof MENUS)[number]) => {
  return `${SITE.NAME} | ${MENU_MAP[menu].label}`;
};

export const getPageCanonical = (menu: (typeof MENUS)[number], slug?: string) => {
  const canonical = `${SITE.URL}${MENU_MAP[menu].href}`;
  return slug ? `${canonical}/${slug}` : canonical;
};
