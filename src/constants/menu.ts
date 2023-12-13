export const MENUS = ['about', 'blog', 'snippets', 'projects'] as const;

export const MENU_MAP: Record<(typeof MENUS)[number], { href: string; label: string }> = {
  about: { href: '/', label: 'About' },
  blog: { href: '/blog', label: 'Blog' },
  snippets: { href: '/snippets', label: 'Snippets' },
  projects: { href: '/projects', label: 'Projects' },
};
